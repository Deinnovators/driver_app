import { api } from '@app/api';
import {
  Box,
  Button,
  Card,
  Container,
  Spacer,
  Text,
  Visibility,
} from '@app/components';
import { IconFamily } from '@app/lib/enums';
import Icon from '@app/lib/icons';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { screenHeight, screenWidth } from '@app/lib/utils';
import { getSpaceSeperatedName } from '@app/lib/utils/string.utils';
import { geo, socket } from '@app/services';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Modal, StyleSheet } from 'react-native';
import { GeoPosition } from 'react-native-geolocation-service';

const getLocation = async () => {
  try {
    const location = await geo.getCurrentPosition();
    return location;
  } catch (error) {
    console.log('geo: ', error);
    return undefined;
  }
};
export interface StoppageUpdateScreenProps
  extends RootNavigationProps<'StoppageUpdater'> {}

const StoppageUpdateScreen: React.FC<StoppageUpdateScreenProps> = ({
  navigation,
  route,
}) => {
  const schedule = route.params.schedule;
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentStopageIndex, setCurrentStopageIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [trip, setTrip] = useState<any>(false);

  const updateStop = async () => {
    if (currentStopageIndex === schedule.stoppages.length - 1) {
      return finishTrip();
    }
    try {
      setLoading(true);
      const nextStopIndex = currentStopageIndex + 1;

      const location: GeoPosition | undefined = await getLocation();

      const data: any = {
        nextStop: schedule.stoppages[nextStopIndex],
        prevLeftAt: new Date().toISOString(),
      };
      if (location?.coords) {
        data.currentLat = location.coords.latitude;
        data.currentLng = location.coords.longitude;
      }
      await api.transports.updateTrip(trip.id, data);
      setLoading(false);
      setCurrentStopageIndex(prev => prev + 1);
    } catch (error) {
      setLoading(false);
    }
  };

  const startTrip = async () => {
    try {
      setLoading(true);
      const location: GeoPosition | undefined = await getLocation();
      const data: any = {
        nextStop: schedule.stoppages[1],
        prevLeftAt: new Date().toISOString(),
        scheduleId: schedule.id,
      };

      if (location?.coords) {
        data.currentLat = location.coords.latitude;
        data.currentLng = location.coords.longitude;
      }

      const t = await api.transports.createTrip(data);

      setTrip(t);

      setIsStarted(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const finishTrip = async () => {
    try {
      setLoading(true);
      await api.transports.finishTrip(trip.id, trip);
      setLoading(false);
      setIsFinished(true);
      setTimeout(() => {
        setIsFinished(false);
        navigation.goBack();
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateTrip = () => {
    if (!isStarted) {
      startTrip();
    } else {
      updateStop();
    }
  };

  useEffect(() => {
    socket.init();

    return socket.destroy;
  }, []);

  return (
    <Container
      safeArea
      headerShown
      headerProps={{
        title: 'Update Stoppage',
        left: {
          icon: 'arrow-left',
          onPress: navigation.goBack,
        },
      }}>
      <Box padding="m">
        <FlatList
          data={schedule.stoppages}
          keyExtractor={item => item}
          renderItem={({ item, index }) => {
            const bgColor =
              isStarted && index === currentStopageIndex
                ? 'green'
                : isStarted && index < currentStopageIndex
                ? 'palePink'
                : undefined;
            const textColor =
              isStarted && index === currentStopageIndex ? 'white' : undefined;
            const showTick = index < currentStopageIndex;
            return (
              <Card bg={bgColor}>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text color={textColor}>{getSpaceSeperatedName(item)}</Text>
                  <Visibility on={showTick}>
                    <Icon family={IconFamily.Feather} name="check" size={20} />
                  </Visibility>
                </Box>
              </Card>
            );
          }}
          ItemSeparatorComponent={Spacer}
        />
        <Spacer />
        <Button
          variant="primary"
          onPress={updateTrip}
          loading={loading}
          title={
            currentStopageIndex === schedule.stoppages.length - 1
              ? 'Finish trip'
              : isStarted
              ? 'Next stop'
              : 'Start trip'
          }
        />
      </Box>
      <Modal visible={isFinished} animationType="fade">
        <Box justifyContent="center" alignItems="center" flex={1}>
          <Image
            source={require('@app/assets/finish_1.gif')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...StyleSheet.absoluteFillObject,
              resizeMode: 'cover',
              height: screenHeight,
              width: screenWidth,
            }}
          />
          <Text variant="heading1">Trip Finished</Text>
        </Box>
      </Modal>
    </Container>
  );
};

export default StoppageUpdateScreen;

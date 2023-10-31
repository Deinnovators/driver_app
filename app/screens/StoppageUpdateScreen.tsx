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
import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet } from 'react-native';

export interface StoppageUpdateScreenProps
  extends RootNavigationProps<'StoppageUpdater'> {}

const stoppages = [
  'Campus',
  'College Mor',
  'Terminal',
  'Moharaja Mor',
  'Shahi Masjid Mor',
  'Shahid Minar Mor',
  'Hospital Mor',
  'Boro Math',
];

const StoppageUpdateScreen: React.FC<StoppageUpdateScreenProps> = ({
  navigation,
}) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentStopageIndex, setCurrentStopageIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const updateStop = () => {
    if (currentStopageIndex === stoppages.length - 1) {
      return finishTrip();
    }
    setCurrentStopageIndex(prev => prev + 1);
  };

  const startTrip = () => {
    setIsStarted(true);
  };

  const finishTrip = () => {
    setIsFinished(true);
    setTimeout(() => {
      setIsFinished(false);
      navigation.goBack();
    }, 1500);
  };

  const updateTrip = () => {
    if (!isStarted) {
      startTrip();
    } else {
      updateStop();
    }
  };

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
          data={stoppages}
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
                  <Text color={textColor}>{item}</Text>
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
          title={
            currentStopageIndex === stoppages.length - 1
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

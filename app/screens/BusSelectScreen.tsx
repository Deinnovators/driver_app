import { api } from '@app/api';
import {
  Box,
  Button,
  Card,
  Container,
  Spacer,
  Text,
  TouchBox,
} from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import {
  getAndSeperatedName,
  getSpaceSeperatedName,
} from '@app/lib/utils/string.utils';
import { geo } from '@app/services';
import { useAuthStore } from '@app/zustores';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

export interface BusSelectScreenProps
  extends RootNavigationProps<'BusSelect'> {}

const Logout = () => {
  const { logout } = useAuthStore();
  return (
    <Box my="m">
      <Button onPress={logout} title="Logout" variant="primary" />
    </Box>
  );
};

const BusSelectScreen: React.FC<BusSelectScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [schedules, setSchedules] = useState<any[]>([]);

  useEffect(() => {
    geo.requestPermission();
    setLoading(true);
    api.transports
      .getAllSchedules()
      .then(res => {
        setSchedules(res);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <Container safeArea headerShown headerProps={{ title: 'Select Bus' }}>
      <Text variant="caption" mx="m">
        Select a bus according to your schedule
      </Text>
      {loading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator />
        </Box>
      ) : (
        <Box padding="m" mb="xl">
          <FlatList
            data={schedules}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchBox
                  onPress={() =>
                    navigation.navigate('StoppageUpdater', { schedule: item })
                  }>
                  <Card>
                    <Box
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center">
                      <Box borderWidth={1} p="s" borderRadius="s" width={115}>
                        <Text variant="heading3" textAlign="center">
                          {dayjs(item.time).format('HH:mma')}
                        </Text>
                      </Box>
                      <Box flex={1} ml="l">
                        <Text variant="comment">
                          From: {getSpaceSeperatedName(item.stoppages[0])}
                        </Text>
                        <Text variant="comment">
                          Trip: {getAndSeperatedName(item.tripName)}
                        </Text>
                        <Text variant="comment">{item.tripKind}</Text>
                      </Box>
                      <Box
                        borderWidth={1}
                        p="s"
                        height={45}
                        width={45}
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="round">
                        <Text variant="heading2">
                          {item.transport.busNumber}
                        </Text>
                      </Box>
                    </Box>
                  </Card>
                </TouchBox>
              );
            }}
            ItemSeparatorComponent={Spacer}
            ListFooterComponent={Logout}
          />
        </Box>
      )}
    </Container>
  );
};

export default BusSelectScreen;

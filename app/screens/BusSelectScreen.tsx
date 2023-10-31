import { Box, Card, Container, Spacer, Text, TouchBox } from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';
import { FlatList } from 'react-native';

export interface BusSelectScreenProps
  extends RootNavigationProps<'BusSelect'> {}

const BusSelectScreen: React.FC<BusSelectScreenProps> = ({ navigation }) => {
  return (
    <Container safeArea headerShown headerProps={{ title: 'Select Bus' }}>
      <Text variant="caption" mx="m">
        Select a bus according to your schedule
      </Text>
      <Box padding="m" mb="xl">
        <FlatList
          data={Array(8).fill(0)}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => {
            return (
              <TouchBox
                onPress={() =>
                  navigation.navigate('StoppageUpdater', { schedule: index })
                }>
                <Card>
                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Box borderWidth={1} p="s" borderRadius="s">
                      <Text variant="heading2">
                        {index + 1}:30 <Text variant="caption">pm</Text>
                      </Text>
                    </Box>
                    <Box>
                      <Text variant="comment">From: Campus</Text>
                      <Text variant="comment">Trip: Students</Text>
                      <Text variant="comment">General</Text>
                    </Box>
                    <Box
                      borderWidth={1}
                      p="s"
                      height={45}
                      width={45}
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="round">
                      <Text variant="heading2">{index + 1}</Text>
                    </Box>
                  </Box>
                </Card>
              </TouchBox>
            );
          }}
          ItemSeparatorComponent={Spacer}
        />
      </Box>
    </Container>
  );
};

export default BusSelectScreen;

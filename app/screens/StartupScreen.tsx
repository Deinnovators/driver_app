import { Box } from '@app/components';
import {
  RootNavigationProps,
  RootNavigationRoutes,
} from '@app/lib/navigation/navigation.types';
import { useAppStore, useAuthStore } from '@app/zustores';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

export interface StartupScreenProps extends RootNavigationProps<'Startup'> {}

const StartupScreen: React.FC<StartupScreenProps> = ({ navigation }) => {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const { token } = useAuthStore();

  const runHydration = useCallback(async () => {
    try {
      await useAuthStore.persist.rehydrate();
      await useAppStore.persist.rehydrate();
      setHydrated(true);
    } catch (error) {}
  }, []);

  const init = useCallback(() => {
    let route: keyof RootNavigationRoutes = 'Login';
    if (token) {
      route = 'BusSelect';
    }
    navigation.replace(route);
  }, [navigation, token]);

  useEffect(() => {
    runHydration();
  }, [runHydration]);

  useEffect(() => {
    const cond = hydrated;
    if (cond) {
      init();
    }
  }, [hydrated, init]);

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator />
    </Box>
  );
};

export default StartupScreen;

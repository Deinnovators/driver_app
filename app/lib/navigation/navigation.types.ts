import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface RootNavigationProps<
  RouteName extends keyof RootNavigationRoutes,
> {
  navigation: NativeStackNavigationProp<RootNavigationRoutes, RouteName>;
  route: RouteProp<RootNavigationRoutes, RouteName>;
}

export type RootNavigationRoutes = {
  Login: undefined;
  BusSelect: undefined;
  StoppageUpdater: { schedule: any };
};

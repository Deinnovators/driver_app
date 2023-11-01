import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationRoutes } from './navigation.types';
import {
  BusSelectScreen,
  LoginScreen,
  StartupScreen,
  StoppageUpdateScreen,
} from '../../screens';
import { nativeStackOptions } from './navigation.options';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

export const rootNavigationRef =
  React.createRef<NavigationContainerRef<RootNavigationRoutes>>();

const { Navigator, Screen } =
  createNativeStackNavigator<RootNavigationRoutes>();

const RootNavigation: React.FC = ({}) => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Navigator initialRouteName="Startup" screenOptions={nativeStackOptions}>
        <Screen name="Startup" component={StartupScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="BusSelect" component={BusSelectScreen} />
        <Screen name="StoppageUpdater" component={StoppageUpdateScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationRoutes } from './navigation.types';
import { LoginScreen } from '../../screens';
import { nativeStackOptions } from './navigation.options';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

export interface RootNavigationProps {}
export const rootNavigationRef =
  React.createRef<NavigationContainerRef<RootNavigationRoutes>>();

const { Navigator, Screen } =
  createNativeStackNavigator<RootNavigationRoutes>();

const RootNavigation: React.FC<RootNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={nativeStackOptions}>
        <Screen name="Login" component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

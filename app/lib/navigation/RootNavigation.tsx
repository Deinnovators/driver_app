import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootNavigationRoutes} from './navigation.types';
import {LoginScreen} from '../../screens';
import {nativeStackOptions} from './navigation.options';

export interface RootNavigationProps {}

const {Navigator, Screen} = createNativeStackNavigator<RootNavigationRoutes>();

const RootNavigation: React.FC<RootNavigationProps> = ({}) => {
  return (
    <Navigator screenOptions={nativeStackOptions}>
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};

export default RootNavigation;

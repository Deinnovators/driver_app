import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import App from './app/App';

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = ({}) => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default AppProvider;

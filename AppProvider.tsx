import React from 'react';
import App from './app/App';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@app/lib/theme';
import { StatusBar } from 'react-native';

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;

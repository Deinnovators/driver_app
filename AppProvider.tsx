import React from 'react';
import App from './app/App';

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = ({}) => {
  return <App />;
};

export default AppProvider;

import {
  Box,
  Button,
  Container,
  Spacer,
  Text,
  TextInput,
} from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';

export interface LoginScreenProps extends RootNavigationProps<'Login'> {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <Container safeArea>
      <Box justifyContent="center" pt={'l'} alignItems="center">
        <Text variant="heading3">Login</Text>
        <Text variant="caption" my="s">
          Enter your credential
        </Text>
      </Box>
      <Spacer space="large" />
      <Box px="m">
        <TextInput label="Email" />
        <TextInput password label="Password" />
        <Spacer space="large" />
        <Button
          onPress={() => navigation.navigate('BusSelect')}
          title="Login"
          variant="primary"
        />
      </Box>
    </Container>
  );
};

export default LoginScreen;

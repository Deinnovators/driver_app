import { api } from '@app/api';
import {
  Box,
  Button,
  Container,
  Spacer,
  Text,
  TextInput,
} from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { useAuthStore } from '@app/zustores';
import React, { useState } from 'react';

export interface LoginScreenProps extends RootNavigationProps<'Login'> {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const auth = useAuthStore();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const login = async () => {
    if (!email || !password) {
      return;
    }
    try {
      setLoading(true);
      const data = await api.auth.login(email, password);
      auth.login(data.user, data.jwt);
      setLoading(false);
      navigation.replace('BusSelect');
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <Container safeArea>
      <Box justifyContent="center" pt={'l'} alignItems="center">
        <Text variant="heading3">Driver Login</Text>
        <Text variant="caption" my="s">
          Enter your credential
        </Text>
      </Box>
      <Spacer space="large" />
      <Box px="m">
        <TextInput
          onChangeText={setEmail}
          label="Email"
          keyboardType="email-address"
          placeholder="Your email"
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={setPassword}
          password
          label="Password"
          autoCapitalize="none"
          placeholder="Your password"
        />
        <Spacer space="large" />
        <Button
          onPress={login}
          title="Login"
          variant="primary"
          loading={loading}
        />
      </Box>
    </Container>
  );
};

export default LoginScreen;

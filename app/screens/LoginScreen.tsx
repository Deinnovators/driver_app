import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Enter your credentials</Text>
        <View>
          <TextInput placeholder="Email" />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  contentContainer: {
    alignItems: 'center',
  },
});

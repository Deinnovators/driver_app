/* eslint-disable react-native/no-inline-styles */
import React, { PropsWithChildren } from 'react';
import Box from '@app/components/box/Box';
import { Theme } from '@app/lib/theme';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Visibility from '@app/components/Visibility';
import Header, { HeaderProps } from '@app/components/headers/Header';
import Loader from '@app/components/Loader';
import { KeyboardAvoidingView } from 'react-native';

export interface ContainerProps extends PropsWithChildren {
  background?: keyof Theme['colors'];
  safeArea?: boolean;
  avoidKeyboard?: boolean;
  safeTop?: boolean;
  headerShown?: boolean;
  headerProps?: HeaderProps;
  showLoader?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  background = 'background',
  safeArea = false,
  avoidKeyboard = false,
  safeTop = false,
  headerShown = false,
  headerProps,
  showLoader,
}) => {
  const insets = useSafeAreaInsets();
  const renderChildren = () => {
    if (!children) {
      return null;
    }

    if (avoidKeyboard && safeArea) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Visibility box={false} on={headerShown}>
            <Header {...headerProps!} />
          </Visibility>
          <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
        </SafeAreaView>
      );
    }
    if (avoidKeyboard && safeTop) {
      return (
        <Box flex={1} style={{ paddingTop: insets.top }}>
          <Visibility box={false} on={headerShown}>
            <Header {...headerProps!} />
          </Visibility>
          <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
        </Box>
      );
    }
    if (safeArea) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Visibility box={false} on={headerShown}>
            <Header {...headerProps!} />
          </Visibility>
          {children}
        </SafeAreaView>
      );
    }
    if (avoidKeyboard) {
      return <KeyboardAvoidingView>{children}</KeyboardAvoidingView>;
    }
    return children;
  };

  return (
    <Box flex={1} backgroundColor={background}>
      {showLoader ? <Loader /> : null}
      <Visibility
        box
        on={safeTop && !avoidKeyboard}
        height={insets.top}
        backgroundColor={background}
      />
      <Visibility box={false} on={safeTop && headerShown && !avoidKeyboard}>
        <Header {...headerProps!} />
      </Visibility>
      {renderChildren()}
    </Box>
  );
};

export default Container;

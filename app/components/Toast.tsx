import { Box, TouchBox } from '@app/components/box';
import { Text } from '@app/components/text';
import Visibility from '@app/components/Visibility';
import { hp } from '@app/lib/utils';
import { useToastStore } from '@app/zustores';
import React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const AnimatedTouchBox = Animated.createAnimatedComponent(TouchBox);

const Toast: React.FC = () => {
  const { toastVisible, message, hideToast } = useToastStore();

  return (
    <Visibility on={toastVisible} box={false}>
      <AnimatedTouchBox
        position="absolute"
        bottom={hp(9)}
        justifyContent="center"
        width="100%"
        entering={FadeIn}
        exiting={FadeOut}
        onPress={hideToast}
        zIndex={99999999}
        px="l"
        activeOpacity={1}
        alignItems="center">
        <Box
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ backgroundColor: 'rgba(0,0,0, 0.7)' }}
          py="s"
          px="m"
          borderRadius="round">
          <Text color="white">{message}</Text>
        </Box>
      </AnimatedTouchBox>
    </Visibility>
  );
};

export default Toast;

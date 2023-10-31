import { Theme } from '@app/lib/theme';
import { createBox } from '@shopify/restyle';
import { Pressable, PressableProps } from 'react-native';
import Animated from 'react-native-reanimated';

export interface PressBoxProps extends PressableProps {}

const PressBox = createBox<Theme, PressBoxProps>(Pressable);

export const AnimtedPressedBox = Animated.createAnimatedComponent(PressBox);

export default PressBox;

import { Theme } from '@app/lib/theme';
import { createBox, BoxProps as ReBoxProps } from '@shopify/restyle';
import Animated from 'react-native-reanimated';

export type BoxProps = ReBoxProps<Theme>;

const Box = createBox<Theme>();

export const AnimatedBox = Animated.createAnimatedComponent(Box);

export default Box;

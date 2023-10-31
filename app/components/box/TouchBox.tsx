import { Theme } from '@app/lib/theme';
import { createBox } from '@shopify/restyle';
import {
  Animated,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface TouchBoxProps extends TouchableOpacityProps {}

const TouchBox = createBox<Theme, TouchBoxProps>(TouchableOpacity);

TouchBox.defaultProps = {
  activeOpacity: 0.7,
};

const AnimatedTouchBox = Animated.createAnimatedComponent(TouchBox);
AnimatedTouchBox.defaultProps = {
  activeOpacity: 0.7,
};
export { AnimatedTouchBox };
export default TouchBox;

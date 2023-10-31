import { Theme } from '@app/lib/theme';
import { createBox } from '@shopify/restyle';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const SafeBox = createBox<Theme, SafeAreaViewProps>(SafeAreaView);

export default SafeBox;

import { useTheme } from '@app/lib/hooks';
import { Theme } from '@app/lib/theme';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T | NamedStyles<T>) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };

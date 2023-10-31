import { Platform, StatusBar, Dimensions } from 'react-native';
import { FONT_FAMILY } from '@app/constants/string.constants';
import { FontWeight } from '@app/lib/enums';

// take font size as percent
export const fp = (percent: number): number => {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar.currentHeight!;

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

// take font size as number constant
export const fv = (
  fontSize: number,
  standardScreenHeight: number = 680,
): number => {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar.currentHeight!;
  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const getFontFamily = (variant: FontWeight = FontWeight.Regular) => {
  return FONT_FAMILY + '-' + variant;
};

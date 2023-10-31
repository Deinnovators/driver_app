import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isMac = Platform.OS === 'macos';
export const isWindows = Platform.OS === 'windows';
export const isWeb = Platform.OS === 'web';
export const platformSelect = Platform.select;

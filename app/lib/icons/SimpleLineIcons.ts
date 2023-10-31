import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json';

const SimpleLineIcons = createIconSet(
  glyphMap,
  'simple-line-icons',
  'SimpleLineIcons.ttf',
);
export type SimpleLineIconsGlyphs = keyof typeof glyphMap;
export default SimpleLineIcons;

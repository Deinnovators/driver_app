import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';

const MaterialIcons = createIconSet(
  glyphMap,
  'Material Icons',
  'MaterialIcons.ttf',
);
export type MaterialIconsGlyphs = keyof typeof glyphMap;
export default MaterialIcons;

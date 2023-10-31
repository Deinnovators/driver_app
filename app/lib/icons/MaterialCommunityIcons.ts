import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

const MaterialCommunityIcons = createIconSet(
  glyphMap,
  'Material Design Icons',
  'MaterialCommunityIcons.ttf',
);
export type MaterialCommunityIconsGlyphs = keyof typeof glyphMap;
export default MaterialCommunityIcons;

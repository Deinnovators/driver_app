import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/FontAwesome.json';

const FontAwesome = createIconSet(glyphMap, 'FontAwesome', 'FontAwesome.ttf');
export type FontAwesomeGlyphs = keyof typeof glyphMap;
export default FontAwesome;

import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Ionicons.json';

const Ionicons = createIconSet(glyphMap, 'Ionicons', 'Ionicons.ttf');
export type IoniconsGlyphs = keyof typeof glyphMap;
export default Ionicons;

import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Fontisto.json';

const Fontisto = createIconSet(glyphMap, 'Fontisto', 'Fontisto.ttf');
export type FontistoGlyphs = keyof typeof glyphMap;
export default Fontisto;

import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Zocial.json';

const Zocial = createIconSet(glyphMap, 'zocial', 'Zocial.ttf');
export type ZocialGlyphs = keyof typeof glyphMap;
export default Zocial;

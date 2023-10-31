import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Entypo.json';

const Entypo = createIconSet(glyphMap, 'Entypo', 'Entypo.ttf');
export type EntypoGlyphs = keyof typeof glyphMap;
export default Entypo;

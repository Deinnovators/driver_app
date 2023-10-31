import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/AntDesign.json';

const AntDesign = createIconSet(glyphMap, 'anticon', 'AntDesign.ttf');
export type AntDesignGlyphs = keyof typeof glyphMap;
export default AntDesign;

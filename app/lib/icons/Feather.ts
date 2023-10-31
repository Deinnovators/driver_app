import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Feather.json';

const Feather = createIconSet(glyphMap, 'Feather', 'Feather.ttf');
export type FeatherGlyphs = keyof typeof glyphMap;
export default Feather;

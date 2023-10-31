import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Octicons.json';

const Octicons = createIconSet(glyphMap, 'Octicons', 'Octicons.ttf');
export type OcticonsGlyphs = keyof typeof glyphMap;
export default Octicons;

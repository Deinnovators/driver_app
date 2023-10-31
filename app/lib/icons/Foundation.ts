import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/Foundation.json';

const Foundation = createIconSet(glyphMap, 'fontcustom', 'Foundation.ttf');
export type FoundationGlyphs = keyof typeof glyphMap;
export default Foundation;

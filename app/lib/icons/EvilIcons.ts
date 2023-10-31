import createIconSet from './createIconSet';
import glyphMap from 'react-native-vector-icons/glyphmaps/EvilIcons.json';

const EvilIcons = createIconSet(glyphMap, 'Evilicons', 'EvilIcons.ttf');
export type EvilIconsGlyphs = keyof typeof glyphMap;
export default EvilIcons;

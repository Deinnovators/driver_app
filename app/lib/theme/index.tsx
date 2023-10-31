import { createTheme } from '@shopify/restyle';
import palette from './palette';
import textVariants from '@app/components/text/textVariants';
import cardVariants from '@app/components/card/cardVariants';
import spacing from './spacing';

const theme = createTheme({
  colors: {
    //app colors
    primary: palette.lavendarIndigo,
    primaryLight: palette.mauve,
    secondary: palette.silverDark,
    danger: palette.strawberry,
    text: palette.black,
    bodyText: palette.onyx,
    textLight: palette.sonicSilver,
    placeholder: palette.philippineGray,
    background: palette.cultured,
    backgroundLight: palette.white,
    borderColor: palette.silvarSand,
    palePink: palette.palePink,
    overlay: palette.overlay,
    red: palette.red,

    //colors
    grey: palette.silverDark,
    transparent: 'transparent',
    white: palette.white,
    lightGrey: palette.lightGrey,
    darkGrey: palette.darkGrey,
    purple: palette.purple,
    green: palette.green,
    black: palette.black,
    oceanBlue: palette.oceanBlue,

    //Gradient
    primaryGradientStart: palette.lavendarFloral,
    primaryGradientEnd: palette.royalPurple,
  },
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: 5,
    m: 10,
    l: 20,
    xl: 32,
    none: 0,
    round: 100 / 2,
  },
  textVariants,
  cardVariants: cardVariants,
});

export type Theme = typeof theme;

export default theme;

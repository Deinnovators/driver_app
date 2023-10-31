import { FontWeight } from '@app/lib/enums';
import { fp, getFontFamily } from '@app/lib/utils';

const textVariants = {
  heading1: {
    fontSize: fp(3),
    color: 'text',
    fontFamily: getFontFamily(FontWeight.Medium),
  },
  heading2: {
    fontSize: fp(2.5),
    color: 'text',
    fontFamily: getFontFamily(FontWeight.Medium),
  },
  heading3: {
    fontSize: fp(2.2),
    color: 'text',
    fontFamily: getFontFamily(FontWeight.Medium),
  },
  subheading: {
    fontSize: fp(1.7),
    color: 'placeholder',
    fontFamily: getFontFamily(FontWeight.Light),
  },
  button: {
    fontSize: fp(1.7),
    color: 'white',
    fontFamily: getFontFamily(FontWeight.Medium),
  },
  title: {
    fontSize: fp(1.7),
    fontFamily: getFontFamily(FontWeight.SemiBold),
  },
  linkbutton: {
    fontSize: fp(1.6),
    color: 'grey',
    fontFamily: getFontFamily(FontWeight.Medium),
  },

  inputlabel: {
    fontSize: fp(1.5),
    color: 'text',
    fontFamily: getFontFamily(FontWeight.Medium),
  },
  error: {
    color: 'danger',
    fontSize: fp(1.5),
    fontFamily: getFontFamily(),
  },
  comment: {
    fontSize: fp(1.5),
    fontFamily: getFontFamily(),
  },
  message: {
    fontSize: fp(1.6),
    fontFamily: getFontFamily(),
  },
  caption: {
    fontSize: fp(1.8),
    color: 'bodyText',
    fontFamily: getFontFamily(),
  },
  body: {
    fontSize: fp(2),
    color: 'bodyText',
    fontFamily: getFontFamily(),
  },
};

export default textVariants;

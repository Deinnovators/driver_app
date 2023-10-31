import { Theme } from '@app/lib/theme';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
  createBox,
} from '@shopify/restyle';

const variant: any = createVariant({ themeKey: 'cardVariants' });

type CardProps = VariantProps<Theme, 'cardVariants'> & {
  children?: React.ReactNode;
};

const CardV = createRestyleComponent<CardProps, Theme>([variant]);

const Card = createBox<Theme, CardProps>(CardV);

export default Card;

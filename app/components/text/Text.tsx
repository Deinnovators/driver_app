import { Theme } from '@app/lib/theme';
import { createText } from '@shopify/restyle';

const Text = createText<Theme>();
Text.defaultProps = {
  variant: 'body',
};

export default Text;

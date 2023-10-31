/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, InteractionManager, ViewStyle } from 'react-native';
import { Theme } from '@app/lib/theme';
import { fp, makeStyles } from '@app/lib/utils';
import { useTheme } from '@app/lib/hooks';
import { Box } from '../box';
import { Text } from '../text';
import BaseComponent from './BaseComponent';
import { BoxProps } from '../box/Box';
import { Feather } from '@app/lib/icons';

type Variants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'outline-primary'
  | 'outline-secondary';
export interface SmallButtonProps extends BoxProps {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
  onPress?: () => void;
  loading?: boolean;
  variant?: Variants;
  block?: boolean;
  disabled?: boolean;
  fullLoader?: boolean;
  background?: keyof Theme['colors'];
  textColor?: keyof Theme['colors'];
  style?: ViewStyle;
  horizontalBlock?: boolean;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  title,
  onPress = () => {},
  loading,
  variant,
  block,
  disabled,
  background,
  textColor,
  style,
  overflow,
  horizontalBlock,
  borderRadius,
  ...rest
}: SmallButtonProps) => {
  const theme = useTheme();
  const styles = useStyles();
  const backgroundColor = disabled
    ? theme.colors.grey
    : variant === 'primary'
    ? theme.colors.primary
    : variant === 'secondary'
    ? theme.colors.secondary
    : variant?.includes('outline')
    ? theme.colors.backgroundLight
    : variant === 'danger'
    ? theme.colors.danger
    : theme.colors.lightGrey;

  let color: keyof Theme['colors'];
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'danger':
      color = 'white';
      break;
    case 'outline-primary':
    case 'outline-secondary':
      color = 'text';
      break;
    default:
      color = 'black';
  }
  color = textColor ? textColor : color;
  const pressFunction = () => {
    if (disabled || loading) {
      return;
    }
    InteractionManager.runAfterInteractions(onPress);
  };

  return (
    <Box
      style={[
        style,
        { alignSelf: block ? 'stretch' : 'auto' },
        horizontalBlock ? { flex: 1 } : undefined,
        variant?.includes('outline')
          ? {
              borderWidth: 1,
              borderColor: variant.includes('primary')
                ? theme.colors.primary
                : theme.colors.secondary,
            }
          : undefined,
      ]}
      borderRadius={borderRadius ?? 'round'}
      overflow={overflow ?? 'hidden'}>
      <BaseComponent
        disabled={disabled}
        style={[
          styles.container,
          {
            backgroundColor: background
              ? theme.colors[background]
              : backgroundColor,
          },
        ]}
        minWidth={100}
        borderRadius={borderRadius ?? 'round'}
        onPress={pressFunction}
        {...rest}>
        {loading ? (
          <ActivityIndicator size={fp(2.6)} color={theme.colors[color]} />
        ) : (
          <Text lineHeight={22} variant="button" color={color}>
            {title}
          </Text>
        )}
      </BaseComponent>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing.s - 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: fp(2.6),
    marginHorizontal: theme.spacing.s,
  },
}));
export default SmallButton;

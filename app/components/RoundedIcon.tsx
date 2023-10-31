import React from 'react';
import { Theme } from '@app/lib/theme';
import { useTheme } from '@app/lib/hooks';
import { Box } from './box';
import Feather, { FeatherGlyphs } from '@app/lib/icons/Feather';
export interface RoundedIconProps {
  name: FeatherGlyphs;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
  size: number;
  iconRatio?: number;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  iconRatio = 0.6,
  color,
  size = 24,
  ...props
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  const theme = useTheme();
  return (
    <Box
      backgroundColor={props.backgroundColor}
      justifyContent="center"
      alignItems="center"
      height={size}
      width={size}
      borderRadius="round">
      <Feather name={props.name} color={theme.colors[color]} size={iconSize} />
    </Box>
  );
};

export default RoundedIcon;

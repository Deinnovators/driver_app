import { BoxProps } from '@shopify/restyle';
import { HEADER_HEIGHT } from '@app/constants/size.constant';
import React, { PropsWithChildren } from 'react';
import Box from '@app/components/box/Box';
import { Theme } from '@app/lib/theme';

export interface BaseHeaderProps extends BoxProps<Theme>, PropsWithChildren {}

const BaseHeader: React.FC<BaseHeaderProps> = ({
  children,
  zIndex,
  ...props
}) => {
  return (
    <Box
      paddingHorizontal="s"
      height={HEADER_HEIGHT}
      flexDirection="row"
      zIndex={zIndex ?? 9999}
      backgroundColor="background"
      alignItems="center"
      {...props}>
      {children}
    </Box>
  );
};

export default BaseHeader;

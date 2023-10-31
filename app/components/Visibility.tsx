import React, { PropsWithChildren } from 'react';
import Box, { BoxProps } from './box/Box';

export interface VisibilityProps extends BoxProps, PropsWithChildren {
  on?: boolean;
  off?: boolean;
  box?: boolean;
}

const Visibility: React.FC<VisibilityProps> = ({
  on,
  off,
  children,
  box = true,
  ...rest
}) => {
  if (!on || off) {
    return null;
  }
  if (!box) {
    return children as JSX.Element;
  }
  return <Box {...rest}>{children}</Box>;
};

export default Visibility;

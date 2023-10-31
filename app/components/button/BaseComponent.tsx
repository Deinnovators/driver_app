import { platformSelect } from '@app/constants/platform.constants';
import React from 'react';
import { PressBox, TouchBox } from '../box';
import { BoxProps } from '../box/Box';
import { PressBoxProps } from '../box/PressBox';
import { TouchBoxProps } from '../box/TouchBox';

export interface BaseComponentProps
  extends Omit<PressBoxProps, keyof TouchBoxProps>,
    TouchBoxProps {}

const BaseComponent: React.FC<BaseComponentProps & BoxProps> = ({
  children,
  activeOpacity,
  android_ripple,
  ...rest
}) => {
  return platformSelect({
    ios: (
      <TouchBox activeOpacity={activeOpacity ?? 0.7} {...rest}>
        {children}
      </TouchBox>
    ),
    android: (
      <PressBox
        android_ripple={android_ripple ?? { borderless: true }}
        {...rest}>
        {children}
      </PressBox>
    ),
  }) as JSX.Element;
};

export default BaseComponent;

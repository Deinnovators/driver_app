import React from 'react';
import RoundedIcon, { RoundedIconProps } from '../RoundedIcon';
import BaseComponent from './BaseComponent';

interface RoundedIcnBtnProps extends RoundedIconProps {
  onPress?: () => void;
}

const RoundedIconButton: React.FC<RoundedIcnBtnProps> = ({
  onPress,
  size = 24,
  ...rest
}: RoundedIcnBtnProps) => {
  return (
    <BaseComponent
      backgroundColor={rest.backgroundColor}
      height={size}
      width={size}
      android_ripple={{ borderless: true, radius: size }}
      justifyContent="center"
      alignItems="center"
      borderRadius="round"
      overflow="hidden"
      onPress={onPress}>
      <RoundedIcon size={size} {...rest} />
    </BaseComponent>
  );
};

export default RoundedIconButton;

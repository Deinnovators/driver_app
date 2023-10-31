import React from 'react';
import Text from '@app/components/text/Text';
import BaseHeader from './BaseHeader';
import RoundedIconButton from '@app/components/button/RoundedIconButton';
import { fp, getFontFamily } from '@app/lib/utils';
import { FeatherGlyphs } from '@app/lib/icons/Feather';
import Visibility from '@app/components/Visibility';
import { FontWeight } from '@app/lib/enums';
import {
  headerIconRatio,
  headerIconSize,
} from '@app/components/headers/header.const';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  left?: {
    icon: FeatherGlyphs;
    onPress: () => void;
  };
  right?: {
    icon: FeatherGlyphs;
    onPress: () => void;
  };
  rightComponent?: React.ReactElement;
}

const Header: React.FC<HeaderProps> = ({
  left,
  right,
  title,
  subtitle,
  rightComponent,
}) => {
  return (
    <BaseHeader>
      {left ? (
        <RoundedIconButton
          name={left.icon}
          color="text"
          backgroundColor="background"
          size={headerIconSize}
          iconRatio={headerIconRatio}
          onPress={left.onPress}
        />
      ) : null}
      <Visibility on={Boolean(title)} flex={1} marginLeft={'s'}>
        <Text
          fontSize={fp(2.4)}
          lineHeight={headerIconSize}
          fontFamily={getFontFamily(FontWeight.Medium)}>
          {title}
        </Text>
        {subtitle ? (
          <Text
            variant="subheading"
            fontFamily={getFontFamily(FontWeight.Medium)}>
            {subtitle}
          </Text>
        ) : null}
      </Visibility>
      <Visibility box={false} off={Boolean(rightComponent)} on={Boolean(right)}>
        <RoundedIconButton
          name={right?.icon ?? 'search'}
          color="text"
          backgroundColor="background"
          size={headerIconSize}
          iconRatio={headerIconRatio}
          onPress={right?.onPress}
        />
      </Visibility>
      <Visibility box={false} on={Boolean(rightComponent)} off={Boolean(right)}>
        {rightComponent}
      </Visibility>
    </BaseHeader>
  );
};

export default Header;

import { Box } from '@app/components/box';
import BaseComponent from '@app/components/button/BaseComponent';
import { BUTTON_HEIGHT } from '@app/constants/size.constant';
import { useTheme } from '@app/lib/hooks';
import Icon from '@app/lib/icons';
import { Theme } from '@app/lib/theme';
import { IconFamily } from '@app/lib/enums';
import React from 'react';

export interface FABProps {
  position?: 'left' | 'right';
  onPress?: () => void;
  iconColor?: keyof Theme['colors'];
  color?: keyof Theme['colors'];
  iconFamily?: IconFamily;
  icon?: string;
}

const FAB: React.FC<FABProps> = ({
  position = 'right',
  iconColor = 'white',
  color = 'primary',
  iconFamily = IconFamily.Feather,
  icon = 'plus',
  onPress,
}) => {
  const theme = useTheme();
  const icColor = theme.colors[iconColor];
  return (
    <Box zIndex={99999} position="absolute" bottom={8} {...{ [position]: 8 }}>
      <BaseComponent
        onPress={onPress}
        bg={color}
        justifyContent="center"
        alignItems="center"
        height={BUTTON_HEIGHT}
        borderRadius="round"
        width={BUTTON_HEIGHT}>
        <Icon
          family={iconFamily}
          name={icon}
          color={icColor}
          size={BUTTON_HEIGHT * 0.6}
        />
      </BaseComponent>
    </Box>
  );
};

export default FAB;

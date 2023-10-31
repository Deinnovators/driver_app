/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RnTextInputProps,
} from 'react-native';
import { Theme } from '@app/lib/theme';
import { Box, TouchBox } from '../box';
import { Text } from '../text';
import Icon, { FeatherGlyphs } from '@app/lib/icons/Feather';
import { RoundedIconButton } from '../button';
import { useTheme } from '@app/lib/hooks';
import { fp, getFontFamily } from '@app/lib/utils';
import { INPUT_HEIGHT } from '@app/constants/size.constant';

interface TextInputProps extends RnTextInputProps {
  icon?: FeatherGlyphs;
  placeholder?: string;
  error?: string;
  label?: string;
  labelVariant?: keyof Theme['textVariants'];
  borderRadius?: keyof Theme['borderRadii'];
  touched?: boolean;
  height?: number;
  box?: boolean;
  password?: boolean;
}
export type TextInputRef = RNTextInput;

const SIZE = 18;

const TextInput: React.FC<TextInputProps> = ({
  icon,
  error,
  touched,
  label,
  labelVariant = 'inputlabel',
  height,
  box = true,
  password,
  borderRadius,
  style,
  ...props
}) => {
  const hereRef = useRef<TextInputRef>();
  const theme = useTheme();
  const reColor: keyof typeof theme.colors = !touched
    ? 'text'
    : !error
    ? 'primary'
    : 'danger';
  const color = theme.colors[reColor];
  const [view, setView] = React.useState<boolean>(false);

  return (
    <TouchBox activeOpacity={1} onPress={() => hereRef.current?.focus()}>
      {label ? (
        <Text variant={labelVariant as any} marginBottom="s" marginLeft="s">
          {label}
        </Text>
      ) : null}
      <Box
        flexDirection="row"
        paddingLeft={!icon ? 'm' : 'none'}
        alignItems={props.multiline ? 'flex-start' : 'center'}
        borderRadius={borderRadius ? borderRadius : box ? 's' : 'none'}
        borderWidth={box ? StyleSheet.hairlineWidth : 0}
        borderBottomWidth={StyleSheet.hairlineWidth}
        height={height || INPUT_HEIGHT}
        borderColor="borderColor">
        {icon ? (
          <Icon
            name={icon}
            size={SIZE}
            style={[
              {
                paddingLeft: theme.spacing.m,
                paddingRight: theme.spacing.s,
                alignSelf: 'center',
              },
              style,
            ]}
            color={color}
          />
        ) : null}
        <RNTextInput
          ref={hereRef as any}
          underlineColorAndroid="transparent"
          style={{
            flex: 1,
            color: theme.colors.bodyText,
            fontFamily: getFontFamily(),
          }}
          secureTextEntry={password && !view}
          placeholderTextColor={theme.colors.placeholder}
          {...props}
        />
        {touched && !password ? (
          <Box marginRight="m" marginLeft="s">
            <Icon
              name={!error ? 'check' : 'x'}
              color={color}
              backgroundColor="background"
              size={SIZE}
            />
          </Box>
        ) : null}
        {password ? (
          <Box marginRight="m" marginLeft="s">
            <RoundedIconButton
              name={view ? 'eye' : 'eye-off'}
              color={error ? 'danger' : !touched ? 'text' : 'primary'}
              backgroundColor="background"
              size={SIZE}
              iconRatio={0.9}
              onPress={() => setView(!view)}
            />
          </Box>
        ) : null}
      </Box>
      <Box marginTop="s">
        {error ? (
          <Text marginHorizontal="m" variant="error" fontSize={fp(1.5)}>
            {error}
          </Text>
        ) : null}
      </Box>
    </TouchBox>
  );
};

export default TextInput;

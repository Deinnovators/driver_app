import React, { useCallback, useRef, useState } from 'react';
import { AnimatedBox } from '@app/components/box';
import { RoundedIconButton } from '@app/components/button';
import BaseHeader from '@app/components/headers/BaseHeader';
import {
  headerIconRatio,
  headerIconSize,
} from '@app/components/headers/header.const';
import { useMount, useTheme } from '@app/lib/hooks';
import { getFontFamily } from '@app/lib/utils';
import { TextInput } from 'react-native';
import { ZoomInRight } from 'react-native-reanimated';

export interface SearchHeaderProps {
  placeholder?: string;
  onBackPress?: () => void;
  onSearch?: (query: string) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  onSearch,
  onBackPress,
  placeholder,
}) => {
  const [text, setText] = useState<string>('');
  const ref = useRef<TextInput>();

  const theme = useTheme();

  useMount(() => {
    ref.current?.focus();
  });

  const updateText = useCallback((t: string) => {
    setText(t);
  }, []);

  const search = useCallback(() => {
    if (!text) return;
    onSearch?.(text);
  }, [text, onSearch]);

  return (
    <BaseHeader>
      <RoundedIconButton
        name='chevron-left'
        backgroundColor='background'
        size={headerIconSize}
        iconRatio={headerIconRatio}
        color='text'
        onPress={onBackPress}
      />
      <AnimatedBox
        height={headerIconSize + 16}
        px='m'
        mr='s'
        bg='lightGrey'
        flex={1}
        entering={ZoomInRight}
        borderRadius='round'>
        <TextInput
          ref={ref as any}
          underlineColorAndroid='transparent'
          style={{
            flex: 1,
            color: theme.colors.bodyText,
            fontFamily: getFontFamily(),
          }}
          placeholderTextColor={theme.colors.placeholder}
          placeholder={placeholder}
          value={text}
          onChangeText={updateText}
          onSubmitEditing={search}
        />
      </AnimatedBox>
      <RoundedIconButton
        name='search'
        backgroundColor='background'
        size={headerIconSize}
        iconRatio={headerIconRatio}
        color='text'
        onPress={search}
      />
    </BaseHeader>
  );
};

export default SearchHeader;

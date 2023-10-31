import React from 'react';
import { TextProps, OpaqueColorValue } from 'react-native';

import { createIconSet } from 'react-native-vector-icons';

export const DEFAULT_ICON_SIZE = 12;
export const DEFAULT_ICON_COLOR = 'black';

export interface IconProps<GLYPHS extends string> extends TextProps {
  name: GLYPHS;
  size?: number;
  color?: string | OpaqueColorValue;
}

export type GlyphMap<G extends string> = { [K in G]: number | string };

export interface Icon<G extends string, FN extends string> {
  defaultProps: any;
  glyphMap: GlyphMap<G>;
  getRawGlyphMap: () => GlyphMap<G>;
  getFontFamily: () => FN;
  new (props: IconProps<G>): React.Component<IconProps<G>>;
}

export default function <G extends string, FN extends string>(
  glyphMap: GlyphMap<G>,
  fontName: FN,
  font: any,
): Icon<G, FN> {
  const RNVIconComponent: any = createIconSet(glyphMap, fontName, font);

  return class Icon extends React.Component<IconProps<G>> {
    static defaultProps = RNVIconComponent.defaultProps;
    static glyphMap = glyphMap;
    static getRawGlyphMap = () => glyphMap;
    static getFontFamily = () => fontName;

    _icon?: any;

    setNativeProps(props: any) {
      if (this._icon) {
        this._icon.setNativeProps(props);
      }
    }

    render() {
      return (
        <RNVIconComponent
          ref={(view: any) => {
            this._icon = view;
          }}
          {...this.props}
        />
      );
    }
  };
}

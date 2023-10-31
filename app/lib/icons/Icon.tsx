import React from 'react';
import { OpaqueColorValue, TextStyle } from 'react-native';
import AntDesign, { AntDesignGlyphs } from './AntDesign';
import Entypo, { EntypoGlyphs } from './Entypo';
import EvilIcons, { EvilIconsGlyphs } from './EvilIcons';
import Feather, { FeatherGlyphs } from './Feather';
import FontAwesome, { FontAwesomeGlyphs } from './FontAwesome';
import Fontisto, { FontistoGlyphs } from './Fontisto';
import Foundation, { FoundationGlyphs } from './Foundation';
import Ionicons, { IoniconsGlyphs } from './Ionicons';
import MaterialCommunityIcons, {
  MaterialCommunityIconsGlyphs,
} from './MaterialCommunityIcons';
import MaterialIcons, { MaterialIconsGlyphs } from './MaterialIcons';
import Octicons, { OcticonsGlyphs } from './Octicons';
import SimpleLineIcons, { SimpleLineIconsGlyphs } from './SimpleLineIcons';
import Zocial, { ZocialGlyphs } from './Zocial';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconFamily } from '@app/lib/enums';

interface IconProps<T> {
  size?: number;
  color?: string | OpaqueColorValue;
  style?: TextStyle;
  family: T;
  name: T extends IconFamily.Feather
    ? FeatherGlyphs
    : T extends IconFamily.AntDesign
    ? AntDesignGlyphs
    : T extends IconFamily.Entypo
    ? EntypoGlyphs
    : T extends IconFamily.EvilIcons
    ? EvilIconsGlyphs
    : T extends IconFamily.FontAwesome
    ? FontAwesomeGlyphs
    : T extends IconFamily.FontAwesome5
    ? string
    : T extends IconFamily.Fontisto
    ? FontistoGlyphs
    : T extends IconFamily.Foundation
    ? FoundationGlyphs
    : T extends IconFamily.Ionicons
    ? IoniconsGlyphs
    : T extends IconFamily.MaterialCommunityIcons
    ? MaterialCommunityIconsGlyphs
    : T extends IconFamily.MaterialIcons
    ? MaterialIconsGlyphs
    : T extends IconFamily.Octicons
    ? OcticonsGlyphs
    : T extends IconFamily.SimpleLineIcons
    ? SimpleLineIconsGlyphs
    : ZocialGlyphs;
}

function Icon<T extends IconFamily>({ family, name, ...rest }: IconProps<T>) {
  switch (family) {
    case IconFamily.AntDesign:
      return <AntDesign name={name as any} {...rest} />;
    case IconFamily.Entypo:
      return <Entypo name={name as any} {...rest} />;
    case IconFamily.EvilIcons:
      return <EvilIcons name={name as any} {...rest} />;
    case IconFamily.FontAwesome:
      return <FontAwesome name={name as any} {...rest} />;
    case IconFamily.Fontisto:
      return <Fontisto name={name as any} {...rest} />;
    case IconFamily.Foundation:
      return <Foundation name={name as any} {...rest} />;
    case IconFamily.Ionicons:
      return <Ionicons name={name as any} {...rest} />;
    case IconFamily.MaterialCommunityIcons:
      return <MaterialCommunityIcons name={name as any} {...rest} />;
    case IconFamily.MaterialIcons:
      return <MaterialIcons name={name as any} {...rest} />;
    case IconFamily.Octicons:
      return <Octicons name={name as any} {...rest} />;
    case IconFamily.SimpleLineIcons:
      return <SimpleLineIcons name={name as any} {...rest} />;
    case IconFamily.Zocial:
      return <Zocial name={name as any} {...rest} />;
    case IconFamily.FontAwesome5:
      return <FontAwesome5 name={name as any} {...rest} />;
    default:
      return <Feather name={name as any} {...rest} />;
  }
}

export default Icon;

import { FeatherGlyphs } from '@app/lib/icons/Feather';
import { DrawerRoutes } from '@app/lib/navigation/navigation.types';

type DrawerMenuItem = {
  route: keyof DrawerRoutes;
  icon: FeatherGlyphs;
  title: string;
};

export const DRAWER_PRIMARY_MENU: DrawerMenuItem[] = [
  {
    route: 'BottomTab',
    icon: 'home',
    title: 'home',
  },
  {
    route: 'About',
    icon: 'info',
    title: 'about_app',
  },
  // TODO: implement this routes
  // {
  //   route: 'Products',
  //   icon: 'box',
  //   title: 'products',
  // },
  // {
  //   route: 'Settings',
  //   icon: 'settings',
  //   title: 'settings',
  // },
];

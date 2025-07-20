import type { NavigationLink } from '../types/navigation.types';

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: 'Dashboard',
    iconName: 'icon:squares',
    linkTo: '/dashboard',
  },
  {
    name: 'Companies',
    iconName: 'icon:briefcase',
    linkTo: '/companies',
  },
];

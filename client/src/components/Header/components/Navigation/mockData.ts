import { OptionType } from "../type/type";
import { OptionPriority } from "../type/priority";
import { NavigationOption } from "../type/NavigationOptions";

export const navigationOptions: NavigationOption[] = [
  { 
    title: 'Home',
    href: '/home',
    type: OptionType.Item,
    priority: OptionPriority.Main,
  },
  { 
    title: 'Services',
    href: '/services',
    type: OptionType.Dropdown,
    priority: OptionPriority.Main,
    children: [
      {
        title: 'Sub-Menu 1',
        href: '/sub-menu-1',
        type: OptionType.Item,
        priority: OptionPriority.Secondary,
      },
      {
        title: 'Sub-Menu 2',
        href: '/sub-menu-2',
        type: OptionType.Dropdown,
        priority: OptionPriority.Secondary,
        children: [
          {
            title: 'Turpis consectetur 3',
            href: '/turpis_consectetur-3',
            type: OptionType.Item,
            priority: OptionPriority.Secondary,
          },
          {
            title: 'Senectus cursus pretium malesuada.',
            href: '/senectus-cursus',
            type: OptionType.Item,
            priority: OptionPriority.Secondary,
          },
          {
            title: 'Luctus neque frin 4',
            href: '/luctus-neque-frin-4',
            type: OptionType.Item,
            priority: OptionPriority.Secondary,
          },
        ], 
      },
      {
        title: 'Sub-Menu 3',
        href: '/sub-menu-3',
        type: OptionType.Item,
        priority: OptionPriority.Secondary,
      },
    ]
  },
  { 
    title: 'About',
    href: '/about',
    type: OptionType.Item,
    priority: OptionPriority.Main,
  },
  { 
    title: 'Book now',
    href: '/book-now',
    type: OptionType.Item,
    priority: OptionPriority.Main,
  },
  { 
    title: 'Shop',
    href: '/shop',
    type: OptionType.Item,
    priority: OptionPriority.Main,
  },
  { 
    title: 'Blog',
    href: '/blog',
    type: OptionType.Item,
    priority: OptionPriority.Main,
  },
  { 
    title: 'Contact',
    href: '/contact',
    type: OptionType.Item,
    priority: OptionPriority.Main,
  },
]
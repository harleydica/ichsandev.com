import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChartBar,
  IconDeviceDesktop,
  IconFlame,
  IconMessageCircle,
  IconPencil,
  IconTag,
  IconUserCircle,
} from '@tabler/icons'

import { DropdownItemType } from '@/components/Dropdown'
import { HeroLinks } from '@/components/Home/Hero'
import { FooterLinks } from '@/components/Layout/Footer'

export const HEADER_LINKS: DropdownItemType[] = [
  {
    icon: <IconPencil />,
    href: '/artikel',
    text: 'Artikel',
  },
  {
    icon: <IconTag />,
    href: '/kategori',
    text: 'Kategori',
  },
  {
    icon: <IconUserCircle />,
    href: '/about',
    text: 'About',
  },
]

export const FOOTER_LINKS: FooterLinks = [
  {
    links: [
      {
        href: '/',
        title: 'Home',
      },
      {
        href: '/artikel',
        title: 'Artikel',
      },
      {
        href: '/kategori',
        title: 'Kategori',
      },
    ],
  },
  {
    links: [
      {
        href: '/about',
        title: 'Tentang',
      }
    ],
  },
  {
    links: [
      {
        href: 'https://www.facebook.com/ichsanputr/',
        title: 'Facebook',
      },
      {
        href: 'https://github.com/ichsanputr',
        title: 'GitHub',
      },
      {
        href: 'https://www.youtube.com/channel/UClUtIblK_TBgD6LZ1_7rvig',
        title: 'YouTube',
      },
    ],
  },
]

export const HERO_LINKS: HeroLinks = [
  {
    icon: <IconBrandGithub size={28} />,
    href: 'https://github.com/ichsanputr',
  },
  {
    icon: <IconBrandInstagram size={28} />,
    href: 'https://www.instagram.com/ichsandev/',
  },
  {
    icon: <IconBrandYoutube size={28} />,
    href: 'https://www.youtube.com/channel/UClUtIblK_TBgD6LZ1_7rvig',
  },
  {
    icon: <IconBrandFacebook size={28} />,
    href: 'https://www.facebook.com/ichsanputr/',
  },
]

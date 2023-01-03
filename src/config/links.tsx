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
  IconUserCircle,
} from '@tabler/icons'

import { DropdownItemType } from '@/components/Dropdown'
import { HeroLinks } from '@/components/Home/Hero'
import { FooterLinks } from '@/components/Layout/Footer'

export const HEADER_LINKS: DropdownItemType[] = [
  {
    icon: <IconPencil />,
    href: '/blog',
    text: 'Blog',
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
        href: '/blog',
        title: 'Blog',
      },
      {
        href: '/about',
        title: 'About',
      },
      {
        href: '/feed.xml',
        title: 'RSS',
      },
    ],
  },
  {
    links: [
      {
        href: '/guestbook',
        title: 'Guestbook',
      },
      {
        href: '/uses',
        title: 'Uses',
      },
      {
        href: '/projects',
        title: 'Projects',
      },
      {
        href: '/design',
        title: 'Design',
      },
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
    href: 'https://github.com/tszhong0411',
  },
  {
    icon: <IconBrandInstagram size={28} />,
    href: 'https://www.instagram.com/tszhong0411/',
  },
  {
    icon: <IconBrandYoutube size={28} />,
    href: 'https://www.youtube.com/@tszhong0411',
  },
  {
    icon: <IconBrandFacebook size={28} />,
    href: 'https://www.facebook.com/tszhonglai.0411/',
  },
  {
    icon: <IconBrandTwitter size={28} />,
    href: 'https://twitter.com/TszhongLai0411',
  },
]

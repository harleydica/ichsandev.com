import Link from '@/components/Link'
import Image from '@/components/MDXComponents/Image'

import { HERO_LINKS } from '@/config/links'

const Hero = () => {
  return (
    <div className='space-y-6 md:my-16 my-16'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
        <div className='space-y-4 md:max-w-lg'>
          <h1 className='text-4xl font-bold text-hong-fg'>IchsanDev 💻</h1>
          <h2 className='text-base md:text-lg font-medium text-accent-5'>
            Semua tentang pemrograman android, website, backend, cloud computing, dan devops ada disini 😉
          </h2>
        </div>
        <div className='h-20 w-20 md:h-28 md:w-28'>
          <Image
            src='/static/images/avatar.png'
            width={112}
            height={112}
            alt='ichsandev'
            rounded='rounded-full'
            loading='eager'
            priority
          />
        </div>
      </div>
      <div className='flex gap-6'>
        {HERO_LINKS.map((link, i) => (
          <Link key={i} href={link.href} icon={false} animation={false}>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Hero

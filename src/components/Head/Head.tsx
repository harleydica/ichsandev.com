'use client'

import { usePathname } from 'next/navigation'
import { NextSeo, NextSeoProps } from 'next-seo'

import { favicons } from '@/lib/favicons'

type HeadProps = NextSeoProps

const Head = (props: HeadProps) => {
  const pathname = usePathname()
  const {
    title,
    description = '小康 – 16 yrs • Student • Full-stack Web Development Student',
    ...rest
  } = props

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <script async defer data-website-id="72ba89c8-3791-479b-b16b-e929f034b309" src="https://umami.taufikcrisnawan.dev/umami.js"></script>
      <NextSeo
        useAppDir
        titleTemplate='%s - IchsanDev'
        title={title}
        defaultTitle='IchsanDev'
        description={description}
        canonical={`https://ichsandev.com${pathname}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://ichsandev.com${pathname}`,
          type: 'website',
          title: title ?? '小康',
          description,
          images: [
            {
              url: 'https://ichsandev.com/static/images/og/og.png',
              width: 1200,
              height: 630,
              alt: '小康 – 16 yrs • Student • Full-stack Web Development Student',
            },
          ],
        }}
        additionalLinkTags={[...favicons]}
        {...rest}
      />
    </>
  )
}

export default Head

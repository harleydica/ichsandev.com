import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/MDXComponents'

const getPage = () => {
  const page = allPages.find((page) => page.slug === 'about')

  return page
}

const AboutPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <>
      <h2 className='my-4 text-4xl font-bold'>About Me</h2>
      <p className='mb-8 text-accent-5'>👋 Halo! I am Muhammad Ichsan.</p>
      <div className='prose prose-zinc w-full max-w-none dark:prose-invert'>
        <MDXComponent components={MDXComponents} />
      </div>
    </>
  )
}

export default AboutPage

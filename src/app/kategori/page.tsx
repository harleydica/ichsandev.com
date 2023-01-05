import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import CardCategory from '@/components/CardCategory'
import { getAllPosts } from '@/lib/mdx'

const getPage = () => {
  const page = allPages.find((page) => page.slug === 'about')

  return page
}

const AboutPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)
  const posts = getAllPosts({
    limit: 6,
  })

  return (
    <>
      <h1 className='my-4 text-3xl font-bold'>Kategori 🏷️</h1>
      <h1 className='my-4'>Silahkan dipilih artikel dengan kategori yang anda inginkan</h1>
      <section className="flex items-stretch flex-wrap flex-auto gap-4 py-4"><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">AWS</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">x64</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">dart</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">UDP</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">networking</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">Proxy</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">NASM</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">Qemu</button><button className="inline-flex items-center justify-center py-2 px-4 rounded text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">Flutter Journey</button></section>
      <p className='py-4 text-xl font-bold'>Hasil:</p>
      <CardCategory posts={posts} />
    </>
  )
}

export default AboutPage

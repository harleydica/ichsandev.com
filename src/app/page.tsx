import { getAllPosts } from '@/lib/mdx'

import BlogPosts from '@/components/Home/BlogPosts'
import Hero from '@/components/Home/Hero'

const HomePage = () => {
  const posts = getAllPosts({
    limit: 4,
  })

  return (
    <>
      <Hero />
      <BlogPosts posts={posts} />
    </>
  )
}

export default HomePage

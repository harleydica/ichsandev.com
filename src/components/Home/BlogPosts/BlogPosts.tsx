import { IconArrowRight } from '@tabler/icons'
import Link from 'next/link'

import PostCard from '@/components/PostCard'

import { BlogPostCore } from '@/types'

type BlogPostsProps = {
  posts: BlogPostCore[]
}

const BlogPosts = (props: BlogPostsProps) => {
  const { posts } = props

  return (
    <>
      <h2 className='mb-8 text-2xl font-bold'>Artikel Terpopuler 🔥</h2>
      <div className='grid gap-4 sm:grid-cols-2'>
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      <div className='flex'>
        <Link
          href='/artikel'
          className='group my-8 flex items-center gap-2 text-lg font-medium'
        >
          <span>Lihat semua artikel</span>
          <IconArrowRight className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
        </Link>
      </div>
    </>
  )
}

export default BlogPosts

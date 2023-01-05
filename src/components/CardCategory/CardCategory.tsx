import { IconArrowRight } from '@tabler/icons'
import Link from 'next/link'

import PostCard from '@/components/PostCard'

import { BlogPostCore } from '@/types'

type BlogPostsProps = {
  posts: BlogPostCore[]
}

const CardCategory = (props: BlogPostsProps) => {
  const { posts } = props

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-2'>
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </>
  )
}

export default CardCategory

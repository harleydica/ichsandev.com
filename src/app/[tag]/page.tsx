'use client'

import React from 'react'

import { getAllPosts } from '@/lib/mdx'

import PostCard from '@/components/PostCard'

type TagPageProps = {
  params: {
    tag: string
  }
}

const TagPage = (props: TagPageProps) => {
  const { params } = props

  const posts = getAllPosts()

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(params.tag)
  )

  return (
    <>
      <div className='mb-8 space-y-8'>
        <h1 className='my-4 text-3xl font-bold'>Kategori: {params.tag}</h1>
        <p className='text-accent-5'>
          {posts.length}{' '} artikel sudah ditulis di kategori {params.tag}{' '} 🥳
        </p>
      </div>
      {!filteredPosts.length && (
        <div className='text-center text-xl'>No posts found</div>
      )}
      <div className='grid gap-4 sm:grid-cols-2'>
        {filteredPosts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </>
  )
}

export default TagPage

import { BlogPost } from 'contentlayer/generated'

export type BlogPostCore = Pick<
  BlogPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date' | 'image' | 'tag'
>

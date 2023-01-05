import { allBlogPosts } from 'contentlayer/generated'

import Head from '@/components/Head'

type BlogPostHeadProps = {
  params: {
    tag: string
  }
}

const BlogPostHead = (props: BlogPostHeadProps) => {
  const { params } = props

  const tag = 'Kategori ' + params.tag

  return (
    <Head
      title={tag}
      description={params.tag}
      openGraph={{
        description: `${params.tag}`,
        type: 'article',
        title: `${params.tag} | IchsanDev`,
      }}
    />
  )
}

export default BlogPostHead

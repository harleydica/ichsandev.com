'use client'

import {
  IconBrandFacebook,
  IconBrandReddit,
  IconBrandTwitter,
  IconTag,
} from '@tabler/icons'
import { allBlogPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ArticleJsonLd } from 'next-seo'
import React from 'react'

import { isProduction } from '@/lib/constants'
import { useFormattedDate } from '@/hooks'

import Comment from '@/components/Comment'
import CommentCounter from '@/components/CommentCounter'
import LikeButton from '@/components/LikeButton'
import Link from '@/components/Link'
import MDXComponents from '@/components/MDXComponents'
import TableOfContents from '@/components/TableOfContents'
import ViewCounter from '@/components/ViewCounter'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

const editURL = (slug: string) =>
  `https://github.com/ichsanputr/ichsandev.com/edit/main/src/contents/blog/${slug}.mdx`

const twitterShareURL = (slug: string, title: string) =>
  `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
    `https://ichsandev.com/blog/${slug}`
  )}`

const facebookShareURL = (slug: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    `https://ichsandev.com/blog/${slug}`
  )}`

const redditShareURL = (slug: string, title: string) =>
  `https://www.reddit.com/submit?title=${title}&url=${encodeURIComponent(
    `https://ichsandev.com/blog/${slug}`
  )}`

const BlogPostPage = (props: BlogPostPageProps) => {
  const { slug } = props.params

  const post = allBlogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const MDXComponent = useMDXComponent(post.body.code)
  const pathname = usePathname()

  const { title, summary, date, modifiedTime, tag } = post
  const formattedDate = useFormattedDate(date)
  const ISOModifiedTime = new Date(modifiedTime).toISOString()

  return (
    <>
      <ArticleJsonLd
        useAppDir={true}
        url={`https://ichsandev.com${pathname}`}
        title={title}
        datePublished={date}
        modifiedTime={ISOModifiedTime}
        description={summary}
        authorName={{
          name: 'Muhammad Ichsan',
          url: 'https://ichsandev.com',
        }}
        publisherLogo='https://ichsandev.com/static/images/avatar.png'
        publisherName='Muhammad Ichsan'
        type='Article'
        images={[`https://ichsandev.com/api/og?title=${title}&date=${date}`]}
      />
      <h1 className='text-3xl md:text-4xl font-bold'>{title}</h1>
      <div className='flex items-center gap-2'>
        {isProduction && (
          <>
            <ViewCounter type='POST' slug={slug} />
            <div>/</div>
            <CommentCounter />
          </>
        )}
      </div>
      <div className='mt-2 flex flex-col justify-between lg:flex-row'>
        <article className='w-full lg:w-[540px]'>
        <span className="inline-flex items-center justify-center my-4 py-1 px-1.5 rounded text-xs md:text-sm font-medium text-fuchsia-700 bg-fuchsia-100 dark:text-fuchsia-100 dark:bg-fuchsia-800">{tag}</span>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4"><div className="flex items-center gap-2 text-sm md:text-base"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p>8 min read</p></div><div class="flex items-center gap-2 text-sm md:text-base"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg><p>—</p></div></div>
          <div className="flex items-center gap-2"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><time class="text-sm md:text-base" datetime="2022-11-11T16:00:00.000Z">{formattedDate}</time></div>
        </div>

        <hr className="my-4"></hr>

          <div className='prose prose-zinc w-full max-w-none dark:prose-invert'>
            <MDXComponent components={MDXComponents} />
          </div>
        </article>
        <aside className='lg:min-w-[270px] lg:max-w-[270px]'>
          <div className='sticky top-24'>
            <TableOfContents />
            <LikeButton slug={slug} />
          </div>
        </aside>
      </div>
      <div className='my-8  flex w-full items-center justify-between border-t border-b border-accent-2 py-4'>
        <Link href={editURL(slug)} className='text-sm'>
          Edit di GitHub
        </Link>
        <div className='flex items-center justify-center gap-2'>
          <Link
            href={redditShareURL(slug, title)}
            icon={false}
            animation={false}
            className='flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2'
          >
            <IconBrandReddit size={18} />
          </Link>
          <Link
            href={twitterShareURL(slug, title)}
            icon={false}
            animation={false}
            className='flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2'
          >
            <IconBrandTwitter size={18} />
          </Link>
          <Link
            href={facebookShareURL(slug)}
            icon={false}
            animation={false}
            className='flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2'
          >
            <IconBrandFacebook size={18} />
          </Link>
        </div>
      </div>
      <Comment />
    </>
  )
}

export default BlogPostPage

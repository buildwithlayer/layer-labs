import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { Metadata } from 'next'
import PublishData from './_components/PublishData'
import Image from 'next/image'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Layer Labs Blog",
  description: "Explore our latest insights and updates on Layer Labs products.",
}

type PostMeta = {
  title: string
  description?: string
  openGraph: {
    images: {
      url: string;
      alt?: string;
    }[]
    publishedTime: string
  }
  authors: {
    name: string
    url?: string
  }[]
}

async function getPosts(): Promise<Array<PostMeta & { slug: string }>> {
  const postsDir = path.join(process.cwd(), 'app', 'blog', '(posts)')
  const dirents = await fs.readdir(postsDir, { withFileTypes: true })
  const slugs = dirents.filter(d => d.isDirectory()).map(d => d.name)

  const posts = await Promise.all(
    slugs.map(async slug => {
      const mod = await import(`./(posts)/${slug}/page.mdx`)
      const meta = mod.metadata as PostMeta
      return { slug, ...meta }
    })
  )

  return posts
}

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(({ slug, title, description, openGraph, authors }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="p-4 border border-black/20 rounded-md hover:bg-black/5 transition"
            >
              {openGraph?.images && openGraph.images[0] && (
                <Image
                  src={openGraph.images[0].url} alt={openGraph.images[0].alt || ""} className='mb-4 rounded-md' />
              )}
              <h2 className="text-2xl font-medium text-black">{title}</h2>
              <PublishData authors={authors} date={openGraph.publishedTime} />
              {description && (
                <p className="mt-2 text-gray-500">{description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

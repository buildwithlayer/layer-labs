import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { Metadata } from 'next'
import PublishData from './_components/PublishData'
import Image from 'next/image'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Layer Labs - Ideas",
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
    <div className="flex flex-col w-full items-center px-4">
      <div className="w-full max-w-[--content-width] flex flex-col items-start gap-16 py-16 z-10 relative px-4 md:px-0">
        {/* Header */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="font-medium text-6xl">Welcome to Layer Labs</h1>
          <p className="text-xl">We take ideas and build them.</p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(({ slug, title, description, openGraph, authors }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="p-6 border border-black/10 rounded-md hover:bg-black/5 transition flex flex-col"
            >
              {openGraph?.images && openGraph.images[0] && (
                <Image
                  src={openGraph.images[0].url} 
                  alt={openGraph.images[0].alt || ""} 
                  className='mb-4 rounded-md w-full h-auto' 
                />
              )}
              <h2 className="text-2xl font-semibold text-black">{title}</h2>
              <PublishData authors={authors} date={openGraph.publishedTime} />
              {description && (
                <p className="mt-2 text-gray-600">{description}</p>
              )}
            </Link>
          ))}
          
          {/* RAG: Remastered Feature Card */}
          <div className="p-6 border border-black/10 rounded-md bg-black text-white flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">RAG: Remastered</h2>
            <p className="text-gray-300 mb-6">Our latest project focused on improving retrieval augmented generation systems.</p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {['retrieval', 'augmented', 'generation', 'ai', 'llm'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


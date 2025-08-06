import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Layer Labs Blog",
  description: "Explore our latest insights and updates on Layer Labs products.",
}

type PostMeta = {
  title: string
  description?: string
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
      <div className="w-full max-w-[--content-width] grid grid-cols-1 md:grid-cols-2 gap-4 py-16 px-4">
        {posts.map(({ slug, title, description }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="p-6 border border-black/20 rounded-lg hover:bg-black/5 transition"
          >
            <h2 className="text-2xl font-medium text-black">{title}</h2>
            {description && (
              <p className="mt-2 text-gray-600">{description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
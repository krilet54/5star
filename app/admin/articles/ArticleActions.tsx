'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ExternalLink } from 'lucide-react'

interface Article {
  id: string
  title: string
  slug: string
  published: boolean
  featured: boolean
}

export default function ArticleActions({ article }: { article: Article }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function togglePublished() {
    setLoading(true)
    await fetch(`/api/articles/${article.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !article.published }),
    })
    router.refresh()
    setLoading(false)
  }

  async function toggleFeatured() {
    setLoading(true)
    await fetch(`/api/articles/${article.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featured: !article.featured }),
    })
    router.refresh()
    setLoading(false)
  }

  async function deleteArticle() {
    if (!confirm(`Delete "${article.title}"? This cannot be undone.`)) return
    setLoading(true)
    await fetch(`/api/articles/${article.id}`, { method: 'DELETE' })
    router.refresh()
    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2 justify-end flex-wrap">
      <button
        onClick={toggleFeatured}
        disabled={loading}
        className="admin-btn admin-btn-gray text-xs px-2 py-1"
        title={article.featured ? 'Unfeature' : 'Feature'}
      >
        {article.featured ? '★' : '☆'}
      </button>
      <button
        onClick={togglePublished}
        disabled={loading}
        className="admin-btn admin-btn-gray text-xs px-2 py-1"
      >
        {article.published ? 'Unpublish' : 'Publish'}
      </button>
      <Link
        href={`/admin/articles/${article.id}/edit`}
        className="admin-btn admin-btn-gray text-xs px-2 py-1"
      >
        Edit
      </Link>
      <Link
        href={`/insights/${article.slug}`}
        target="_blank"
        className="admin-btn admin-btn-gray text-xs px-2 py-1"
        title="View on site"
      >
        <ExternalLink size={12} />
      </Link>
      <button
        onClick={deleteArticle}
        disabled={loading}
        className="admin-btn admin-btn-red text-xs px-2 py-1"
      >
        Delete
      </button>
    </div>
  )
}

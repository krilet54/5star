import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase-server'
import Link from 'next/link'
import ArticleEditor from '../../ArticleEditor'
import { getLocalBlogPostById } from '@/lib/blog-posts'

interface Props { params: Promise<{ id: string }> }

export const metadata = { title: 'Edit Article' }

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params

  if (id.startsWith('local-')) {
    const localArticle = getLocalBlogPostById(id)

    return (
      <div className="p-8">
        <div className="admin-card max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Managed in code</h1>
          <p className="text-sm text-gray-600 mb-6">
            This article is part of the local blog content catalog and is not editable from the admin panel.
          </p>
          <Link href={localArticle ? `/insights/${localArticle.slug}` : '/insights'} className="admin-btn admin-btn-gold">
            View Article
          </Link>
        </div>
      </div>
    )
  }

  const supabase = createAdminClient()
  const { data: article } = await supabase.from('articles').select('*').eq('id', id).single()
  if (!article) notFound()

  return (
    <div className="p-8">
      <ArticleEditor article={article} mode="edit" />
    </div>
  )
}

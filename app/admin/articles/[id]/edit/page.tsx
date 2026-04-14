import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase-server'
import ArticleEditor from '../../ArticleEditor'

interface Props { params: Promise<{ id: string }> }

export const metadata = { title: 'Edit Article' }

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params
  const supabase = createAdminClient()
  const { data: article } = await supabase.from('articles').select('*').eq('id', id).single()
  if (!article) notFound()

  return (
    <div className="p-8">
      <ArticleEditor article={article} mode="edit" />
    </div>
  )
}

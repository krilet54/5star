import ArticleEditor from '../ArticleEditor'

export const metadata = { title: 'New Article' }

export default function NewArticlePage() {
  return (
    <div className="p-8">
      <ArticleEditor mode="create" />
    </div>
  )
}

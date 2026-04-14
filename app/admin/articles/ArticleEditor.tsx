'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Article } from '@/types'

const CATEGORIES = ['Business Setup', 'Visa', 'Tax', 'Compliance', 'Accounting', 'HR', 'Corporate', 'General']

interface Props {
  article?: Partial<Article>
  mode: 'create' | 'edit'
}

export default function ArticleEditor({ article, mode }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const [form, setForm] = useState({
    title: article?.title ?? '',
    excerpt: article?.excerpt ?? '',
    content: article?.content ?? '',
    category: article?.category ?? 'General',
    featured: article?.featured ?? false,
    published: article?.published ?? true,
    meta_title: article?.meta_title ?? '',
    meta_description: article?.meta_description ?? '',
    read_time: article?.read_time ?? 5,
    cover_image: article?.cover_image ?? '',
  })

  function update(key: string, val: string | boolean | number) {
    setForm(prev => ({ ...prev, [key]: val }))
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setUploadError('')
    try {
      const fd = new FormData()
      fd.append('file', file, file.name)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Upload failed')
      update('cover_image', data.url)
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim()) {
      setError('Title and content are required.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const url = mode === 'create' ? '/api/articles' : `/api/articles/${article?.id}`
      const method = mode === 'create' ? 'POST' : 'PATCH'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to save')
      }
      router.push('/admin/articles')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {mode === 'create' ? 'New Article' : 'Edit Article'}
        </h1>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setPreview(!preview)} className="admin-btn admin-btn-gray">
            {preview ? 'Edit Mode' : 'Preview'}
          </button>
          <button type="submit" disabled={loading || uploading} className="admin-btn admin-btn-gold" style={{ opacity: (loading || uploading) ? 0.7 : 1 }}>
            {loading || uploading ? 'Saving...' : mode === 'create' ? 'Publish Article' : 'Save Changes'}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 px-4 py-3 rounded text-sm text-red-800" style={{ background: '#fee2e2', border: '1px solid #fca5a5' }}>
          {error}
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        {/* Main content */}
        <div className="flex flex-col gap-5">
          <div className="admin-card">
            <label className="admin-label">Title *</label>
            <input
              value={form.title}
              onChange={e => update('title', e.target.value)}
              className="admin-input text-lg font-medium mb-4"
              placeholder="Article title..."
              required
            />
            <label className="admin-label">Excerpt / Summary</label>
            <textarea
              value={form.excerpt}
              onChange={e => update('excerpt', e.target.value)}
              className="admin-input"
              placeholder="A short summary shown on listing pages and in SEO..."
              rows={2}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className="admin-card">
            <div className="flex items-center justify-between mb-2">
              <label className="admin-label" style={{ marginBottom: 0 }}>Content (Markdown) *</label>
              <span className="text-xs text-gray-400">Supports **bold**, ## headings, - lists, [links](url)</span>
            </div>
            {preview ? (
              <div
                className="min-h-[400px] p-4 rounded border text-sm leading-relaxed"
                style={{ background: '#f9f9f7', borderColor: '#e5e5e0', whiteSpace: 'pre-wrap', color: '#333' }}
              >
                {form.content || <span className="text-gray-400">Nothing to preview yet.</span>}
              </div>
            ) : (
              <textarea
                value={form.content}
                onChange={e => update('content', e.target.value)}
                className="admin-textarea"
                placeholder={`## Introduction\n\nStart writing your article here...\n\n## Section 2\n\nContent goes here.`}
                required
              />
            )}
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="flex flex-col gap-5">
          {/* Status */}
          <div className="admin-card">
            <h3 className="font-semibold text-sm mb-4 text-gray-700">Publishing</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={e => update('published', e.target.checked)}
                  className="w-4 h-4 accent-amber-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Published</div>
                  <div className="text-xs text-gray-400">Visible on the website</div>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={e => update('featured', e.target.checked)}
                  className="w-4 h-4 accent-amber-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Featured</div>
                  <div className="text-xs text-gray-400">Shown prominently on homepage</div>
                </div>
              </label>
            </div>
          </div>

          {/* Meta */}
          <div className="admin-card">
            <h3 className="font-semibold text-sm mb-4 text-gray-700">Article Details</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className="admin-label">Category</label>
                <select
                  value={form.category}
                  onChange={e => update('category', e.target.value)}
                  className="admin-input"
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="admin-label">Reading Time (mins)</label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={form.read_time}
                  onChange={e => update('read_time', parseInt(e.target.value))}
                  className="admin-input"
                />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="admin-card">
            <h3 className="font-semibold text-sm mb-4 text-gray-700">SEO</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className="admin-label">Meta Title</label>
                <input
                  value={form.meta_title}
                  onChange={e => update('meta_title', e.target.value)}
                  className="admin-input"
                  placeholder="Leave blank to use article title"
                />
                <div className="text-xs text-gray-400 mt-1">{form.meta_title.length}/60 chars</div>
              </div>
              <div>
                <label className="admin-label">Meta Description</label>
                <textarea
                  value={form.meta_description}
                  onChange={e => update('meta_description', e.target.value)}
                  className="admin-input"
                  placeholder="Leave blank to use excerpt"
                  rows={3}
                  style={{ resize: 'vertical' }}
                />
                <div className="text-xs text-gray-400 mt-1">{form.meta_description.length}/160 chars</div>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="font-semibold text-sm mb-4 text-gray-700">Cover Image</h3>
            {form.cover_image ? (
              <div className="mb-3">
                <img src={form.cover_image} alt="Cover" className="w-full h-40 object-cover rounded-sm mb-2" />
                <div className="flex gap-2">
                  <button type="button" onClick={() => update('cover_image', '')} className="admin-btn admin-btn-gray">Remove</button>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col gap-2">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <div className="text-xs text-gray-400">Or paste an external image URL below</div>
              <input
                value={form.cover_image}
                onChange={e => update('cover_image', e.target.value)}
                className="admin-input"
                placeholder="https://example.com/image.jpg"
              />
              {uploading && <div className="text-xs text-gray-500 mt-1">Uploading...</div>}
              {uploadError && <div className="text-xs text-red-600 mt-1">{uploadError}</div>}
            </div>
          </div>

          {/* Slug preview */}
          {form.title && (
            <div className="admin-card">
              <h3 className="font-semibold text-sm mb-2 text-gray-700">URL Preview</h3>
              <div className="text-xs text-gray-500 break-all">
                /insights/{form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}

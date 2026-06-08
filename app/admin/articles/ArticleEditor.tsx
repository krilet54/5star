'use client'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Article } from '@/types'

const CATEGORIES = ['Business Setup', 'Visa', 'Tax', 'Compliance', 'Accounting', 'HR', 'Corporate', 'General']

interface Props {
  article?: Partial<Article>
  mode: 'create' | 'edit'
}

export default function ArticleEditor({ article, mode }: Props) {
  const router = useRouter()
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const [form, setForm] = useState({
    title: article?.title ?? '',
    excerpt: article?.excerpt ?? '',
    content: article?.content ?? '',
    slug: article?.slug ?? '',
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

  function insertMarkdown(before: string, after = '', placeholder = 'Text') {
    const textarea = contentRef.current
    const content = form.content
    const start = textarea?.selectionStart ?? content.length
    const end = textarea?.selectionEnd ?? content.length
    const selected = content.slice(start, end) || placeholder
    const nextContent = `${content.slice(0, start)}${before}${selected}${after}${content.slice(end)}`

    update('content', nextContent)
    window.requestAnimationFrame(() => {
      textarea?.focus()
      const cursorStart = start + before.length
      const cursorEnd = cursorStart + selected.length
      textarea?.setSelectionRange(cursorStart, cursorEnd)
    })
  }

  function insertLinePrefix(prefix: string, placeholder = 'List item') {
    const textarea = contentRef.current
    const content = form.content
    const start = textarea?.selectionStart ?? content.length
    const end = textarea?.selectionEnd ?? content.length
    const selected = content.slice(start, end) || placeholder
    const prefixed = selected
      .split('\n')
      .map(line => `${prefix}${line}`)
      .join('\n')
    const needsLeadingBreak = start > 0 && content[start - 1] !== '\n'
    const needsTrailingBreak = end < content.length && content[end] !== '\n'
    const nextContent = `${content.slice(0, start)}${needsLeadingBreak ? '\n' : ''}${prefixed}${needsTrailingBreak ? '\n' : ''}${content.slice(end)}`

    update('content', nextContent)
    window.requestAnimationFrame(() => {
      textarea?.focus()
      textarea?.setSelectionRange(start + (needsLeadingBreak ? 1 : 0), start + (needsLeadingBreak ? 1 : 0) + prefixed.length)
    })
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
        body: JSON.stringify({
          ...form,
          slug: form.slug.trim(),
        }),
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

  async function handleDelete() {
    if (mode !== 'edit' || !article?.id) return
    if (!confirm(`Delete "${form.title || 'this article'}"? This cannot be undone.`)) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/articles/${article.id}`, { method: 'DELETE' })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Failed to delete')
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
          {mode === 'edit' && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={loading || uploading}
              className="admin-btn admin-btn-red"
            >
              Delete Article
            </button>
          )}
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
              <span className="text-xs text-gray-400">Formatting below is saved and shown on article pages</span>
            </div>
            <div className="admin-editor-toolbar">
              <button type="button" className="admin-editor-btn" onClick={() => insertLinePrefix('## ', 'Section heading')}>H2</button>
              <button type="button" className="admin-editor-btn" onClick={() => insertLinePrefix('### ', 'Subheading')}>H3</button>
              <button type="button" className="admin-editor-btn" onClick={() => insertMarkdown('**', '**', 'Bold text')}>B</button>
              <button type="button" className="admin-editor-btn italic" onClick={() => insertMarkdown('_', '_', 'Italic text')}>I</button>
              <button type="button" className="admin-editor-btn" onClick={() => insertLinePrefix('- ', 'List item')}>Bullets</button>
              <button type="button" className="admin-editor-btn" onClick={() => insertLinePrefix('1. ', 'List item')}>Numbered</button>
              <button type="button" className="admin-editor-btn" onClick={() => insertLinePrefix('> ', 'Quote')}>Quote</button>
              <button type="button" className="admin-editor-btn" onClick={() => insertMarkdown('[', '](https://example.com)', 'Link text')}>Link</button>
            </div>
            {preview ? (
              <div
                className="min-h-[400px] p-5 rounded border text-sm leading-relaxed prose-gold admin-markdown-preview"
                style={{ background: '#f9f9f7', borderColor: '#e5e5e0', color: '#333' }}
              >
                {form.content ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {form.content}
                  </ReactMarkdown>
                ) : (
                  <span className="text-gray-400">Nothing to preview yet.</span>
                )}
              </div>
            ) : (
              <textarea
                ref={contentRef}
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
          {(form.title || form.slug) && (
            <div className="admin-card">
              <h3 className="font-semibold text-sm mb-2 text-gray-700">URL Preview</h3>
              <div className="text-xs text-gray-500 break-all">
                /insights/{form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}

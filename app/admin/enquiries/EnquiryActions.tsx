"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

export default function EnquiryActions({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    if (!confirm('Delete this enquiry? This cannot be undone.')) return
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      })
      if (!res.ok) {
        const text = await res.text()
        alert('Failed to delete enquiry: ' + text)
      } else {
        router.refresh()
      }
    } catch (err) {
      alert('Error deleting enquiry')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleDelete} disabled={loading} className="text-sm text-red-600 hover:underline flex items-center gap-1">
        <Trash2 size={14} />
        <span>Delete</span>
      </button>
    </div>
  )
}

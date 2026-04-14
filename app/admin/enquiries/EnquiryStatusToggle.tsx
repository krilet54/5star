'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

const STATUSES = ['new', 'contacted', 'closed'] as const
type Status = typeof STATUSES[number]

const COLORS: Record<Status, string> = {
  new: 'badge-green',
  contacted: 'badge-yellow',
  closed: 'badge-gray',
}

export default function EnquiryStatusToggle({ id, status }: { id: string; status: string }) {
  const [current, setCurrent] = useState(status as Status)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function cycle() {
    const next = STATUSES[(STATUSES.indexOf(current) + 1) % STATUSES.length]
    setLoading(true)
    const supabase = createClient()
    await supabase.from('enquiries').update({ status: next }).eq('id', id)
    setCurrent(next)
    setLoading(false)
    router.refresh()
  }

  return (
    <button
      onClick={cycle}
      disabled={loading}
      className={`badge ${COLORS[current]} cursor-pointer border-0 transition-all`}
      style={{ opacity: loading ? 0.6 : 1 }}
      title="Click to cycle status"
    >
      {current}
    </button>
  )
}

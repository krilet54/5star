import { Buffer } from 'buffer'
import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const file = form.get('file') as File | null
    if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const originalName = file.name || `upload-${Date.now()}`
    const safeName = originalName.replace(/[^a-z0-9.\-_]/gi, '-')
    const filename = `${Date.now()}-${safeName}`
    const path = `articles/${filename}`

    const supabase = createAdminClient()
    const bucket = process.env.SUPABASE_BUCKET || 'uploads'

    const { data, error } = await supabase.storage.from(bucket).upload(path, buffer, {
      contentType: file.type,
      upsert: false,
    })
    if (error) throw error

    const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(data.path)
    const url = publicData?.publicUrl ?? null
    if (!url) return NextResponse.json({ error: 'Failed to get public URL' }, { status: 500 })

    return NextResponse.json({ url })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err?.message || 'Upload failed' }, { status: 500 })
  }
}

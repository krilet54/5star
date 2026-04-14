import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()
  const secret = process.env.ADMIN_SECRET || 'starone-admin-2025'

  if (password !== secret) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_auth', '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin_auth')
  return response
}

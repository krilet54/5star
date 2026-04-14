import type { Metadata } from 'next'
import AdminSidebar from './Sidebar'

export const metadata: Metadata = { title: { default: 'Admin', template: '%s | Star One Admin' } }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-body min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

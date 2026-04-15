'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, Plus, Inbox, LogOut, ExternalLink } from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/articles', label: 'Articles', icon: FileText },
  { href: '/admin/articles/new', label: 'New Article', icon: Plus },
  { href: '/admin/enquiries', label: 'Enquiries', icon: Inbox },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin/login') return null

  async function handleLogout() {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/admin/login')
  }

  return (
    <aside className="admin-sidebar flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b" style={{ borderColor: '#e5e5e0' }}>
        <div className="flex items-center gap-2">
          <img src="/starone-icon-mark.svg" alt="Star One" className="w-8 h-8" />
          <div className="font-semibold text-sm">Star One Admin</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 flex flex-col gap-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href) && href !== '/admin'
          return (
            <Link
              key={href}
              href={href}
              className={`admin-nav-link ${active ? 'active' : ''}`}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t flex flex-col gap-1" style={{ borderColor: '#e5e5e0' }}>
        <Link href="/" target="_blank" className="admin-nav-link">
          <ExternalLink size={16} />
          View Website
        </Link>
        <button onClick={handleLogout} className="admin-nav-link w-full text-left" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}

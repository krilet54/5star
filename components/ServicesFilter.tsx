'use client'

import { useEffect } from 'react'

export default function ServicesFilter() {
  useEffect(() => {
    const tabs = Array.from(document.querySelectorAll('.service-tab')) as HTMLButtonElement[]
    const cards = Array.from(document.querySelectorAll('.services-grid .service-card')) as HTMLElement[]

    if (!tabs.length || !cards.length) return

    const mapping: Record<string, string> = {
      'all services': 'all',
      'business setup': 'setup',
      'compliance': 'compliance',
      'corporate': 'corporate',
      'ancillary': 'ancillary',
    }

    const handlers: Array<{ tab: HTMLButtonElement; handler: () => void }> = []

    function updateVisible(cat: string, clickedTab?: HTMLButtonElement) {
      tabs.forEach(t => t.classList.remove('active'))
      if (clickedTab) clickedTab.classList.add('active')

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat') || ''
        const parent = card.closest('.reveal') as HTMLElement | null
        if (!parent) return
        if (cat === 'all' || cardCat === cat) parent.style.display = ''
        else parent.style.display = 'none'
      })
    }

    tabs.forEach(tab => {
      const handler = () => {
        const txt = (tab.textContent || '').trim().toLowerCase()
        const cat = mapping[txt] || 'all'
        updateVisible(cat, tab)
      }
      tab.addEventListener('click', handler)
      handlers.push({ tab, handler })
    })

    // Set initial state
    const active = tabs.find(t => t.classList.contains('active')) || tabs[0]
    if (active) active.click()

    return () => {
      handlers.forEach(h => h.tab.removeEventListener('click', h.handler))
    }
  }, [])

  return null
}

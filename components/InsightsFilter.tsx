'use client'

import { useEffect } from 'react'

export default function InsightsFilter() {
  useEffect(() => {
    const tabs = Array.from(document.querySelectorAll('.insights-tab')) as HTMLElement[]
    const cards = Array.from(document.querySelectorAll('[data-insight-cat]')) as HTMLElement[]
    if (!tabs.length || !cards.length) return

    function normalize(s?: string) {
      return (s || '').trim().toLowerCase()
    }

    function updateVisible(cat: string, clickedTab?: HTMLElement) {
      tabs.forEach(t => t.classList.remove('active'))
      if (clickedTab) clickedTab.classList.add('active')

      const catNorm = normalize(cat)
      cards.forEach(card => {
        const cardCat = normalize(card.getAttribute('data-insight-cat') || '')
        if (catNorm === 'all' || cardCat === catNorm) {
          card.style.display = ''
        } else {
          card.style.display = 'none'
        }
      })
    }

    const handlers: Array<{ el: HTMLElement; fn: () => void }> = []

    tabs.forEach(tab => {
      const fn = () => updateVisible(tab.textContent || 'All', tab)
      tab.addEventListener('click', fn)
      handlers.push({ el: tab, fn })
    })

    // initialize
    const active = tabs.find(t => t.classList.contains('active')) || tabs[0]
    if (active) (active as HTMLElement).click()

    return () => handlers.forEach(h => h.el.removeEventListener('click', h.fn))
  }, [])

  return null
}

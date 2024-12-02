'use client'
import { ReactNode } from 'react'

export function SmoothScrollLink({ href, children }: { href: string; children: ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a href={href} onClick={handleClick} className="nav-link">
      {children}
    </a>
  )
} 
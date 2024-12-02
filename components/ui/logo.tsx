'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Logo() {
  const [isExpanded, setIsExpanded] = useState<boolean | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsExpanded(false)
    
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setIsExpanded(true)
        setTimeout(() => setIsExpanded(false), 1500)
      }, 10000)

      return () => clearInterval(interval)
    }, 2000)

    return () => clearTimeout(startDelay)
  }, [])

  // Initial state with styled but static logo
  if (!isMounted) {
    return (
      <Link href="/" className="group">
        <div className="flex items-center">
          <span className="text-4xl font-bold flex items-center overflow-hidden">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Y</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-1">X</span>
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link href="/" className={`group ${isExpanded ? 'pointer-events-none' : ''}`}>
      <div className="flex items-center">
        <span className="text-4xl font-bold flex items-center overflow-hidden">
          {/* Y logo */}
          <span className="inline-flex items-center">
            <svg 
              viewBox="0 0 24 24" 
              className={`h-10 w-10 transition-all duration-500 -rotate-12 
                ${isExpanded ? 'rotate-[-372deg]' : ''} 
                ${!isExpanded ? 'group-hover:rotate-[-372deg]' : ''}`}
              style={{ 
                fill: 'url(#gradient-y)',
                filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.2))'
              }}
            >
              <defs>
                <linearGradient id="gradient-y" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#A855F7' }} />
                  <stop offset="100%" style={{ stopColor: '#3B82F6' }} />
                </linearGradient>
              </defs>
              <path d="M21.292 2.25H16.9L12 9.164 7.1 2.25H2.708l7.891 10.764v8.736h3.802v-8.736z" />
            </svg>
          </span>
          
          {/* "our" text with expansion animation */}
          <span className={`overflow-hidden transition-all duration-500 
            ${isExpanded ? 'w-[3.5rem] opacity-100' : 'w-0 opacity-0'} 
            ${!isExpanded ? 'group-hover:w-[3.5rem] group-hover:opacity-100' : ''} -ml-1`}>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
              our
            </span>
          </span>

          {/* X logo */}
          <span className={`inline-flex items-center relative -ml-2 transition-all duration-500 
            ${isExpanded ? 'ml-0' : ''} 
            ${!isExpanded ? 'group-hover:ml-0' : ''}`}>
            <svg 
              viewBox="0 0 24 24" 
              className={`h-10 w-10 transition-all duration-500 ease-out rotate-12 
                ${isExpanded ? 'rotate-[372deg]' : ''} 
                ${!isExpanded ? 'group-hover:rotate-[372deg]' : ''}`}
              style={{ 
                fill: 'url(#gradient)',
                filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.2))'
              }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#A855F7' }} />
                  <stop offset="100%" style={{ stopColor: '#3B82F6' }} />
                </linearGradient>
              </defs>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </span>
        </span>
      </div>
    </Link>
  )
} 
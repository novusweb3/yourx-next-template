'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export function HeroButton() {
  const router = useRouter()

  return (
    <button 
      onClick={() => router.push('/dashboard')}
      className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white 
        hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2
        animate-float hover:shadow-lg hover:shadow-purple-500/20"
    >
      Go to Dashboard <ArrowRight className="w-5 h-5" />
    </button>
  )
} 
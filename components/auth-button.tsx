'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function AuthButton() {
  const router = useRouter()

  return (
    <Button 
      onClick={() => router.push('/dashboard')}
      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
    >
      Dashboard
    </Button>
  )
} 
'use client'

import { Button } from '@/components/ui/button'

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 space-y-6 bg-[#252525] rounded-lg border border-gray-800">
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <Button
          onClick={() => {}}
          className="w-full"
        >
          Sign in
        </Button>
      </div>
    </div>
  )
} 
'use client'

import { useSession } from 'next-auth/react'

export function DashboardHeader() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  )
} 
'use client'

import { Button } from '@/components/ui/button'
import { ErrorCard } from '@/components/error-card'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <ErrorCard
      title="Something went wrong!"
      description="Failed to load dashboard data."
      retryButton={
        <Button onClick={reset} variant="outline">
          Try Again
        </Button>
      }
    />
  )
} 
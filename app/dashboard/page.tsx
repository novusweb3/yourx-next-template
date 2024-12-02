import { Suspense } from 'react'
import { ErrorBoundaryWrapper } from '@/components/error-boundary-wrapper'
import { DashboardNav } from '@/components/dashboard/nav'
import { CardSkeleton } from '@/components/loading-states/card-skeleton'

// Mock data
const mockData = {
  insights: {
    sentiment: 'positive',
    engagement: {
      todaysPosts: { views: 1234, likes: 567, shares: 89, comments: 45 },
      totalToday: { views: 5678, likes: 890, shares: 123, comments: 67 }
    }
  }
}

export default async function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <div className="flex-1 space-y-8 p-8 pt-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ErrorBoundaryWrapper>
            <Suspense fallback={<CardSkeleton />}>
              {/* Add your cards here */}
            </Suspense>
          </ErrorBoundaryWrapper>
        </div>
      </div>
    </div>
  )
}
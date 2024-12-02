export function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen animate-pulse">
      {/* Nav Skeleton */}
      <div className="w-64 min-h-screen border-r border-gray-800 p-4">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-lg bg-gray-800/50"
            />
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 space-y-8 p-8 pt-6">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-800/50 rounded-lg" />
          <div className="h-8 w-24 bg-gray-800/50 rounded-lg" />
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-24 rounded-lg bg-gray-800/50"
              />
            ))}
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-gray-800/50 h-48"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
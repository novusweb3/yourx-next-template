interface ErrorCardProps {
  title: string
  description: string
  retryButton: React.ReactNode
}

export function ErrorCard({ title, description, retryButton }: ErrorCardProps) {
  return (
    <div className="rounded-lg border border-red-800/30 bg-red-900/10 p-6 max-w-2xl mx-auto mt-20">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-red-900/20 p-3 mb-4">
          <svg
            className="h-6 w-6 text-red-500"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-red-500 mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        {retryButton}
      </div>
    </div>
  )
} 
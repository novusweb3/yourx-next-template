'use client'

import { motion } from 'framer-motion'

export function InsightCardSkeleton() {
  return (
    <div className="p-6 rounded-lg bg-[#252525] border border-gray-800">
      <div className="space-y-6">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <motion.div 
            className="h-6 w-32 bg-gray-800 rounded"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="h-4 w-24 bg-gray-800 rounded"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-lg bg-gray-800/50 h-32"
              animate={{ 
                opacity: [0.5, 0.7, 0.5],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </div>

        {/* Summary Skeleton */}
        <div className="pt-4 border-t border-gray-800 space-y-2">
          <motion.div 
            className="h-4 w-20 bg-gray-800 rounded"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="h-16 bg-gray-800 rounded"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  )
} 
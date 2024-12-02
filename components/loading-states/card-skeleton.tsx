'use client'

import { motion } from 'framer-motion'

export function CardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6],
        scale: [1, 1.01, 1],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="p-6 rounded-lg bg-[#252525] border border-gray-800"
    >
      <div className="space-y-4">
        <div className="h-6 w-1/3 bg-gray-800 rounded" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-800 rounded" />
          <div className="h-4 w-5/6 bg-gray-800 rounded" />
          <div className="h-4 w-4/6 bg-gray-800 rounded" />
        </div>
      </div>
    </motion.div>
  )
} 
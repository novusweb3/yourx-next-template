'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface SentimentCardProps {
  sentiment: string
}

export function SentimentCard({ sentiment }: SentimentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg bg-[#252525] border border-gray-800"
    >
      <h3 className="text-lg font-semibold">Sentiment</h3>
      <div className="flex items-center gap-2 text-2xl">
        {sentiment === 'positive' && <TrendingUp className="w-6 h-6 text-green-500" />}
        {sentiment === 'negative' && <TrendingDown className="w-6 h-6 text-red-500" />}
        {sentiment === 'neutral' && <Minus className="w-6 h-6 text-gray-500" />}
        <span className="capitalize">{sentiment}</span>
      </div>
    </motion.div>
  )
} 
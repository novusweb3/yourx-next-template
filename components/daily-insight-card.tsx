'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, Heart, Repeat, MessageCircle, Eye } from 'lucide-react'
import { format } from 'date-fns'

interface DailyEngagement {
  todaysPosts: {
    views: number
    likes: number
    retweets: number
    replies: number
  }
  totalToday: {
    views: number
    likes: number
    retweets: number
    replies: number
  }
}

interface DailyInsightCardProps {
  insight: {
    sentiment: string
    engagement: DailyEngagement
  }
}

export function DailyInsightCard({ insight }: DailyInsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg bg-[#252525] border border-gray-800 flex flex-col gap-6"
    >
      {/* Sentiment Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sentiment</h3>
        <div className="flex items-center gap-2 text-2xl">
          {insight.sentiment === 'positive' && <TrendingUp className="w-6 h-6 text-green-500" />}
          {insight.sentiment === 'negative' && <TrendingDown className="w-6 h-6 text-red-500" />}
          {insight.sentiment === 'neutral' && <Minus className="w-6 h-6 text-gray-500" />}
          <span className="capitalize">{insight.sentiment}</span>
        </div>
      </div>

      {/* Today's Posts Engagement Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Today's Posts Engagement</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-purple-400">
              <Eye className="w-4 h-4" />
              <span>Views</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.todaysPosts.views.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-red-400">
              <Heart className="w-4 h-4" />
              <span>Likes</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.todaysPosts.likes.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-green-400">
              <Repeat className="w-4 h-4" />
              <span>Retweets</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.todaysPosts.retweets.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-blue-400">
              <MessageCircle className="w-4 h-4" />
              <span>Replies</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.todaysPosts.replies.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Total Today's Engagement Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Total Today's Engagement</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-purple-400">
              <Eye className="w-4 h-4" />
              <span>Total Views</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.totalToday.views.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-red-400">
              <Heart className="w-4 h-4" />
              <span>Total Likes</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.totalToday.likes.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-green-400">
              <Repeat className="w-4 h-4" />
              <span>Total Retweets</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.totalToday.retweets.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-2 text-blue-400">
              <MessageCircle className="w-4 h-4" />
              <span>Total Replies</span>
            </div>
            <p className="text-2xl mt-2">{insight.engagement.totalToday.replies.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 
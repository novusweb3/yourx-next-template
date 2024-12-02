'use client'

import { motion } from 'framer-motion'
import { Heart, Repeat, MessageCircle, Eye } from 'lucide-react'

interface TodaysPostsCardProps {
  engagement: {
    views: number
    likes: number
    retweets: number
    replies: number
  }
}

export function TodaysPostsCard({ engagement }: TodaysPostsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg bg-[#252525] border border-gray-800"
    >
      <h3 className="text-lg font-semibold mb-4">Today's Posts Engagement</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-gray-800/50">
          <div className="flex items-center gap-2 text-purple-400">
            <Eye className="w-4 h-4" />
            <span>Views</span>
          </div>
          <p className="text-2xl mt-2">{engagement.views.toLocaleString()}</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-800/50">
          <div className="flex items-center gap-2 text-red-400">
            <Heart className="w-4 h-4" />
            <span>Likes</span>
          </div>
          <p className="text-2xl mt-2">{engagement.likes.toLocaleString()}</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-800/50">
          <div className="flex items-center gap-2 text-green-400">
            <Repeat className="w-4 h-4" />
            <span>Retweets</span>
          </div>
          <p className="text-2xl mt-2">{engagement.retweets.toLocaleString()}</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-800/50">
          <div className="flex items-center gap-2 text-blue-400">
            <MessageCircle className="w-4 h-4" />
            <span>Replies</span>
          </div>
          <p className="text-2xl mt-2">{engagement.replies.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
  )
} 
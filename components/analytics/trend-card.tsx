'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface TrendData {
  date: string
  followers: number
  engagement: number
}

interface TrendCardProps {
  data: TrendData[]
  title: string
  metric: 'followers' | 'engagement'
  color: string
}

export function TrendCard({ data, title, metric, color }: TrendCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg bg-[#252525] border border-gray-800"
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #333',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#999' }}
            />
            <Line 
              type="monotone" 
              dataKey={metric}
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface PerformanceData {
  hour: string
  engagement: number
}

// Custom tooltip component with dark theme
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1f1f1f] border border-gray-800 rounded-lg px-3 py-2">
        <p className="text-gray-400 text-sm">{`Time: ${label}`}</p>
        <p className="text-purple-500 font-medium">
          {`Engagement: ${payload[0].value}`}
        </p>
      </div>
    )
  }
  return null
}

export function PerformanceCard({ data }: { data: PerformanceData[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg bg-[#252525] border border-gray-800"
    >
      <h3 className="text-lg font-semibold mb-4">Best Posting Times</h3>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="hour" 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#404040' }}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#404040' }}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(139, 92, 246, 0.1)' }} // Very subtle purple highlight
            />
            <Bar 
              dataKey="engagement" 
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
} 
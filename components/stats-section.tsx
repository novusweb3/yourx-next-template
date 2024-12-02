'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatItemProps {
  value: number
  label: string
  gradient: string
  delay: number
}

function StatItem({ value, label, gradient, delay }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className={`w-32 h-32 rounded-full ${gradient} opacity-20 blur-xl absolute 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-30 
        transition-opacity duration-300`} />
      
      <div className="relative flex flex-col items-center">
        <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {isInView ? value : 0}k+
        </div>
        <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-16">
          <StatItem
            value={50}
            label="Daily Users"
            gradient="from-purple-500 to-blue-500"
            delay={0}
          />
          <StatItem
            value={100}
            label="Posts Analyzed"
            gradient="from-blue-500 to-cyan-500"
            delay={0.2}
          />
          <StatItem
            value={25}
            label="AI Insights"
            gradient="from-cyan-500 to-green-500"
            delay={0.4}
          />
          <StatItem
            value={95}
            label="Accuracy Rate"
            gradient="from-green-500 to-yellow-500"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
} 
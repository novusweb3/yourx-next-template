'use client'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FiActivity, FiBarChart2, FiPieChart, FiTrendingUp, FiZap, FiCpu } from 'react-icons/fi'

const FEATURES = [
  {
    icon: FiActivity,
    title: 'Real-time Analysis',
    description: 'Track your X activity as it happens with instant insights',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms analyze your content',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiTrendingUp,
    title: 'Trend Detection',
    description: 'Identify emerging patterns in your social media presence',
    gradient: 'from-cyan-500 to-green-500'
  },
  {
    icon: FiBarChart2,
    title: 'Performance Metrics',
    description: 'Comprehensive analytics about your engagement rates',
    gradient: 'from-green-500 to-yellow-500'
  },
  {
    icon: FiPieChart,
    title: 'Topic Analysis',
    description: 'Understand what topics dominate your content',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FiZap,
    title: 'Smart Suggestions',
    description: 'Get personalized recommendations for improvement',
    gradient: 'from-orange-500 to-red-500'
  }
]

function FeatureCard({ icon: Icon, title, description, gradient, index }: {
  icon: IconType
  title: string
  description: string
  gradient: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 bg-[#252525] rounded-xl transition-all duration-300 
        hover:shadow-xl hover:scale-[1.02] border border-gray-800"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 
        bg-gradient-to-br ${gradient} rounded-xl`} />
      
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Powerful <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how X Daily Insight can help you understand and improve your social media presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 
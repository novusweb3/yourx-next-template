'use client'
import { motion } from 'framer-motion'

interface Feature {
  title: string
  description: string
}

export function AnimatedFeatures({ features }: { features: Feature[] }) {
  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-[#252525] hover:bg-[#2f2f2f] p-6 rounded-xl transition-all duration-300 
            hover:shadow-xl hover:scale-[1.02] border border-gray-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white relative z-10">{feature.title}</h3>
          <p className="text-gray-400 relative z-10">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FiArrowRight, FiZap } from 'react-icons/fi'

export function CTASection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-[#191919] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-[45%] left-[45%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Presence</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are already leveraging AI to improve their strategy.
          </p>
          <button
            onClick={() => router.push('/dashboard')}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 
              text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 group"
          >
            Go to Dashboard <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <FiZap className="text-purple-500" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <FiZap className="text-purple-500" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <FiZap className="text-purple-500" />
              <span>Daily Updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
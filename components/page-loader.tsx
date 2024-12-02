'use client'
import { motion } from 'framer-motion'

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'unset'
        const loader = document.querySelector('.page-loader')
        loader?.remove()
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#191919] page-loader"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="w-24 h-24 rounded-full border-t-2 border-l-2 border-purple-500"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 w-24 h-24 rounded-full border-r-2 border-b-2 border-blue-500"
        />
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            X
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 
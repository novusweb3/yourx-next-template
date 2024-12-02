'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 
            text-white shadow-lg shadow-purple-500/25 z-50 group"
        >
          <FiArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1 duration-200" />
          <div className="absolute inset-0 rounded-full bg-white opacity-25 group-hover:opacity-0 
            transition-opacity duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  )
} 
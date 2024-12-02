'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SignInButton } from '@clerk/nextjs'
import { FiX, FiMenu, FiArrowRight } from 'react-icons/fi'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Stats', href: '#stats' },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Open Menu"
      >
        <FiMenu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 min-h-screen"
          >
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[#191919]/95 backdrop-blur-md flex flex-col h-screen"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  X Daily Insight
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-12">
                <nav className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between text-xl text-gray-300 hover:text-white 
                        transition-colors py-2 group"
                    >
                      <span>{item.name}</span>
                      <FiArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 
                        group-hover:translate-x-0 transition-all duration-200" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Sign In Button */}
              <div className="p-6 border-t border-gray-800">
                <SignInButton mode="modal">
                  <button className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 
                    text-white text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]
                    shadow-lg shadow-purple-500/25">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
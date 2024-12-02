'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShare2, FiCopy, FiTwitter } from 'react-icons/fi'

export function TextShare() {
  const [selectedText, setSelectedText] = useState('')
  const [showShare, setShowShare] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection()
      const text = selection?.toString().trim()

      if (text && text.length > 0) {
        const range = selection?.getRangeAt(0)
        const rect = range?.getBoundingClientRect()

        if (rect) {
          setSelectedText(text)
          setPosition({
            x: rect.left + (rect.width / 2),
            y: rect.top - 10 + window.scrollY
          })
          setShowShare(true)
        }
      } else {
        setShowShare(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.share-popup')) {
        setShowShare(false)
      }
    }

    document.addEventListener('mouseup', handleSelection)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      document.removeEventListener('mouseup', handleSelection)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const copyText = async () => {
    await navigator.clipboard.writeText(selectedText)
    setShowShare(false)
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}`,
      '_blank'
    )
    setShowShare(false)
  }

  return (
    <AnimatePresence>
      {showShare && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -100%)',
          }}
          className="share-popup z-[100] flex items-center gap-2 px-3 py-2 rounded-full 
            bg-[#252525] border border-gray-800 shadow-xl backdrop-blur-sm"
        >
          <button
            onClick={copyText}
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
            title="Copy to clipboard"
          >
            <FiCopy className="w-4 h-4 text-gray-300 group-hover:text-white" />
          </button>
          <button
            onClick={shareOnTwitter}
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
            title="Share on Twitter"
          >
            <FiTwitter className="w-4 h-4 text-gray-300 group-hover:text-white" />
          </button>
          <div className="w-px h-4 bg-gray-800" />
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <FiShare2 className="w-3 h-3" />
            <span>Share</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
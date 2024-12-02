'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react'

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info
}

export function Toast() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <AnimatePresence mode="sync">
        {toasts.map((toast) => {
          const Icon = icons[toast.type]
          
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className={`
                p-4 rounded-lg shadow-lg flex items-center space-x-3
                backdrop-blur-md bg-opacity-95
                ${toast.type === 'success' ? 'bg-green-500/10 border-green-500/20' : ''}
                ${toast.type === 'error' ? 'bg-red-500/10 border-red-500/20' : ''}
                ${toast.type === 'info' ? 'bg-blue-500/10 border-blue-500/20' : ''}
                border min-w-[300px] max-w-[400px]
              `}
            >
              <Icon className={`
                w-5 h-5 flex-shrink-0
                ${toast.type === 'success' ? 'text-green-500' : ''}
                ${toast.type === 'error' ? 'text-red-500' : ''}
                ${toast.type === 'info' ? 'text-blue-500' : ''}
              `} />
              <p className={`
                flex-1 text-sm
                ${toast.type === 'success' ? 'text-green-500' : ''}
                ${toast.type === 'error' ? 'text-red-500' : ''}
                ${toast.type === 'info' ? 'text-blue-500' : ''}
              `}>
                {toast.message}
              </p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-300 flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
} 
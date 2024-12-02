'use client'

import { motion } from 'framer-motion'
import { AlertCircle, WifiOff, Lock, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorCardProps {
  type?: 'api' | 'network' | 'auth' | 'unknown'
  message?: string
  onRetry?: () => void
}

export function ErrorCard({ 
  type = 'unknown', 
  message, 
  onRetry 
}: ErrorCardProps) {
  const errorConfig = {
    api: {
      icon: AlertCircle,
      title: 'API Error',
      defaultMessage: 'Failed to fetch data from the server.'
    },
    network: {
      icon: WifiOff,
      title: 'Network Error',
      defaultMessage: 'Please check your internet connection.'
    },
    auth: {
      icon: Lock,
      title: 'Authentication Error',
      defaultMessage: 'Please sign in to access this content.'
    },
    unknown: {
      icon: AlertCircle,
      title: 'Something went wrong',
      defaultMessage: 'An unexpected error occurred.'
    }
  }

  const { icon: Icon, title, defaultMessage } = errorConfig[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg bg-red-500/10 border border-red-500/20"
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6 text-red-500" />
        <h3 className="text-lg font-semibold text-red-500">{title}</h3>
      </div>
      <p className="mt-2 text-gray-400">{message || defaultMessage}</p>
      {onRetry && (
        <div className="mt-4 flex items-center space-x-3">
          <Button 
            onClick={onRetry}
            variant="outline"
            className="group"
          >
            <RefreshCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </Button>
          <p className="text-sm text-gray-500">
            You can retry the operation or refresh the page
          </p>
        </div>
      )}
    </motion.div>
  )
} 
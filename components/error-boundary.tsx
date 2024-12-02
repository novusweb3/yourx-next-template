'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    // Show toast when error occurs
    const { addToast } = useToast.getState() // Access store directly in class component
    addToast({
      type: 'error',
      message: error.message || 'An unexpected error occurred'
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-red-500/10 border border-red-500/20"
        >
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-semibold text-red-500">
              Something went wrong!
            </h3>
          </div>
          <p className="mt-2 text-gray-400">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <Button 
            onClick={() => {
              this.setState({ hasError: false })
              window.location.reload()
            }}
            className="mt-4"
            variant="outline"
          >
            Try Again
          </Button>
        </motion.div>
      )
    }

    return this.props.children
  }
} 
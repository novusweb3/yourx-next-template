'use client'

import React from 'react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundaryWrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="text-sm font-medium text-red-800">Something went wrong</h3>
          <div className="mt-2 text-sm text-red-700">
            {this.state.error?.message || 'An unexpected error occurred'}
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 
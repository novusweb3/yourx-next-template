import { TwitterAPI, Post, Analytics, Insights } from '@/types/twitter'
import { APIError, handleAPIError } from '@/lib/utils/error'

export class RealTwitterAPI implements TwitterAPI {
  private async fetchWithError<T>(endpoint: string): Promise<T> {
    try {
      const isServer = typeof window === 'undefined'
      const baseUrl = isServer 
        ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        : ''
      
      const url = isServer
        ? `${baseUrl}/api/twitter/${endpoint}`
        : `/api/twitter/${endpoint}`
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new APIError(
          data.error || `Failed to fetch ${endpoint}`,
          response.status,
          'API_ERROR'
        )
      }
      
      return data
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error)
      throw handleAPIError(error)
    }
  }

  async getPosts(): Promise<Post[]> {
    return this.fetchWithError<Post[]>('posts')
  }

  async getAnalytics(): Promise<Analytics> {
    return this.fetchWithError<Analytics>('analytics')
  }

  async getInsights(): Promise<Insights> {
    return this.fetchWithError<Insights>('insights')
  }
} 
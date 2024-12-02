const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

interface DailyTotals {
  impressions: number
  likes: number
  retweets: number
  replies: number
}

interface Insights {
  sentiment: string
  engagement: {
    todaysPosts: {
      views: number
      likes: number
      retweets: number
      replies: number
    }
    totalToday: {
      views: number
      likes: number
      retweets: number
      replies: number
    }
  }
}

import { kv } from '@vercel/kv'

async function getInsights(): Promise<Insights> {
  try {
    const response = await fetch(`${BASE_URL}/api/twitter/insights`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    const data = await response.json()

    if (!response.ok) {
      console.warn('Insights API warning:', data)
      return data // Return the fallback data from the API
    }

    return data

  } catch (error) {
    console.error('Insights fetch error:', error)
    return {
      sentiment: 'neutral',
      engagement: {
        todaysPosts: { views: 0, likes: 0, retweets: 0, replies: 0 },
        totalToday: { views: 0, likes: 0, retweets: 0, replies: 0 }
      }
    }
  }
}

async function getAnalytics() {
  const response = await fetch(`${BASE_URL}/api/twitter/analytics`, {
    next: { revalidate: 300 }
  })
  const data = await response.json()
  return data
}

const api = {
  getInsights,
  getAnalytics
}

export default api 
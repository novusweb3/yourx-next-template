export interface EngagementMetrics {
  views: number
  likes: number
  shares: number
  comments: number
}

export interface InsightData {
  sentiment: 'positive' | 'negative' | 'neutral'
  engagement: {
    todaysPosts: EngagementMetrics
    totalToday: EngagementMetrics
  }
}

export interface Analytics {
  views: number
  engagement_rate: number
  trending_topics: string[]
}

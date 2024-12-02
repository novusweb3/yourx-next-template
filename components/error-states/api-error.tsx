export interface Post {
  id: string
  text: string
  created_at: string
  public_metrics: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
}

export interface Analytics {
  followers: number
  engagement_rate: number
  best_times: Array<{ hour: string; engagement: number }>
}

export interface Insights {
  sentiment: string
  topics: string[]
  engagement: {
    likes: number
    retweets: number
    replies: number
  }
  summary: string
}

export interface TwitterAPI {
  getPosts(): Promise<Post[]>
  getAnalytics(): Promise<Analytics>
  getInsights(): Promise<Insights>
} 
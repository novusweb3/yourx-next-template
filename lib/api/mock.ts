import { TwitterAPI, Post, Analytics, Insights } from '@/types/twitter'

export class MockTwitterAPI implements TwitterAPI {
  async getPosts(): Promise<Post[]> {
    return [
      {
        id: '1',
        text: 'Just launched my new project! #coding #webdev',
        created_at: new Date().toISOString(),
        public_metrics: {
          retweet_count: 5,
          reply_count: 3,
          like_count: 10,
          quote_count: 1
        }
      }
    ]
  }

  async getAnalytics(): Promise<Analytics> {
    return {
      followers: 1234,
      engagement_rate: 4.5,
      best_times: [
        { hour: '9AM', engagement: 20 },
        { hour: '12PM', engagement: 35 },
        { hour: '3PM', engagement: 45 },
        { hour: '6PM', engagement: 30 },
        { hour: '9PM', engagement: 25 }
      ]
    }
  }

  async getInsights(): Promise<Insights> {
    return {
      sentiment: 'positive',
      topics: ['technology', 'programming', 'web development'],
      engagement: {
        likes: 150,
        retweets: 45,
        replies: 23
      },
      summary: 'Your posts are performing well with high engagement rates.'
    }
  }
} 
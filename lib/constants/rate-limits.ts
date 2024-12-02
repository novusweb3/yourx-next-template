export const TWITTER_RATE_LIMITS = {
  DEFAULT: {
    requests: 180,
    window: 15 * 60 * 1000, // 15 minutes
    ttl: 5 * 60 * 1000 // 5 minutes cache
  },
  INSIGHTS: {
    requests: 15,
    window: 60 * 1000, // 1 minute
    ttl: 5 * 60 * 1000
  }
} 
interface RateLimitState {
  requests: number
  windowStart: number
}

const rateLimits = new Map<string, RateLimitState>()

export function getRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now()
  const state = rateLimits.get(key) || { requests: 0, windowStart: now }
  
  if (now - state.windowStart >= windowMs) {
    state.requests = 0
    state.windowStart = now
  }
  
  const isAllowed = state.requests < limit
  if (isAllowed) {
    state.requests++
  }
  
  rateLimits.set(key, state)
  
  return {
    isAllowed,
    remaining: Math.max(0, limit - state.requests),
    resetIn: Math.ceil((windowMs - (now - state.windowStart)) / 1000)
  }
} 
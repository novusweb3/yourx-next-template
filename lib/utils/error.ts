export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export function handleAPIError(error: unknown): APIError {
  if (error instanceof APIError) return error
  
  if (error instanceof Error) {
    if (error.message.includes('Failed to parse URL')) {
      return new APIError('Invalid API endpoint', 400, 'INVALID_URL')
    }
    if (error.message.includes('window is not defined')) {
      return new APIError('Server-side request failed', 500, 'SERVER_ERROR')
    }
    return new APIError(error.message, 500, 'UNKNOWN_ERROR')
  }
  
  return new APIError('An unknown error occurred', 500, 'UNKNOWN_ERROR')
} 
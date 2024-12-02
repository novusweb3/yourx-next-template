import { TwitterAPI } from '@/types/twitter'
import { MockTwitterAPI } from './mock'
import { RealTwitterAPI } from './real'

const api: TwitterAPI = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true'
  ? new MockTwitterAPI()
  : new RealTwitterAPI()

export default api 
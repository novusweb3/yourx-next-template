'use client'
import { TypeAnimation } from 'react-type-animation'

export function TypingTitle() {
  return (
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      Track Your{' '}
      <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        <TypeAnimation
          sequence={[
            'X Journey',
            2000,
            'Social Impact',
            2000,
            'Daily Activity',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </span>
      <br />
      With Daily Insights
    </h1>
  )
} 
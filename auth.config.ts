import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // You can add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnDevTools = nextUrl.pathname.startsWith('/dev-tools')
      
      if (isOnDevTools || isOnDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
  },
} satisfies NextAuthConfig

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      image?: string
      role?: string
    }
  }
  interface User {
    role?: string
  }
} 
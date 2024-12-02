'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart, Home, Settings } from 'lucide-react'
import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 min-h-screen border-r border-gray-800 p-4">
      <div className="space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-purple-500/10 text-purple-500' 
                  : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800/50'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export const Tabs = TabsPrimitive.Root
export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={`inline-flex h-10 items-center justify-center rounded-lg bg-[#252525] p-1 ${className}`}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-500 data-[state=active]:shadow-sm ${className}`}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ${className}`}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName 
'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Settings, LogOut, User } from 'lucide-react'
import Image from 'next/image'

interface UserMenuProps {
  user: {
    image?: string | null
    name?: string | null
    email?: string | null
  }
}

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-800 hover:opacity-90 transition-opacity">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || 'User'}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-medium">
              {user.name?.[0] || 'U'}
            </div>
          )}
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="min-w-[220px] bg-[#252525] rounded-lg p-1 shadow-lg border border-gray-800 mt-2"
          align="end"
          sideOffset={5}
        >
          {user.email && (
            <div className="px-2 py-1.5 text-sm text-gray-400 border-b border-gray-800 mb-1">
              {user.email}
            </div>
          )}
          
          <DropdownMenu.Item 
            className="flex items-center gap-2 px-2 py-2 text-sm text-gray-200 outline-none cursor-pointer hover:bg-gray-800/50 rounded-md"
            onClick={() => router.push('/dashboard/profile')}
          >
            <User className="h-4 w-4" />
            Profile
          </DropdownMenu.Item>
          
          <DropdownMenu.Item 
            className="flex items-center gap-2 px-2 py-2 text-sm text-gray-200 outline-none cursor-pointer hover:bg-gray-800/50 rounded-md"
            onClick={() => router.push('/dashboard/settings')}
          >
            <Settings className="h-4 w-4" />
            Settings
          </DropdownMenu.Item>
          
          <DropdownMenu.Item 
            className="flex items-center gap-2 px-2 py-2 text-sm text-red-500 outline-none cursor-pointer hover:bg-gray-800/50 rounded-md mt-1"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Log out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
} 
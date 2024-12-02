import { Laptop } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

export function UserNav({ user }: { user: User }) {
  const isDevToolsAllowed = isDeveloper(user.email)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* ... existing trigger ... */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* ... existing menu items ... */}
        
        {isDevToolsAllowed && process.env.NODE_ENV === 'development' && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/dev-tools">
                <Laptop className="mr-2 h-4 w-4" />
                <span>Developer Tools</span>
              </a>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
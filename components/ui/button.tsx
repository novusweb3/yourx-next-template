import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      default: 'bg-purple-500 text-white hover:bg-purple-600',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border border-gray-700 hover:bg-gray-800',
      ghost: 'hover:bg-gray-800'
    }
    
    const sizes = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 px-3 text-sm',
      lg: 'h-10 px-8'
    }

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button' 
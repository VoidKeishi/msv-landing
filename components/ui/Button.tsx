import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-msv-blue text-white hover:bg-opacity-90',
    secondary: 'bg-msv-green text-white hover:bg-opacity-90',
    outline: 'border-2 border-msv-blue text-msv-blue hover:bg-msv-blue hover:text-white',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

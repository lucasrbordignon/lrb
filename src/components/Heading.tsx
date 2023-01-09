import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface HeadingProps{
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild }: HeadingProps){
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp 
      className={clsx(
        'text-yellow-500 font-sans hover:text-yellow-300 ',
        {
          'text-xs': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {children}
    </Comp>
  )
}
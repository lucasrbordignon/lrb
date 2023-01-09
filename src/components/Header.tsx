import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

interface HeaderProps{
  children: ReactNode;
  asChild?: boolean;
}

export function Header({ children, asChild }: HeaderProps){
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className='top-full static max-w-max h-16 flex items-center justify-around gap-20  mr-4 ml-4'>
      {children}
    </Comp>
  )
}
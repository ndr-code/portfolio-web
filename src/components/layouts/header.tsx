import React from 'react';
import { ThemeToggle } from '../ui/theme-toggle';

export default function Header() {
  return (
    <div className='fixed w-full top-0 py-4 px-8 h-18 bg-sidebar-foreground text-background z-50'>
      <div className='flex justify-between items-center h-full'>
        <div className='font-bold'>Logo</div>
        <ThemeToggle />
      </div>
    </div>
  );
}

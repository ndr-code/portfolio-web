'use client';
import React from 'react';

export default function Main() {
  return (
    <div>
      <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 h-[90vh]'>
        <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
          <ol className='font-mono list-inside list-decimal text-sm/6 text-center sm:text-left'>
            <li className='mb-2 tracking-[-.01em]'>
              Get started by editing{' '}
              <code className='bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded'>
                src/app/page.tsx
              </code>
              .
            </li>
            <li className='tracking-[-.01em]'>
              Save and see your changes instantly.
            </li>
          </ol>
        </main>
      </div>
    </div>
  );
}

import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      <Header />
      <main className='relative flex-1'>{children}</main>
      <Footer />
    </div>
  );
}

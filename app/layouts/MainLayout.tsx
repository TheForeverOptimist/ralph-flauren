import React from 'react';
import {usePathname} from 'next/navigation'
import TopNav from '../components/TopNav';


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
  return (
    <>
    <TopNav />
    <div>
        {children}
    </div>
    
    
    </>

  );
}

import React from 'react';
import {usePathname} from 'next/navigation'
import TopNav from './TopNav';
import SecondNav from './SecondNav';


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
  return (
    <>
    <TopNav />
    <SecondNav />
    <div>
        {children}
    </div>
    
    
    </>

  );
}

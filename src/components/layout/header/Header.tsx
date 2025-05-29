'use client'
import React from 'react'
import scss from './Header.module.scss'
import Navbar from '../navbar/Navbar'
import { usePathname } from 'next/navigation';



const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className={isHome ? scss.HeaderWithBackground : scss.Header}>
      <Navbar />
    </div>
  )
}

export default Header
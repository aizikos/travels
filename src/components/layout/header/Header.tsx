import React from 'react'
import scss from './Header.module.scss'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className={scss.Header}>
        <Navbar/>
    </div>
  )
}

export default Header
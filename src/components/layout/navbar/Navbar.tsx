'use client';

import { FC, useState } from 'react';
import scss from './Navbar.module.scss';
import Link from 'next/link';
import Lang from '../lang/lang';
import Image from 'next/image';
import search from '@/assets/icons/search.svg';
import menuIcon from '@/assets/icons/Hamburger.svg';
import closeIcon from '@/assets/icons/close_button.svg';
import LoginModal from '../header/LoginModal';
import LOGO from '@/assets/logo/Logo.png';

const Navbar: FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = (method: 'telegram' | 'email' | 'phone') => {
    console.log('Selected login method: ', method);
    setShowLogin(false);
  };

  return (
    <div className={scss.Navbar}>
      <div className={scss.container}>
        <div className={scss.menu}>
          <Image className={scss.logo} src={LOGO} alt="logo" />

          {/* Мобильный бургер-иконка */}
          <button className={scss.burgerIcon} onClick={() => setIsMenuOpen(true)}>
            <Image src={menuIcon} alt="menu icon" />
          </button>

          {/* Меню — видно только на десктопе */}
          <div className={scss.nav_menu}>
            <ul><li><Link href="/">Главная</Link></li></ul>
            <ul><li><Link href="/tours">Туры</Link></li></ul>
            <ul><li><Link href="/contact">Контакты</Link></li></ul>
            <button className={scss.btn} onClick={() => setShowLogin(true)}>
              Вход
            </button>
          </div>

          {/* Поиск и язык — только десктоп */}
          <div className={scss.input}>
            <div className={scss.search_input}>
              <input type="text" placeholder="Поиск" />
              <Image src={search} alt="search icon" />
            </div>
            <Lang />
          </div>
        </div>
      </div>

      {/* Мобильное выезжающее меню */}
      <div className={`${scss.slideMenu} ${isMenuOpen ? scss.open : ''}`}>
        <button className={scss.closeIcon} onClick={() => setIsMenuOpen(false)}>
          <Image src={closeIcon} alt="close" />
        </button>

        <ul className={scss.navLinks}>
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/tours">Туры</Link></li>
          <li><Link href="/contact">Контакты</Link></li>
          <li>
            <button className={scss.btn} onClick={() => { setShowLogin(true); setIsMenuOpen(false); }}>
              Вход
            </button>
          </li>
        </ul>

        {/* Языки в бургер-меню */}
        <div className={scss.mobileLang}>
          <Lang />
        </div>
      </div>

      {/* Модальное окно */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onSelect={handleSelect} />
    </div>
  );
};

export default Navbar;

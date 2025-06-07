'use client';
import { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import Image from 'next/image';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.burgerMenuWrapper}>
      <div className={styles.topBar}>
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className={styles.menu}>
          <ul>
            <li>О компании</li>
            <li>Туры</li>
            <li>Контакты</li>
            <li>Гиды</li>
            <li>Вход</li>
            <li>
              <button className={styles.langBtn}>RU</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

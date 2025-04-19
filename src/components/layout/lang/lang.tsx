import { useState } from 'react';
import scss from './lang.module.scss'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'RU' | 'EN'>('RU');

  return (
    <div className={scss.wrapper}>
      <button
        className={`${scss.btn} ${lang === 'RU' ? scss.active : ''}`}
        onClick={() => setLang('RU')}
      >
        RU
      </button>
      <button
        className={`${scss.btn} ${lang === 'EN' ? scss.active : ''}`}
        onClick={() => setLang('EN')}
      >
        EN
      </button>
    </div>
  );
}

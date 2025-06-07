import { FC, useState } from 'react';
import scss from './Navbar.module.scss'
import Link from 'next/link';
import Lang from '../lang/lang'
import Image from 'next/image';
import search from '../../../assets/icons/search.svg';
import LoginModal from '../header/LoginModal'
import LOGO from "../../../assets/logo/Logo.png"


const Navbar: FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleSelect = (method: 'telegram' | 'email' | 'phone') => {
        console.log('Selected login method:', method)
        setShowLogin(false);
    };
    return <div className={scss.Navbar}>
        <div className={scss.container}>
            <div className={scss.menu}>
                <div className={scss.nav_menu}>
                    <Image className={scss.logo} src={LOGO} alt='Logo'/>
                    <ul><li><Link href={'/'}>Главная</Link> </li></ul>
                    <ul><li><Link href={'/tours'}>Туры</Link></li></ul>
                    <li>Контакты</li>
                    <button className={scss.btn}onClick={() => setShowLogin(true)}>Вход</button>
                </div>
                <LoginModal
                    isOpen={showLogin}
                    onClose={() => setShowLogin(false)}
                    onSelect={handleSelect}
                />
                <div className={scss.input}>
                    <div className={scss.search_input}>
                        <input type="text" placeholder='Поиск' />
                        <Image src={search} alt='search icons' />
                    </div>

                    <Lang />
                </div>
            </div>
        </div>
    </div>


};


export default Navbar
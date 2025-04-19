import { FC } from 'react';
import scss from './Navbar.module.scss'
import Link from 'next/link';
import Lang from '../lang/lang'


const Navbar: FC = () => {
    return <div className={scss.Navbar}>
        <div className={scss.container}>
            <div className={scss.menu}>
                <div className={scss.nav_menu}>
                    <li>LOGO</li>
                    <li>Главная</li>
                    <Link href={'/tours'}><li>Туры</li></Link>
                    <li>Контакты</li>
                    <li>Вход</li>
                </div>
                <div className={scss.input}>
                    <input type="text" />
                    <Lang/>
                </div>
            </div>
        </div>
    </div>


};


export default Navbar
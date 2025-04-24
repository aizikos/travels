import { FC } from 'react';
import scss from './Navbar.module.scss'
import Link from 'next/link';
import Lang from '../lang/lang'
import Image from 'next/image';
import search from '../../../assets/icons/search.svg'


const Navbar: FC = () => {
    return <div className={scss.Navbar}>
        <div className={scss.container}>
            <div className={scss.menu}>
                <div className={scss.nav_menu}>
                    <ul><li>LOGO</li></ul>
                    <ul><li><Link href={'/'}>Главная</Link> </li></ul>
                    <ul><li><Link href={'/tours'}>Туры</Link></li></ul>
                    <li>Контакты</li>
                    <li>Вход</li>
                </div>
                <div className={scss.input}>
                    <div className={scss.search_input}>
                        <input type="text" placeholder='Поиск' />
                        <Image src={search} alt='search icons'/>
                    </div>

                    <Lang />
                </div>
            </div>
        </div>
    </div>


};


export default Navbar
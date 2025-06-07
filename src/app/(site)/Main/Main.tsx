'use client'
import { FC, useState } from 'react';
import scss from './Main.module.scss'
import image from '../../../assets/image 3.png'
import Image from 'next/image';
import Link from 'next/link';
import img_icons from '../../../assets/icons/right.svg'
import Guide from '../page_total/guide'
import Review from '../page_total/review'
import Form from '../page_total/form';
import Card from '../page_total/Card'

const Main: FC = () => {
    const [active, setActive] = useState<'best' | 'oneDay'>('best');
    return <div className={scss.Main}>
        <div className={scss.container}>
            <div className={scss.buttons}>
                <div className={scss.tabs}>
                    <button
                        className={`${scss.tab} ${active === 'best' ? scss.active : ''}`}
                        onClick={() => setActive('best')}
                    >
                        Лучшие туры
                    </button>
                    <button
                        className={`${scss.tab} ${active === 'oneDay' ? scss.active : ''}`}
                        onClick={() => setActive('oneDay')}
                    >
                        Однодневные туры
                    </button>
                </div>
            </div>
            <Card/>
            <div className={scss.btn_tours}>
                <Link href={'/tours'}>
                    Смотреть все туры
                    <Image src={img_icons} alt='icons' />
                </Link>
            </div>
            <Guide />
            <Review />
        </div>
        <Form />
    </div>


};


export default Main
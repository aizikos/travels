'use client'
import { FC, useState } from 'react';
import scss from './Main.module.scss'
import image from '../../../assets/image 3.png'
import Image from 'next/image';



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

            <div className={scss.card}>
                <div className={scss.tour_card}>
                    <Image src={image} alt='image' />
                    <div className={scss.csrd_text}>
                        <h5>Жети Огуз </h5>
                        <p>3 Дня</p>
                        <p>5000 сом</p>
                        <p>Даты выездов: 18.03, 20.03</p>
                        <p>Осталось мест: 5</p>
                    </div>
                </div>
                <div className={scss.tour_card}>
                    <Image src={image} alt='image' />
                    <div className={scss.csrd_text}>
                        <h5>Жети Огуз </h5>
                        <p>3 Дня</p>
                        <p>5000 сом</p>
                        <p>Даты выездов: 18.03, 20.03</p>
                        <p>Осталось мест: 5</p>
                    </div>
                </div>
                <div className={scss.tour_card}>
                    <Image src={image} alt='image' />
                    <div className={scss.csrd_text}>
                        <h5>Жети Огуз </h5>
                        <p>3 Дня</p>
                        <p>5000 сом</p>
                        <p>Даты выездов: 18.03, 20.03</p>
                        <p>Осталось мест: 5</p>
                    </div>
                </div>
                <div className={scss.tour_card}>
                    <Image src={image} alt='image' />
                    <div className={scss.csrd_text}>
                        <h5>Жети Огуз </h5>
                        <p>3 Дня</p>
                        <p>5000 сом</p>
                        <p>Даты выездов: 18.03, 20.03</p>
                        <p>Осталось мест: 5</p>
                    </div>
                </div>
                <div className={scss.tour_card}>
                    <Image src={image} alt='image' />
                    <div className={scss.csrd_text}>
                        <h5>Жети Огуз </h5>
                        <p>3 Дня</p>
                        <p>5000 сом</p>
                        <p>Даты выездов: 18.03, 20.03</p>
                        <p>Осталось мест: 5</p>
                    </div>
                </div>
                <div className={scss.tour_card}>
                    <Image src={image} alt='image' />
                    <div className={scss.csrd_text}>
                        <h5>Жети Огуз </h5>
                        <p>3 Дня</p>
                        <p>5000 сом</p>
                        <p>Даты выездов: 18.03, 20.03</p>
                        <p>Осталось мест: 5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


};


export default Main
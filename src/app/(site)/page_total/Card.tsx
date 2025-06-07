import { FC } from 'react';
import scss from './Card.module.scss'
import image from '../../../assets/image 3.png'
import Image from 'next/image';
import Link from 'next/link';


const Card: FC = () => {
    return <section>
        <div className={scss.card}>
            <div className={scss.tour_card}>
                <div className={scss.img_card}>
                    <Image src={image} alt='image' />
                    <Link href={'.'} className={scss.img_btn}>Забронировать</Link>
                </div>
                <div className={scss.csrd_text}>
                    <h5>Жети Огуз </h5>
                    <p>3 Дня</p>
                    <p>5000 сом</p>
                    <p>Даты выездов: 18.03, 20.03</p>
                    <p>Осталось мест: 5</p>
                </div>
            </div>
            <div className={scss.tour_card}>
                <div className={scss.img_card}>
                    <Image src={image} alt='image' />
                    <Link href={'.'} className={scss.img_btn}>Забронировать</Link>
                </div>
                <div className={scss.csrd_text}>
                    <h5>Жети Огуз </h5>
                    <p>3 Дня</p>
                    <p>5000 сом</p>
                    <p>Даты выездов: 18.03, 20.03</p>
                    <p>Осталось мест: 5</p>
                </div>
            </div>
            <div className={scss.tour_card}>
                <div className={scss.img_card}>
                    <Image src={image} alt='image' />
                    <Link href={'.'} className={scss.img_btn}>Забронировать</Link>
                </div>
                <div className={scss.csrd_text}>
                    <h5>Жети Огуз </h5>
                    <p>3 Дня</p>
                    <p>5000 сом</p>
                    <p>Даты выездов: 18.03, 20.03</p>
                    <p>Осталось мест: 5</p>
                </div>
            </div>
            <div className={scss.tour_card}>
                <div className={scss.img_card}>
                    <Image src={image} alt='image' />
                    <Link href={'.'} className={scss.img_btn}>Забронировать</Link>
                </div>
                <div className={scss.csrd_text}>
                    <h5>Жети Огуз </h5>
                    <p>3 Дня</p>
                    <p>5000 сом</p>
                    <p>Даты выездов: 18.03, 20.03</p>
                    <p>Осталось мест: 5</p>
                </div>
            </div>
            <div className={scss.tour_card}>
                <div className={scss.img_card}>
                    <Image src={image} alt='image' />
                    <Link href={'.'} className={scss.img_btn}>Забронировать</Link>
                </div>
                <div className={scss.csrd_text}>
                    <h5>Жети Огуз </h5>
                    <p>3 Дня</p>
                    <p>5000 сом</p>
                    <p>Даты выездов: 18.03, 20.03</p>
                    <p>Осталось мест: 5</p>
                </div>
            </div>
            <div className={scss.tour_card}>
                <div className={scss.img_card}>
                    <Image src={image} alt='image' />
                    <Link href={'.'} className={scss.img_btn}>Забронировать</Link>
                </div>
                <div className={scss.csrd_text}>
                    <h5>Жети Огуз </h5>
                    <p>3 Дня</p>
                    <p>5000 сом</p>
                    <p>Даты выездов: 18.03, 20.03</p>
                    <p>Осталось мест: 5</p>
                </div>
            </div>
        </div>
    </section>


};


export default Card
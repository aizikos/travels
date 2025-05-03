import { FC } from 'react';
import scss from './guide.module.scss'
import Image from 'next/image';
import image from '../../../assets/review/Ellipse 1.png'
import star from '../../../assets/icons/star.svg'
import Link from 'next/link';
import img_icons from '../../../assets/icons/right.svg'

const Review: FC = () => {
    return <div className={scss.Guide}>
        <div className={scss.guide}>
            <Image src={image} alt='review' />
            <div className={scss.guide_info}>
                <h2>Иван</h2>
                <div className={scss.rating}>
                    <div className={scss.rating_scale}>
                        <span>4.7</span>
                        <Image src={star} alt='star' />
                    </div>
                    <span>32 Отзыва</span>
                    <span>3 года опыта</span>
                </div>
                <div className={scss.text}>
                    <p>Профессиональный гид, который проводит экскурсии по Кыргызстану.
                        Любит свою работу и считает, что это лучшее занятие в мире!
                    </p>
                    <p>Профессиональный гид, который проводит экскурсии по Кыргызстану.
                        Любит свою работу и считает, что это лучшее занятие в мире!
                    </p>
                </div>
            </div>
        </div>
        <div className={scss.guide}>
            <Image src={image} alt='review' />
            <div className={scss.guide_info}>
                <h2>Иван</h2>
                <div className={scss.rating}>
                    <div className={scss.rating_scale}>
                        <span>4.7</span>
                        <Image src={star} alt='star' />
                    </div>
                    <span>32 Отзыва</span>
                    <span>3 года опыта</span>
                </div>
                <div className={scss.text}>
                    <p>Профессиональный гид, который проводит экскурсии по Кыргызстану.
                        Любит свою работу и считает, что это лучшее занятие в мире!
                    </p>
                    <p>Профессиональный гид, который проводит экскурсии по Кыргызстану.
                        Любит свою работу и считает, что это лучшее занятие в мире!
                    </p>
                </div>
            </div>
        </div>
        <div className={scss.btn_guide}>
            <Link href={'/guides'}>
                 Все гиды
                <Image src={img_icons} alt='icons' />
            </Link>
        </div>
    </div>



};


export default Review
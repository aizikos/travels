"use client"
import { FC, useState } from 'react';
import scss from './review.module.scss'
import Image from 'next/image';
import starOrange from '../../../assets/icons/Star Orange.svg'
import starEmty from '../../../assets/icons/Star Empty.svg'
import Link from 'next/link';


const Review: FC = () => {
    const [rating, setRaiting] = useState(0);
    const [hover, setHover] = useState(0);
    return <section>
        <div className={scss.review}>
            <div className={scss.review_btn}>
                <h1>Отзыв</h1>
                <Link href={'/review-blank'}>Оставить свой отзыв</Link>
            </div>
            <div className={scss.review_desk}>
                <div className={scss.review_card}>
                    <h2>Тахмина</h2>
                    <div className={scss.stars}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type='button'
                                onClick={() => setRaiting(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={scss.starBtn}
                            >
                                <Image src={star <= (hover || rating) ? starOrange : starEmty}
                                    alt='star'
                                    className={scss.starImg}
                                    width={24}
                                    height={24} />
                            </button>
                        ))}
                    </div>

                    <p className={scss.text}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
        </div>
    </section>


};


export default Review
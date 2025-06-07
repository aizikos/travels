import { FC } from 'react';
import scss from './Tours.module.scss'
import FilterTour from './FilterTour';
import Card from '@/app/(site)/page_total/Card';

const tours: FC = () => {
    return <section>
        <div className={scss.Tours}>
            <div className={scss.container}>
                <div className={scss.toursMain}>
                    <div className={scss.fillter}>
                        <div className={scss.fillterTour}>
                            <h1>Туры</h1>
                            <ul>
                                <li>Все туры</li>
                                <li>Лучшие туры</li>
                                <li>Индивидуальные туры</li>
                            </ul>
                        </div>
                        <FilterTour />
                    </div>
                    <Card />
                </div>
            </div>
        </div>
    </section>


};


export default tours
import React from 'react'
import scss from './Footer.module.scss'
import Image from 'next/image'
import faceBook from '../../../assets/icons/media/ic_round-facebook.svg'
import instagram from '../../../assets/icons/media/hugeicons_instagram.svg'
import envelope from '../../../assets/icons/media/mdi-light_email.svg'
import map from '../../../assets/icons/media/Vector (1).svg'
import phone from '../../../assets/icons/media/mdi-light_phone.svg'
const Footer = () => {
  return (
    <section>
      <div className={scss.container}>
        <div className={scss.block}>
          <div className="">
            <h1>LOGO</h1>
          </div>
          <div className={scss.footerMenu}>
            <ul className={scss.navLinks}>
              <li><a href="/">Главная</a></li>
              <li><a href="/about">О компании</a></li>
              <li><a href="/tours">Туры</a></li>
              <li><a href="/contacts">Контакты</a></li>
              <li><a href="/guides">Гиды</a></li>
              <li><a href="/reviews">Отзывы</a></li>
            </ul>
          </div>
          <div className={scss.media}>
            <div className={scss.contactItem}><Image src={faceBook} alt='faceBook' /><a href="">takhminam</a></div>
            <div className={scss.contactItem}><Image src={instagram} alt='instagram' /><a href="">@takhminam</a></div>
            <div className={scss.contactItem}><Image src={envelope} alt='envelope' /><a href="">takhminam@email.com</a></div>
          </div>
          <div className={scss.column}>
            <div className={scss.contactItem}>
              <Image src={map} alt='map' />
              <span>ул. Тыныстанова <br />
                БЦ “Бизнес Центр” <br />
                3-й этаж, офис 5
              </span>
            </div>
            <div className={scss.contactItem}>
              <Image src={phone} alt='phone' />
              <span>+ 996 700 000 000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer
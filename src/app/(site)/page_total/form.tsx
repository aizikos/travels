import { FC, useState } from 'react';
import scss from './form.module.scss'


const Form: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ""
    })

    const handlChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const HandlSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Отправленные данные:', formData);


        setFormData({
            name: '',
            phone: '',
            email: '',
            comment: '',
        });
    };

    return <section>
        <div className={scss.formBg}>
            <div className={scss.container}>
                <div className={scss.formDesk}>
                    <div className={scss.formText}>
                        <h1>Необходимо связаться с Вами?</h1>
                        <h5>Оставьте свои контакты</h5>
                    </div>
                    <form className={scss.formInput} onSubmit={HandlSubmit}>
                        <input type="text" name='name' placeholder='Фамилия и имя *'
                            value={formData.name} onChange={handlChange} required />
                        <input type="tel" name='phone' placeholder='Номер телефона *'
                            value={formData.phone} onChange={handlChange} required />
                        <input type="email" name='email' placeholder='Эл. почта *'
                            value={formData.email} onChange={handlChange} required />
                        <textarea name='comment' placeholder='Комментарий:'
                            value={formData.comment} onChange={handlChange} />
                        <button type='submit'>Отправить Заявку</button>
                    </form>
                </div>
            </div>
        </div>

    </section>


};


export default Form
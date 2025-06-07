import { FC, useState } from 'react';
import scss from './LoginModal.module.scss';
import EmailLoginForm from './EmailLoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (method: 'telegram' | 'email' | 'phone') => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [method, setMethod] = useState<'telegram' | 'email' | 'phone' | null>(null);

  const handleBack = () => setMethod(null);

  if (!isOpen) return null;

  return (
    <div className={scss.overlay} onClick={onClose}>
      <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
        <button className={scss.close} onClick={onClose}>×</button>

        {!method && (
          <>
            <h2>Вход</h2>
            <div className={scss.btn_form}>
              <button className={scss.btns} onClick={() => setMethod('telegram')}>Войти через Telegram</button>
              <button className={scss.btns} onClick={() => setMethod('email')}>Войти через почту</button>
              <button className={scss.btns} onClick={() => setMethod('phone')}>Пройти регистрацию</button>
            </div>
          </>
        )}

        {method === 'email' && (
          <EmailLoginForm
            onBack={handleBack}
            onSubmit={(email) => {
              console.log('Отправить код на email:', email);
            }}
          />
        )}
      </div>
    </div>
  );
};


export default LoginModal;

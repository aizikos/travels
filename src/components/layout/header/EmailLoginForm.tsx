import React, { useState, useEffect } from 'react';
import styles from './EmailLoginForm.module.scss';

type EmailLoginFormProps = {
    onBack: () => void;
    onSubmit: (email: string) => void;
  };
  

const EmailLoginForm: React.FC <EmailLoginFormProps> = ({ onBack, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [sent, setSent] = useState(false);
  const [timer, setTimer] = useState(59);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = () => {
    if (!isEmailValid) return;
    setSent(true);
    setTimer(59);
    // здесь можно вызвать API отправки кода
  };

  useEffect(() => {
    if (sent && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [sent, timer]);

  const handleSubmit = () => {
    // логика регистрации
    console.log('Зарегистрироваться с:', email, code);
  };

  return (
    <div className={styles.modal}>
      <h2 className={styles.title}>Регистрация</h2>

      <input
        type="email"
        placeholder="Useraccount@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />

      <div className={styles.codeRow}>
        <input
          type="text"
          placeholder="Код *"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.input}
        />
        <button
          className={styles.sendButton}
          onClick={handleSendCode}
          disabled={!isEmailValid || sent}
        >
          Получить код
        </button>
      </div>

      {sent && (
        <>
          <div className={styles.note}>
            Введите код, отправленный на вашу почту
          </div>
          <div className={styles.resend}>
            Отправить код повторно
            <span className={styles.timer}> {timer} сек</span>
          </div>
        </>
      )}

      <button className={styles.submit} onClick={handleSubmit}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default EmailLoginForm;

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import EmailSentPopup from 'components/molecules/EmailSentPopup/EmailSentPopup';
import StyledWrapper from './ContactForm.styles';

const emailApiUrl = process.env.EMAIL_API_URL;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isPopupActive, setIsPopupActive] = useState(false);

  useEffect(() => {
    if (isPopupActive) {
      setTimeout(() => {
        setIsPopupActive(false);
      }, 3000);
    }
  }, [isPopupActive]);

  const onSubmit = (data) => {
    reset();
    setIsPopupActive(true);
    axios.post(emailApiUrl, data);
  };

  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="fields-container">
        <input placeholder="Imię" {...register('name', { required: true })} />
        <input
          placeholder="Email"
          {...register('email', {
            required: true,
            validate: (value) => isEmail(value),
          })}
        />
        <textarea
          placeholder="Wiadomość"
          {...register('message', { required: true })}
        />
      </div>

      <div className="bottom-container">
        <div className="error">
          {errors.email?.type === 'validate'
            ? 'Adres email jest nieprawidłowy'
            : errors.name || errors.email || errors.message
            ? 'Wypełnij proszę wszytstkie pola'
            : null}
        </div>

        <input type="submit" value="Wyślij" className="submit" />
      </div>

      {isPopupActive && (
        <EmailSentPopup close={() => setIsPopupActive(false)} />
      )}
    </StyledWrapper>
  );
};

export default ContactForm;

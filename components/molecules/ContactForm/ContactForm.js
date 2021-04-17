import StyledWrapper from './ContactForm.styles';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EmailSentPopup from 'components/molecules/EmailSentPopup/EmailSentPopup';

const emailApiUrl = process.env.EMAIL_API_URL;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    if (popupActive) {
      setTimeout(() => {
        setPopupActive(false);
      }, 3000);
    }
  }, [popupActive]);

  const onSubmit = (data) => {
    reset();
    setPopupActive(true);
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
        ></textarea>
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

      {popupActive && <EmailSentPopup close={() => setPopupActive(false)} />}
    </StyledWrapper>
  );
};

export default ContactForm;

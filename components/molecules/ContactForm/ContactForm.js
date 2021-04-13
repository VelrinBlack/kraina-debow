import StyledWrapper from './ContactForm.styles';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
    </StyledWrapper>
  );
};

export default ContactForm;

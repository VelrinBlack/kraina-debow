import ContactForm from 'components/molecules/ContactForm/ContactForm';
import ContactInfo from 'components/molecules/ContactInfo/ContactInfo';
import StyledWrapper from './ContactFormSection.styles';

const ContactFormSection = () => (
  <StyledWrapper>
    <ContactInfo />
    <ContactForm />
  </StyledWrapper>
);

export default ContactFormSection;

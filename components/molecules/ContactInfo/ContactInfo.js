import StyledWrapper from './ContactInfo.styles';

const ContactInfo = () => (
  <StyledWrapper>
    <img src="/images/portrait.jpg" alt="mój portret" />
    <p className="name">Katarzyna Wleciał</p>
    <p className="email">noemi80@onet.eu</p>
    <p className="phone-number">512 316 622</p>
  </StyledWrapper>
);

export default ContactInfo;

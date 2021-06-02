import Image from 'next/image';
import StyledWrapper from './ContactInfo.styles';

const ContactInfo = () => (
  <StyledWrapper>
    <Image
      src="/images/portrait.jpg"
      width={100}
      height={100}
      alt="mój portret"
      className="portrait"
    />

    <p className="name">Katarzyna Wleciał</p>
    <p className="email">noemi80@onet.eu</p>
    <p className="phone-number">512 316 622</p>
  </StyledWrapper>
);

export default ContactInfo;

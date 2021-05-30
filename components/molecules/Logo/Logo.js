import Link from 'next/link';
import StyledWrapper from './Logo.styles';

const Logo = () => (
  <Link href="/">
    <a>
      <StyledWrapper>
        <img src="/images/logo_secondary.svg" alt="logo" className="logo" />
        <span className="logo-text">Kraina Dębów</span>
      </StyledWrapper>
    </a>
  </Link>
);

export default Logo;

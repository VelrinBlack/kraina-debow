import StyledWrapper from './Navbar.styles';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';

const Navbar = () => (
  <StyledWrapper>
    <ul>
      <NavbarLink name="Strona Główna" location="/" />
      <NavbarLink name="Blog" location="/blog" />
      <NavbarLink name="Galeria" location="/galeria" />
      <NavbarLink name="Kontakt" location="/kontakt" />
    </ul>
  </StyledWrapper>
);

export default Navbar;

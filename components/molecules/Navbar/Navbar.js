import StyledWrapper from './Navbar.styles';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';
import PropTypes from 'prop-types';

const Navbar = ({ isCentered = false }) => (
  <StyledWrapper className={isCentered && 'centered'}>
    <ul>
      <NavbarLink name="Strona Główna" location="/" />
      <NavbarLink name="Blog" location="/blog" />
      <NavbarLink name="Galeria" location="/galeria" />
      <NavbarLink name="Kontakt" location="/kontakt" />
    </ul>
  </StyledWrapper>
);

Navbar.propTypes = {
  isCentered: PropTypes.bool,
};

export default Navbar;

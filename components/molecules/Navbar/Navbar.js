import StyledWrapper from './Navbar.styles';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import PropTypes from 'prop-types';

const Navbar = ({ isCentered = false }) => (
  <StyledWrapper className={isCentered && 'centered'}>
    <ul>
      <NavigationLink name="Strona Główna" location="/" />
      <NavigationLink name="Blog" location="/blog" />
      <NavigationLink name="Galeria" location="/galeria" />
      <NavigationLink name="Kontakt" location="/kontakt" />
    </ul>
  </StyledWrapper>
);

Navbar.propTypes = {
  isCentered: PropTypes.bool,
};

export default Navbar;

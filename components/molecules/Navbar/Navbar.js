import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import StyledWrapper from './Navbar.styles';

const Navbar = ({ isHomePage }) => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPosition(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper
      className={currentScrollPosition > 200 && 'centered'}
      isHomePage={isHomePage}
      data-testid="navbar"
    >
      <ul>
        <NavigationLink text="Strona Główna" destination="/" />
        <NavigationLink text="Blog" destination="/blog" />
        <NavigationLink text="Galeria" destination="/galeria" />
        <NavigationLink text="Kontakt" destination="/kontakt" />
      </ul>
    </StyledWrapper>
  );
};

Navbar.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
};

export default Navbar;

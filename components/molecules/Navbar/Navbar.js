import StyledWrapper from './Navbar.styles';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';

import { useEffect, useState } from 'react';

const Navbar = () => {
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
    <StyledWrapper className={currentScrollPosition > 200 && 'centered'}>
      <ul>
        <NavigationLink name="Strona Główna" location="/" />
        <NavigationLink name="Blog" location="/blog" />
        <NavigationLink name="Galeria" location="/galeria" />
        <NavigationLink name="Kontakt" location="/kontakt" />
      </ul>
    </StyledWrapper>
  );
};

export default Navbar;

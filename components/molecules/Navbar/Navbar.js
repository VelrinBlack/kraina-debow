import { useEffect, useState } from 'react';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import StyledWrapper from './Navbar.styles';

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
        <NavigationLink text="Strona Główna" destination="/" />
        <NavigationLink text="Blog" destination="/blog" />
        <NavigationLink text="Galeria" destination="/galeria" />
        <NavigationLink text="Kontakt" destination="/kontakt" />
      </ul>
    </StyledWrapper>
  );
};

export default Navbar;

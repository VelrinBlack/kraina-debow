import { useState } from 'react';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import StyledWrapper from './HamburgerMenu.styles';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <nav className={`${isOpen && 'is-open'}`} data-testid="hamburger nav">
        <button
          className="closing-button"
          aria-label="close navigation"
          onClick={() => setIsOpen(false)}
        ></button>

        <ul className="links-list">
          <NavigationLink text="Strona Główna" destination="/" />
          <NavigationLink text="Blog" destination="/blog" />
          <NavigationLink text="Galeria" destination="/galeria" />
          <NavigationLink text="Kontakt" destination="/kontakt" />
        </ul>
      </nav>

      <button
        className="opening-button"
        aria-label="open navigation"
        onClick={() => setIsOpen(true)}
      ></button>
    </StyledWrapper>
  );
};

export default HamburgerMenu;

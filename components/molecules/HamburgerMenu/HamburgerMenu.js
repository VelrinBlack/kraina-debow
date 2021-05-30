import { useState } from 'react';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import StyledWrapper from './HamburgerMenu.styles';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <nav className={`${isOpen && 'is-open'}`}>
        <button
          className="closing-button"
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
        onClick={() => setIsOpen(true)}
      ></button>
    </StyledWrapper>
  );
};

export default HamburgerMenu;

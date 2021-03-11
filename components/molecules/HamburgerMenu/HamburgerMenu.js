import StyledWrapper from './HamburgerMenu.styles';
import { useState } from 'react';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <nav className={`${isOpen && 'is-open'}`}>
        <button
          className="closing-button"
          onClick={() => setIsOpen(false)}
        ></button>

        <ul className="link-list">
          <NavigationLink name="Strona Główna" location="/" />
          <NavigationLink name="Blog" location="/blog" />
          <NavigationLink name="Galeria" location="/galeria" />
          <NavigationLink name="Kontakt" location="/kontakt" />
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

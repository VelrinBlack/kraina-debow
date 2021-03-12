import StyledWrapper from './Header.styles';
import Logo from 'components/molecules/Logo/Logo';
import Navbar from 'components/molecules/Navbar/Navbar';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';

const Header = ({ backgroundImage, title, description }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1280);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledWrapper backgroundImage={backgroundImage}>
      <div className="top-bar">
        {isSmallScreen ? (
          <>
            <HamburgerMenu />
            <Logo />
          </>
        ) : (
          <>
            <Logo hasBackground />
            <Navbar />
          </>
        )}
      </div>

      <div className="text-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="gradient-line"></div>
    </StyledWrapper>
  );
};

Header.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;

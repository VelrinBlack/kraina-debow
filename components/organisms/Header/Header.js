import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { scrollToRef } from 'helpers';
import Logo from 'components/molecules/Logo/Logo';
import Navbar from 'components/molecules/Navbar/Navbar';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';
import StyledWrapper from './Header.styles';

const Header = ({
  backgroundImage,
  title,
  description,
  isHomePage = false,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollRef = useRef();

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1280);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledWrapper isHomePage={isHomePage}>
      <img src={backgroundImage} className="background" />
      <div className="top-bar">
        {isSmallScreen ? (
          <>
            <HamburgerMenu />
            {!isHomePage && <Logo />}
          </>
        ) : (
          <>
            {!isHomePage && <Logo />}
            <Navbar isHomePage={isHomePage} />
          </>
        )}
      </div>

      <div className={`text-container ${isHomePage && 'is-home-page'}`}>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>

      {isHomePage ? (
        <img
          src="/images/scroll.svg"
          alt="przewiń dalej"
          className="scroll-icon"
          onClick={() => scrollToRef(scrollRef)}
        />
      ) : (
        <div className="gradient-line"></div>
      )}

      <span ref={scrollRef} className="scroll-ref"></span>
    </StyledWrapper>
  );
};

Header.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isHomePage: PropTypes.bool,
};

export default Header;

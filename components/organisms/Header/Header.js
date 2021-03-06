import StyledWrapper from './Header.styles';
import Logo from 'components/molecules/Logo/Logo';
import Navbar from 'components/molecules/Navbar/Navbar';
import PropTypes from 'prop-types';

const Header = ({ backgroundImage, title, description }) => (
  <StyledWrapper backgroundImage={backgroundImage}>
    <div className="top-bar">
      <Logo hasBackground />
      <Navbar />
    </div>

    <div className="text-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>

    <div className="gradient-line"></div>
  </StyledWrapper>
);

Header.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;

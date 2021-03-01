import StyledWrapper from './Logo.styles';
import PropTypes from 'prop-types';

const Logo = ({ hasBackground = false }) => (
  <StyledWrapper hasBackground={hasBackground}>W krainie dębów</StyledWrapper>
);

Logo.propTypes = {
  hasBackground: PropTypes.bool,
};

export default Logo;

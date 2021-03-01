import StyledWrapper from './Logo.styles';
import PropTypes from 'prop-types';

const Logo = ({ hasBackground }) => (
  <StyledWrapper hasBackground={hasBackground}>W krainie dębów</StyledWrapper>
);

Logo.propTypes = {
  hasBackground: PropTypes.bool,
};

export default Logo;

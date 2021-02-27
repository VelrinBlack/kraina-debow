import StyledContainer from './Logo.styles';
import PropTypes from 'prop-types';

const Logo = ({ hasBackground }) => (
  <StyledContainer hasBackground={hasBackground}>
    W krainie dębów
  </StyledContainer>
);

Logo.propTypes = {
  hasBackground: PropTypes.bool,
};

export default Logo;

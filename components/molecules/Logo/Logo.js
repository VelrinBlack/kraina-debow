import StyledWrapper from './Logo.styles';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ hasBackground = false }) => (
  <Link href="/">
    <a>
      <StyledWrapper hasBackground={hasBackground}>
        W krainie dębów
      </StyledWrapper>
    </a>
  </Link>
);

Logo.propTypes = {
  hasBackground: PropTypes.bool,
};

export default Logo;

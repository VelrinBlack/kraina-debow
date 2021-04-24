import Link from 'next/link';
import PropTypes from 'prop-types';
import StyledWrapper from './Logo.styles';

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

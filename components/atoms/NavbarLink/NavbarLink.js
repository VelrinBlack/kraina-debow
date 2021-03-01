import StyledWrapper from './NavbarLink.styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLink = ({ name, location }) => {
  const router = useRouter();

  const isActive = router?.pathname === location;

  return (
    <StyledWrapper isActive={isActive}>
      <Link href={location}>
        <a>{name}</a>
      </Link>
    </StyledWrapper>
  );
};

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default NavbarLink;

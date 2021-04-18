import StyledWrapper from './NavigationLink.styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationLink = ({ name, location }) => {
  const router = useRouter();

  let isActive = router?.pathname === location;

  if (router?.pathname === '/blog/[id]' && location === '/blog') {
    isActive = true;
  }

  return (
    <StyledWrapper isActive={isActive}>
      <Link href={location}>
        <a>{name}</a>
      </Link>
    </StyledWrapper>
  );
};

NavigationLink.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default NavigationLink;

import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import StyledWrapper from './NavigationLink.styles';

const NavigationLink = ({ text, destination }) => {
  const router = useRouter();

  let isActive = router?.pathname === destination;

  if (router?.pathname === '/blog/[id]' && destination === '/blog') {
    isActive = true;
  }

  return (
    <StyledWrapper isActive={isActive}>
      <Link href={destination}>
        <a>{text}</a>
      </Link>
    </StyledWrapper>
  );
};

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default NavigationLink;

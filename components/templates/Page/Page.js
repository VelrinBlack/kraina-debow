import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import pageData from 'data/pages.json';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import StyledWrapper from './Page.styles';

const Page = ({ children, headerImage = null }) => {
  const router = useRouter();
  const headerProps = pageData[router.pathname];

  return (
    <StyledWrapper isHomePage={headerProps?.isHomePage}>
      <Header backgroundImage={headerImage} {...headerProps} />
      {children}
      <Footer />
    </StyledWrapper>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  headerImage: PropTypes.string,
};

export default Page;

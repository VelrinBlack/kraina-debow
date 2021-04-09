import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import pageData from 'data/pages.json';
import StyledWrapper from './Page.styles';
import { route } from 'next/dist/next-server/server/router';

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

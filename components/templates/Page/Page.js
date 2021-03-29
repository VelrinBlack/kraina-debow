import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import pageData from 'data/pages.json';
import { useRef } from 'react';

const Page = ({ children, headerImage = null }) => {
  const router = useRouter();
  const headerProps = pageData[router.pathname];
  const scrollRef = useRef();

  return (
    <>
      <Header
        backgroundImage={headerImage}
        {...headerProps}
        scrollRef={scrollRef}
      />
      <span ref={scrollRef}></span>
      {children}
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  headerImage: PropTypes.string,
};

export default Page;

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import pageData from 'data/pages.json';
import { useRef } from 'react';

const Page = ({ children }) => {
  const router = useRouter();
  const headerProps = pageData[router.pathname];
  const scrollRef = useRef();

  return (
    <>
      <Header {...headerProps} scrollRef={scrollRef} />
      <span ref={scrollRef}></span>
      {children}
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Page;

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import subpageData from 'data/subpages.json';
import { useRef } from 'react';

const Subpage = ({ children }) => {
  const router = useRouter();
  const headerProps = subpageData[router.pathname];
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

Subpage.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Subpage;

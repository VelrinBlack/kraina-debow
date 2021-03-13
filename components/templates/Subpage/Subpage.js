import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import subpageData from 'data/subpages.json';

const Subpage = ({ children }) => {
  const router = useRouter();
  const headerProps = subpageData[router.pathname];

  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer />
    </>
  );
};

Subpage.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Subpage;

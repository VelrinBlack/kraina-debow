import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;

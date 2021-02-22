import PropTypes from 'prop-types';
import GlobalStyle from 'styles/globalStyle';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;

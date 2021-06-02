import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';
import apolloClient from 'apolloClient';

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kraina Dębów</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;

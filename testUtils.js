import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';

const customRender = (node) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {node}
    </ThemeProvider>
  );
};

export * from '@testing-library/react';
export { customRender as render };

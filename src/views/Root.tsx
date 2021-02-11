import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import UsersList from '../components/organisms/UsersList/UsersList';

const Root: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;

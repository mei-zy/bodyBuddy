import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import SEO from '@components/layout/SEO';
import Nav from '@components/common/nav';
import { global } from '@styles/globals';
import theme from '@styles/theme';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

declare global {
  interface Window {
    kakao: any;
    naver: any;
  }
}

const StyledLayout = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  color: ${({ theme }) => theme.black};
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  height: calc(100vh - 70px);

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <SEO />
      <Global styles={global} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StyledLayout>
            <Content>{children}</Content>
          </StyledLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

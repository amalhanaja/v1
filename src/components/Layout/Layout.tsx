import * as React from 'react';
import { PageRendererProps } from 'gatsby';
import Main from './Main';
import GlobalStyle from '../../styles/GlobalStyle';
import Footer from '../Footer';

type LayoutProps = {
  path: string;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ path, children }) => {
  console.log(path);
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

import * as React from 'react';
import Main from './Main';
import Footer from '../Footer';
import Theme from '../Theme';

type LayoutProps = {
  path: string;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ path, children }) => (
  <Theme>
    <Main>{children}</Main>
    { path === '/' ? <Footer /> : null}
  </Theme>
);

export default Layout;

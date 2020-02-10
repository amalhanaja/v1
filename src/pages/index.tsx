import * as React from 'react';
import {
  Link, RouteUpdateArgs, PageRenderer, PageRendererProps,
} from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Section/Hero';

const IndexPage: React.FC<PageRendererProps> = ({ location }) => (
  <Layout path={location.pathname}>
    <Hero />
  </Layout>
);

export default IndexPage;

import * as React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { PageRendererProps } from 'gatsby';
import IconInstagram from '../components/Icons/Instagram';
import IconLinkedIn from '../components/Icons/LinkedIn';
import IconGithub from '../components/Icons/Github';
import IconLink from '../components/Icons/IconLink';
import IconTwitter from '../components/Icons/Twitter';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  justify-content: center;
`;

const AvatarImg = styled.img`
  border-radius: 100%;
  width: 100px;
  margin: 16px;
`;

const SocialMediaWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  a {
    margin: 8px;
  }
`;

const LinksPage: React.FC<PageRendererProps> = ({ location }) => (
  <Layout path={location.pathname}>
    <Wrapper>
      <Helmet title="Alfian Akmal Hanantio | Android Engineer">
        <html lang="en" />
      </Helmet>
      <AvatarImg
        alt="avatar"
        src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/80603429_1307448196122574_2992266679620206592_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=4wspcgtnlV0AX-ua28q&oh=e60b4412553a2dfb5642bcf854d064c9&oe=5EA801F3"
      />
      <h2 style={{ textAlign: 'center' }}>Alfian Akmal Hanantio</h2>
      <p>Android Engineer</p>
      <SocialMediaWrapper>
        <IconLink
          rel="nofollow noopener noreferrer"
          aria-label="Instagram"
          href="https://instagram.com/amal.codes/"
          target="_blank"
        >
          <IconInstagram />
        </IconLink>
        <IconLink
          rel="nofollow noopener noreferrer"
          aria-label="LinkedIn"
          href="https://linkedin.com/in/amalhanaja"
          target="_blank"
        >
          <IconLinkedIn />
        </IconLink>
        <IconLink
          rel="nofollow noopener noreferrer"
          aria-label="Github"
          href="https://github.com/amalhanaja"
          target="_blank"
        >
          <IconGithub />
        </IconLink>
        <IconLink
          rel="nofollow noopener noreferrer"
          aria-label="Github"
          href="https://twitter.com/amalhanaja"
          target="_blank"
        >
          <IconTwitter />
        </IconLink>
      </SocialMediaWrapper>
    </Wrapper>
  </Layout>
);

export default LinksPage;

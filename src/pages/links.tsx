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
import IconGooglePlay from '../components/Icons/GooglePlay';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }): string => theme.spaces[3]}
`;

const AvatarImg = styled.img`
  border-radius: 100%;
  width: 100px;
  margin-bottom: ${({ theme }): string => theme.spaces[2]}
`;

const SocialMediaWrapper = styled.div`
  margin-top: ${({ theme }): string => theme.spaces[3]};
  margin-bottom: ${({ theme }): string => theme.spaces[2]};
  display: flex;
  padding-left: ${({ theme }): string => theme.spaces[3]};
  padding-right: ${({ theme }): string => theme.spaces[3]};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: ${({ theme }): string => theme.spaces[1]};
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
        src="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s320x320/83526892_2999600360084921_5834968961472528384_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=105&_nc_ohc=o63lglIqVbwAX9vQq9f&oh=e09439d9e670df89a5647c0633f00b2f&oe=5EBEE206"
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
        <IconLink
          rel="nofollow noopener noreferrer"
          aria-label="Github"
          href="https://play.google.com/store/apps/developer?id=amal.codes"
          target="_blank"
        >
          <IconGooglePlay />
        </IconLink>
      </SocialMediaWrapper>
    </Wrapper>
  </Layout>
);

export default LinksPage;

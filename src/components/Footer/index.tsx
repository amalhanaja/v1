import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  box-shadow: 8px 8px 12px #cecece, -8px -8px 12px #ffffff;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

const GithubLink = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 12px;
`;

const GithubInfo = styled.div`
  margin-top: 6px;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <GithubLink href="sad">
      <div>Made with Love by Alfian Akmal Hanantio</div>
      <GithubInfo>234 star 50 fork</GithubInfo>
    </GithubLink>
  </FooterWrapper>
);

export default Footer;

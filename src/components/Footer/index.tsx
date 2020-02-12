import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  background: ${(props): string => props.theme.colors.primary};
  box-shadow: ${(props): string => `0px -8px 12px ${props.theme.colors.surfaceDark}`};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

const GithubLink = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: ${(props): string => props.theme.colors.surface};
  font-size: ${(props): string => props.theme.fontSizes.xs};
  font-weight: ${(props): number => props.theme.fontWeights.bold};
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <GithubLink
      rel="nofollow noopener noreferrer"
      aria-label="Project Code"
      href="https://github.com/amalhanaja/v1"
      target="_blank"
    >
      <div>Made with Love by Alfian Akmal Hanantio</div>
    </GithubLink>
  </FooterWrapper>
);

export default Footer;

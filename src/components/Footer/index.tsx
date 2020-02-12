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
  color: #ffc5cc;
  font-size: ${(props): string => props.theme.fontSizes.xs};
  font-weight: ${(props): number => props.theme.fontWeights.bold};
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    color: ${(props): string => props.theme.colors.surfaceLight};
  }
  &:focus {
    transform: scale(0.95);
    color: ${(props): string => props.theme.colors.surfaceLight};
  }
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <div style={{ textAlign: 'center' }}>
      <GithubLink
        rel="nofollow noopener noreferrer"
        aria-label="Project Code"
        href="https://github.com/amalhanaja/v1"
        target="_blank"
      >
        <div>Made with Love by Alfian Akmal Hanantio</div>
      </GithubLink>
    </div>
  </FooterWrapper>
);

export default Footer;

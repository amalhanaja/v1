import * as React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, useStaticQuery } from 'gatsby';

const Overline = styled.h1`
  margin: 0 0 16px 0;
  font-size: 12px;
`;

const Title = styled.h2`
  margin: 0 0 32px 0;
  font-size: 40px;
  line-height: 1.08;
`;

const Description = styled.div`
  line-height: 1.35;
  font-size: 16px;
  letter-spacing: 0.2px;
  margin-bottom: 48px;
`;

const EmailLink = styled.a`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.3px;
  border-radius: 16px;
  background: ${(props): string => props.theme.colors.surface};
  box-shadow: ${(props): string => `8px 8px 8px ${props.theme.colors.surfaceDark}, -8px -8px 8px ${props.theme.colors.surfaceLight}`};
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  display: inline-block;
  color: ${(props): string => props.theme.colors.primary};
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.95);
    box-shadow: ${(props): string => `3x 3px 5px ${props.theme.colors.surfaceDark}, -3px -3px 5px ${props.theme.colors.surfaceLight}`};
  }
`;

const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const query = graphql`
  query {
    profile: allMdx(filter: { fileAbsolutePath: { regex: "/profile/" } }) {
      edges {
        node {
          frontmatter {
            name
            email
          }
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            greetings
          }
          body
        }
      }
    }
  }
`;

const Hero: React.FC = () => {
  const data = useStaticQuery(query);
  const heroData = data.hero.edges[0].node;
  const profileData = data.profile.edges[0].node;
  return (
    <SectionWrapper>
      <Overline>
        {heroData.frontmatter.greetings}
      </Overline>
      <Title>{profileData.frontmatter.name}</Title>
      <Description>
        <MDXRenderer>{heroData.body}</MDXRenderer>
      </Description>
      <div>
        <EmailLink href={`mailto:${profileData.frontmatter.email}`}>Get in Touch</EmailLink>
      </div>
    </SectionWrapper>
  );
};

export default Hero;

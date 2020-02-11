import * as React from 'react';
import styled from 'styled-components';

const Overline = styled.h1`
  margin: 0 0 16px 0;
  font-size: 12px;
`;

const Title = styled.h2`
  margin: 0 0 32px 0;
  font-size: 40px;
  line-height: 1.08;
`;

const Description = styled.p`
  line-height: 1.35;
  font-size: 16px;
  letter-spacing: 0.2px;
  margin-bottom: 48px;
`;

const EmailLink = styled.a`
  font-size: 18px;
  letter-spacing: 0.3px;
  border-radius: 16px;
  background: #f4f4f4;
  box-shadow: 8px 8px 16px #cfcfcf, -8px -8px 16px #ffffff;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  display: inline-block;
  &:hover,
  &:focus {
    fill: #19a4e1;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.97);
    box-shadow: inset 3px 3px 7px #cfcfcf, inset -3px -3px 7px #ffffff;
  }
`;

const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Hero: React.FC = () => (
  <SectionWrapper>
    <Overline>
      <span role="img" aria-label="Hi">👋</span>, my name is
    </Overline>
    <Title>Alfian Akmal Hanantio.</Title>
    <Description>
      Also known as Amal, a 21-years-old self-taught Software Engineer based in
      Jakarta,{' '}
      <span role="img" aria-label="indonesia">
        🇮🇩
      </span>
      .
    </Description>
    <div>
      <EmailLink href="">Get in Touch</EmailLink>
    </div>
  </SectionWrapper>
);

export default Hero;

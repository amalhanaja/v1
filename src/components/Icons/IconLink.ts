import styled from 'styled-components';

const IconLink = styled.a`
  cursor: pointer;
  padding: 12px;
  fill: ${(props): string => props.theme.colors.text};
  border-radius: 50%;
  background: ${(props): string => `linear-gradient(145deg, ${props.theme.colors.surfaceLight}, ${props.theme.colors.surfaceDark})`};
  box-shadow: ${(props): string => `4px 4px 8px ${props.theme.colors.surfaceDark}, -4px -4px 8px ${props.theme.colors.surfaceLight}`};
  display: flex;
  transition: all 0.2s ease-out;
  &:hover,
  &:focus {
    fill: ${({ theme }): string => theme.colors.primary};
  }
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    background: ${({ theme }): string => `linear-gradient(145deg, ${theme.colors.surfaceDark}, ${theme.colors.surfaceLight})`};
    transform: scale(0.95);
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export default IconLink;

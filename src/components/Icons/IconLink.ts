import styled from 'styled-components';

const IconLink = styled.a`
  cursor: pointer;
  padding: 12px;
  fill: #333333;
  border-radius: 50%;
  background: linear-gradient(145deg, #ffffff, #dcdcdc);
  box-shadow: 4px 4px 8px #cfcfcf, -4px -4px 8px #ffffff;
  display: flex;
  transition: all 0.2s ease-out;
  &:hover,
  &:focus {
    fill: #19a4e1;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    background: linear-gradient(145deg, #dcdcdc, #ffffff);
    transform: scale(0.95);
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export default IconLink;

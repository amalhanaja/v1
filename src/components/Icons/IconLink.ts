import styled from "styled-components";

const IconLink = styled.a`
  cursor: pointer;
  padding: 12px;
  fill: #333333;
  &:hover,
  &:focus {
    fill: #19A4E1;
    border-bottom: 2px solid #19A4E1;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`

export default IconLink;
import styled from "styled-components";

const IconLink = styled.a`
  cursor: pointer;
  padding: 12px;
  fill: #333333;
  &:hover,
  &:focus {
    fill: #3BB0BA;
    border-bottom: 2px solid #3BB0BA;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`

export default IconLink;
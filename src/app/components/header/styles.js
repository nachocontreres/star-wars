import styled from "styled-components";

export const StyledPageHeader = styled.h1`
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

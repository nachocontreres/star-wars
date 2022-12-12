import styled, { keyframes } from "styled-components";

export const StyledCharactersList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 70px;
  margin: auto;
  overflow-y: auto;

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    padding-top: 110px;
  }
`;

const spinAnimation = keyframes`
    0% { transform: rotate(0deg);  }
    100% { transform: rotate(360deg); }

`;

export const Loader = styled.img`
  filter: invert(100%);
  background-repeat: no-repeat;
  width: 90px;
  height: 80px;
  animation: ${spinAnimation} 1.5s linear infinite;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 10000;
`;

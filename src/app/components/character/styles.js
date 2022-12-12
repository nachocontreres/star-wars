import styled, { keyframes } from "styled-components";

export const CharacterContainer = styled.div`
  height: 100px;
  width: calc(100% - 38px);
  margin: auto;
  border-bottom: 1px solid #463b5e;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    width: 70%;
    height: 120px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
    height: 110px;
  }
`;
export const CharacterTopRow = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    height: 32px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    height: 28px;
  }
`;

export const CharacterName = styled.h5`
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const FavoriteButton = styled.img`
  height: 11.5px;
  width: 12.5px;
  background-repeat: no-repeat;
  padding-bottom: 5px;
  @media screen and (min-width: 1024px) {
    width: 22px;
    height: 21px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 18px;
    height: 17px;
  }
`;

export const CharacterDescription = styled.div`
  margin-top: 8px;
  text-align: left;
  color: #ffffffb3;
  font-size: 13px;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const LocationContainer = styled.div`
  background-color: #2f2b36;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  gap: 4px;
  border-radius: 6px;
  width: fit-content;
  height: 24px;
  margin-top: 8px;
  @media screen and (min-width: 1024px) {
    padding: 6px 18px;
    margin-top: 12px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    padding: 5px 14px;
    margin-top: 10px;
  }
`;

export const HomeWorldName = styled.p`
  font-family: Urbanist;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.5px;
  text-align: left;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const LocationIcon = styled.img`
  height: 12.67px;
  width: 10.67px;
  background-repeat: no-repeat;
  color: white;
`;

const spinAnimation = keyframes`
    0% { transform: rotate(0deg);  }
    100% { transform: rotate(360deg); }

`;
export const LoadingDots = styled.img`
  height: 12;
  width: 12px;
  background-repeat: no-repeat;
  animation: ${spinAnimation} 1.5s linear infinite;
  filter: invert(100%);
`;

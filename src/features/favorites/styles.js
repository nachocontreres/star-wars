import styled, { keyframes } from "styled-components";

export const StyledFavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 70px;
  margin: auto;
  overflow-y: auto;

  /* @media screen and (max-width: 1024px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 47px;
  } */
`;
export const StyledSearch = styled.div`
  box-sizing: border-box;
  width: calc(100% - 36px);
  height: 50px;
  border: 1px solid white;
  border-radius: 14px;
  margin: auto;
  margin-top: 12px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StyledInput = styled.input`
  width: 90%;
  cursor: pointer;
  height: 80%;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  background-color: transparent;
  color: white;
`;
export const StyledSearchTitle = styled.h5`
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  padding-left: 20px;
`;

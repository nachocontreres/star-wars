import styled from "styled-components";

export const StyledFavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 70px;
  margin: auto;
  overflow-y: auto;
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding-top: 130px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    padding-top: 110px;
  }
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
  padding: 3px 12px;
  @media screen and (min-width: 1024px) {
    width: 70%;
    padding: 4px 15px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  cursor: pointer;
  height: 80%;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  background-color: transparent;
  color: white;
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const StyledSearchTitle = styled.h5`
  width: calc(100% - 40px);
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    width: 70%;
    padding-left: 0;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
    font-size: 16px;
  }
`;

import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--color--primary);
  transform: ${({ open }) =>
    open
      ? "translateX(0%) translateZ(0px)"
      : "translateX(100%) translateZ(0px)"};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 60px;
  padding-top: 60px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  padding-left: 150px;

  @media screen and (max-width: 1024px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 47px;
  }
`;

export const StyledLink = styled.div`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  height: 30px;
  font-family: Urbanist;
  font-size: 22px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  cursor: pointer;
`;

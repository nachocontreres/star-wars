import styled from "styled-components";

export const StyledBurger = styled.button`
  position: relative;
  left: 25px;
  top: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  width: 20px;
  height: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    width: 20px;
    height: 0px;
    border: 1px solid white;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

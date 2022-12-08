import React from "react";
import { bool } from "prop-types";
import { StyledMenu, StyledLink } from "./styles";
import { useNavigate } from "react-router-dom";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  let navigate = useNavigate();

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <StyledLink
        className="link"
        onClick={() => {
          props.setOpen(false);
          props.setCurrentTitle("Characters");
          navigate("/");
        }}
        tabIndex={tabIndex}
      >
        Characters
      </StyledLink>
      <StyledLink
        className="link"
        onClick={() => {
          props.setOpen(false);
          props.setCurrentTitle("Favorites");
          navigate("/favorites");
        }}
        tabIndex={tabIndex}
      >
        Favorites
      </StyledLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

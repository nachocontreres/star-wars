import React, { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { StyledPageHeader } from "./styles";

const Header = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const pageTitle = window.location.href.includes("favorite")
    ? "Favorites"
    : "Characters";
  return (
    <div
      ref={node}
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <StyledPageHeader>{pageTitle}</StyledPageHeader>
      <Burger open={open} setOpen={setOpen} aria-controls="menu" />
      <Menu open={open} setOpen={setOpen} id="menu" />
    </div>
  );
};

export default Header;

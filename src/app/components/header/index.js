import React, { useRef, useState } from "react";
import Burger from "../../components/Burger";
import Menu from "../../components/Menu";
import { StyledPageHeader } from "./styles";

const Header = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Characters");
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
      <StyledPageHeader>{currentTitle}</StyledPageHeader>
      <Burger open={open} setOpen={setOpen} aria-controls="menu" />
      <Menu
        setCurrentTitle={setCurrentTitle}
        open={open}
        setOpen={setOpen}
        id="menu"
      />
    </div>
  );
};

export default Header;

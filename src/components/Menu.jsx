import { useState } from "react";
import styled from "styled-components";
import Form from "./MenuItems/Form";
import Pinned from "./MenuItems/Pinned";
import Recomended from "./MenuItems/Recomended";
import Footer from "./MenuItems/Footer";

const Menu = ({ power, onPower }) => {
  const MenuTheme = styled.section`
    width: 45vw;
    position: absolute;
    content: "";
    left: 27vw;
    height: 85vh;
    transition: all 0.4s ease-in-out;
    ${power === true ? "bottom: 10vh" : "bottom: 200vh"}
  `;

  const Box = styled.div`
    padding: 0 1.5rem;
    backdrop-filter: blur(0.5rem);
    background-color: rgba(211, 233, 238, 0.5);
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  `;

  return (
    <MenuTheme>
      <Box>
        <Form />
        <Pinned />
        <Recomended />
      </Box>
      <Footer onPower={onPower} />
    </MenuTheme>
  );
};

export default Menu;

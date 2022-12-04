import React from "react";
import styled from "styled-components";
import Power from "./../../data/Images/powerButton.svg";

const Footer = ({ onPower }) => {
  const Footer = styled.footer`
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  `;

  return (
    <Footer>
      <img src={Power} alt="" onClick={onPower} />
    </Footer>
  );
};

export default Footer;

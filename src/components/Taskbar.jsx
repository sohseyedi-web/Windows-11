import React from "react";
import styled from "styled-components";
import { IconMenuAPI } from "../data/data";
import StartIcon from "../data/Images/startIcon.png";

const Taskbar = ({ onPower }) => {
  const Wrap = styled.section`
    width: 100%;
    bottom: 0;
    position: absolute;
    content: "";
    backdrop-filter: blur(0.5rem);
    background-color: rgba(211, 233, 238, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      padding: 0.55rem;
      cursor: pointer;
      margin: 0 0.5rem;

      img {
        width: 1.75rem;
        heigth: 1.75rem;
        object-fit: contain;
      }
    }
  `;

  return (
    <Wrap>
      <button onClick={onPower}>
        <img src={StartIcon} alt="" />
      </button>
      {IconMenuAPI &&
        IconMenuAPI.map((value, index) => (
          <button key={index}>
            <img src={value.mIcon} alt="" />
          </button>
        ))}
    </Wrap>
  );
};

export default Taskbar;

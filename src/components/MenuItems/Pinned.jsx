import React from "react";
import styled from "styled-components";
import { PinAPI } from "./../../data/data";

const Pinned = () => {
  const Flex = styled.div`
    padding: .5rem 0;
  `;
  const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: #252525;
      font-weight: 500;
    }

    button {
      cursor: pointer;
      padding: 0.5rem 0.7rem;
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(0.1rem);
      border-radius: 0.3rem;
      border: none;
      box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
    }
  `;
  const Application = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 5.5rem;

    img {
      width: 2.3rem;
      height: 2.3rem;
      object-fit: contain;
    }
  `;

  return (
    <Flex>
      <Header>
        <h4>Pinned</h4>
        <button>
          All Apps <span>&#8250;</span>
        </button>
      </Header>
      <Application>
        {PinAPI &&
          PinAPI.map((pin, index) => (
            <Items key={index}>
              <img src={pin.pIcon} alt="" />
              <p>{pin.text}</p>
            </Items>
          ))}
      </Application>
    </Flex>
  );
};

export default Pinned;

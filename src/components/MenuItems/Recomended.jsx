import React from "react";
import styled from "styled-components";
import { RecAPI } from "./../../data/data";

const Recomended = () => {
  const Flex = styled.div`
    padding: 1rem 0;
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
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  const Items = styled.div`
    display: flex;
    align-items: center;
    width:45%;
    margin: 0.5rem 0;
    heigth: 3rem;

    img {
      width: 2.3rem;
      height: 2.3rem;
      object-fit: contain;
    }
    p {
      font-size: 0.9rem;
      font-weight: 500;
      margin-left: 1rem;
    }
  `;

  return (
    <Flex>
      <Header>
        <h4>Recomended</h4>
        <button>
          All Apps <span>&#8250;</span>
        </button>
      </Header>
      <Application>
        {RecAPI &&
          RecAPI.map((pin, index) => (
            <Items key={index}>
              <img src={pin.rIcon} alt="" />
              <p>{pin.text}</p>
            </Items>
          ))}
      </Application>
    </Flex>
  );
};

export default Recomended;

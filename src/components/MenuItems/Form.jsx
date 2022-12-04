import React from "react";
import styled from "styled-components";
const Form = () => {
  const FormInput = styled.form`
    padding: 0.5rem 0;
    width: 100%;

    input {
      width: 100%;
      outline: none;
      background-color: #fff;
      border-radius: 0.3rem;
      border: none;
      margin: 0 auto;
      font-size: 1.1rem;
      color: #252525;
      padding: 0.65rem 0.5rem;
    }
  `;

  return (
    <FormInput>
      <input type="text" placeholder="Search" />
    </FormInput>
  );
};

export default Form;

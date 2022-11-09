import React from "react";
import styled from "styled-components";

const RadioButtonWrapper = styled.div`
  .border-part {
    border: 1px solid #000000;
    border-radius: 33px;
    width: fit-content;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
  .radio-input {
    height: 40px;
    width: 25px;
    margin-right: 15px;
  }
  .label {
    padding-top: 5px;
  }
`;

const RadioButton = ({ name, key }) => {
  return (
    <RadioButtonWrapper>
      <div className="border-part">
        <input
          type="radio"
          id={key}
          name="radio1"
          value="GFG"
          className="radio-input"
        />
        <label for={key} className="label">
          {name}
        </label>
      </div>
    </RadioButtonWrapper>
  );
};

export default RadioButton;

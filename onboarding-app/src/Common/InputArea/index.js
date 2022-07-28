import React from "react";
import styled from "styled-components";

const InputText = styled.input`
  position: relative;
  top: -25px;
  border: 1px solid #bec4d3;
  font-family: "Inter";
  padding-left: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 391px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const InputArea = (props) => {
  const { placeholder, header, setQuery, text, value, onHandleChange } = props;
  return (
    <div>
      <InputText
        type="text"
        placeholder={placeholder}
        value={value}
        name={text}
        onChange={onHandleChange}
      />
    </div>
  );
};

export default InputArea;

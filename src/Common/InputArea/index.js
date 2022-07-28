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

const InputTextCase = styled.input`
  position: relative;
  top: -25px;
  border: 1px solid #bec4d3;
  font-family: "Inter";
  padding-left: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 265px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const InputFixed = styled.input`
  position: relative;
  top: -25px;
  border: 1px solid #bec4d3;
  font-family: "Inter";
  padding-left: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 111px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }
`;
const InputArea = (props) => {
  const { placeholder, url, text, value, onHandleChange } = props;
  return url === "url" ? (
    <div style={{ display: "flex" }}>
      <InputFixed type="text" placeholder={"www.eden.com/"} value={""} />

      <InputTextCase
        type="text"
        placeholder={"Example"}
        value={value}
        name={text}
        onChange={onHandleChange}
      />
    </div>
  ) : (
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

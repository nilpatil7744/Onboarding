import React from "react";
import { IoLogoBuffer } from "react-icons/io";

const LogoUI = () => {
  return (
    <div
      style={{
        display: "flex",
        // border: "1px solid red",
        justifyContent: "center",
        marginRight: "21%",
      }}
    >
      <IoLogoBuffer
        size={30}
        style={{
          height: "30px",
          width: "30px",
          marginTop: "17px",
          marginRight: "3%",
          color: "#6A5EE5",
        }}
      />

      <h2>Eden</h2>
    </div>
  );
};

export default LogoUI;

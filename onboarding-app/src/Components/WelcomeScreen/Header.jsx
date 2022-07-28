import React from "react";

const Header = (props) => {
  const { textHead, subText } = props;
  return (
    <>
      <h1>{textHead}</h1>
      <span style={{ marginLeft: "16%", color: "#9295A5" }}>{subText}</span>
    </>
  );
};

export default Header;

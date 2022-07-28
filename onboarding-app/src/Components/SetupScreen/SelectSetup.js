import React from "react";
import { FaUserAlt } from "react-icons/fa";
const SelectSetup = (props) => {
  const { text, subText, handleSelected, id, selected } = props;
  return (
    <div
      style={{
        border: selected === id ? "2px solid #6A5EE5" : "1px solid gray",
        width: "30%",
        paddingLeft: "20px",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "40px",
      }}
      onClick={() => handleSelected(id)}
    >
      <FaUserAlt />
      <h4>{text}</h4>
      <span
        style={{
          width: "79%",
          display: "flex",
        }}
      >
        {subText}
      </span>
    </div>
  );
};

export default SelectSetup;

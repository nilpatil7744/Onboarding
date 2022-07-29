import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
const SelectSetup = (props) => {
  const { text, subText, handleSelected, id, selected, icon } = props;
  return (
    <div
      style={{
        border: selected === id ? "2px solid #6A5EE5" : "1px solid #e8ecf3",
        width: "33%",
        paddingLeft: "20px",
        padding: "16px",
        borderRadius: "10px",
        marginTop: "40px",
      }}
      onClick={() => handleSelected(id)}
    >
      {icon === "BsFillPeopleFill" ? (
        <BsFillPeopleFill
          size={20}
          color={selected === id ? "#6A5EE5" : "black"}
        />
      ) : (
        <FaUserAlt color={selected === id ? "#6A5EE5" : "black"} />
      )}
      <h4>{text}</h4>
      <span
        style={{
          width: "92%",
          display: "flex",
          color: "gray",
          fontWeight: 448,
        }}
      >
        {subText}
      </span>
    </div>
  );
};

export default SelectSetup;

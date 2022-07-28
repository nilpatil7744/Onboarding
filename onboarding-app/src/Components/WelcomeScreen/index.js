import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Device, Strings } from "../../Constant";
import InputArea from "../../Common/InputArea";
import AppLogo from "../../Assets/AppLogo.png";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import LogoUI from "../../Common/Logo";
import ProgressBar from "../ProgressBar";
import ProgressBarUi from "../ProgressBar";

const Main = styled.div`
  width: 60%;
  height: 400;
  margin-top: 5%;
  margin-left: 20%;
  background-color: white;

  @media ${Device.mobileS} {
    background-color: white;
  }
  @media ${Device.mobileM} {
    background-color: blue;
  }
  @media ${Device.mobileL} {
    background-color: pink;
  }
  @media ${Device.laptop} {
    background-color: purple;
  }
  @media ${Device.laptopL} {
    background-color: white;
  }
  @media ${Device.desktop} {
    background-color: red;
  }
`;

const WelcomeScreen = (props) => {
  let valueName = loadData("name");
  let valueDisplayName = loadData("Display-name");
  let info = {
    name: valueName ?? "",
    displayName: valueDisplayName ?? "",
  };

  const [query, setQuery] = useState(info);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (query.name === "") {
      alert("Please add a valid name");
    } else if (query.displayName === "") {
      alert("Please add a valid displayName");
    } else if (query.name && query.displayName) {
      saveData("name", query.name);
      saveData("Display-name", query.displayName);
    }
  };

  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        width: "34rem",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <LogoUI />

      <ProgressBarUi phase={15} />

      <br />
      <Header textHead={Strings.WELCOME} subText={Strings.YOU_CAN_CHANGE} />
      <br />

      <h5 style={{ color: "#2F4F4F", padding: 5, paddingBottom: "10px" }}>
        Full Name
      </h5>
      <InputArea
        placeholder="Steve jobs"
        header={"Full Name"}
        setQuery={setQuery}
        text={"name"}
        value={query.name}
        onHandleChange={onHandleChange}
      />

      <div style={{ marginTop: "-6%" }}>
        <h5 style={{ color: "#2F4F4F", padding: 5, paddingBottom: "10px" }}>
          Display Name
        </h5>
        <InputArea
          placeholder="Steve"
          header={"Display Name"}
          setQuery={setQuery}
          text={"displayName"}
          value={query.displayName}
          onHandleChange={onHandleChange}
        />
      </div>

      {query.name && query.displayName ? (
        <Link
          style={{ outline: "none", textDecoration: "none" }}
          to="/workspace"
        >
          <div
            style={{
              background: "#6A5EE5",
              paddingLeft: "19px",
              paddingTop: "12px",
              paddingBottom: "12px",
              width: "391px",
              borderRadius: "5px",
              color: "white",
              textAlign: "center",
              outline: "none",
              textDecoration: "none",
            }}
            onClick={() => handleSubmit()}
          >
            Create Workspace
          </div>
        </Link>
      ) : (
        <>
          {" "}
          <div
            style={{
              background: "#6A5EE5",
              paddingLeft: "19px",
              paddingTop: "12px",
              paddingBottom: "12px",
              width: "391px",
              borderRadius: "5px",
              color: "white",
              textAlign: "center",
              outline: "none",
              textDecoration: "none",
            }}
            onClick={() => handleSubmit()}
          >
            Create Workspace
          </div>
        </>
      )}
    </div>
  );
};

export default WelcomeScreen;

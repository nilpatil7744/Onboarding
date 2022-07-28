import React, { useState } from "react";
import Header from "../WelcomeScreen/Header";
import styled from "styled-components";
import { Device, Strings } from "../../Constant";
import InputArea from "../../Common/InputArea";
import AppLogo from "../../Assets/AppLogo.png";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";
const WorkspaceDetails = (props) => {
  let valueName = loadData("workspaceName");
  let valueDisplayName = loadData("workspaceUrl");
  let info = {
    workspaceName: valueName ?? "",
    workspaceUrl: valueDisplayName ?? "",
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
    if (query.workspaceName === "") {
      alert("Please add a valid WorkspaceName");
    } else if (query.workspaceName) {
      saveData("workspaceName", query.workspaceName);
      saveData("workspaceUrl", query.workspaceUrl);
    }
  };
  return (
    <div
      style={{
        textAlign: "left",
        // border: "1px solid red",
        display: "flex",
        width: "34rem",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <LogoUI />

      <ProgressBarUi phase={50} />
      <Header
        textHead={Strings.LETS_SETUP}
        subText={Strings.CHANGE_WORKSPACE}
      />
      <h5 style={{ color: "#2F4F4F", padding: 7 }}>Workspace Name</h5>
      <InputArea
        placeholder="Eden"
        header={"Full Name"}
        setQuery={setQuery}
        text={"workspaceName"}
        value={query.workspaceName}
        onHandleChange={onHandleChange}
      />
      <h5 style={{ color: "#2F4F4F", padding: 7 }}>Workspace URL</h5>
      <InputArea
        placeholder="Steve"
        header={"Display Name"}
        setQuery={setQuery}
        text={"workspaceUrl"}
        value={query.displayName}
        onHandleChange={onHandleChange}
      />

      {query.workspaceName ? (
        <Link style={{ outline: "none", textDecoration: "none" }} to="/setup">
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

export default WorkspaceDetails;

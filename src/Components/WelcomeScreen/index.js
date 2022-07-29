import React, { useState } from "react";
import Header from "./Header";
import { Strings } from "../../Constant";
import InputArea from "../../Common/InputArea";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";
import { Main, WorkspaceDiv } from "../../Styles";

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
    <Main>
      <div style={{ marginRight: "8%" }}>
        <LogoUI />
      </div>
      <div style={{ marginRight: "10%" }}>
        <ProgressBarUi phase={15} />
      </div>

      <br />
      <Header textHead={Strings.WELCOME} subText={Strings.YOU_CAN_CHANGE} />
      <br />

      <h5
        style={{
          color: "#2F4F4F",
          padding: 5,
          paddingBottom: "10px",
        }}
      >
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
          <WorkspaceDiv onClick={() => handleSubmit()}>
            {Strings.CREATE_WORKSPACE}
          </WorkspaceDiv>
        </Link>
      ) : (
        <>
          <WorkspaceDiv onClick={() => handleSubmit()}>
            {Strings.CREATE_WORKSPACE}
          </WorkspaceDiv>
        </>
      )}
    </Main>
  );
};

export default WelcomeScreen;

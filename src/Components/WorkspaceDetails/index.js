import React, { useState } from "react";
import Header from "../WelcomeScreen/Header";
import { Strings } from "../../Constant";
import InputArea from "../../Common/InputArea";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";
import { WorkspaceDiv, WorkspaceMain } from "../../Styles";

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
    <WorkspaceMain>
      <div style={{ marginLeft: "13%" }}>
        <LogoUI />
      </div>

      <div style={{ marginLeft: "13%" }}>
        <ProgressBarUi phase={50} />
      </div>
      <br />
      <Header
        textHead={Strings.LETS_SETUP}
        subText={Strings.CHANGE_WORKSPACE}
      />
      <br />
      <div style={{ marginLeft: "11%" }}>
        <h5 style={{ color: "#2F4F4F", padding: 7 }}>Workspace Name</h5>
        <InputArea
          placeholder="Eden"
          header={"Full Name"}
          setQuery={setQuery}
          text={"workspaceName"}
          value={query.workspaceName}
          onHandleChange={onHandleChange}
        />
        <h5 style={{ color: "#2F4F4F", padding: 7 }}>
          Workspace URL{" "}
          <span style={{ color: "gray", fontWeight: "lighter" }}>
            (optional)
          </span>
        </h5>
        <InputArea
          placeholder="Steve"
          header={"Display Name"}
          setQuery={setQuery}
          text={"workspaceUrl"}
          value={query.workspaceUrl}
          onHandleChange={onHandleChange}
          url={"url"}
        />
        {query.workspaceName ? (
          <Link style={{ outline: "none", textDecoration: "none" }} to="/setup">
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
      </div>
    </WorkspaceMain>
  );
};

export default WorkspaceDetails;

import React from "react";
import { Strings } from "../../Constant";
import { Link } from "react-router-dom";
import { loadData } from "../../utils/LocalStorage";
import { AiFillCheckCircle } from "react-icons/ai";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";
import { LaunchDiv, Main } from "../../Styles";

const LaunchScreen = (props) => {
  const userName = loadData("workspaceName");
  return (
    <Main>
      <div style={{ marginLeft: "3%" }}>
        <LogoUI />
      </div>
      <div style={{ marginLeft: "6%" }}>
        <ProgressBarUi phase={120} />
      </div>
      <br /> <br /> <br />
      <AiFillCheckCircle
        size={79}
        style={{
          color: "#6A5EE5",
          alignSelf: "center",
          marginRight: "16%",
        }}
      />
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ marginLeft: "13%" }}>Congratulations, {userName}! </h1>
        <span style={{}}>{Strings.COMPLETED_ONBOARD}</span>
      </div>
      <Link
        style={{ outline: "none", textDecoration: "none", marginLeft: "6%" }}
      >
        <LaunchDiv onClick={() => {}}>Launch Eden</LaunchDiv>
      </Link>
    </Main>
  );
};

export default LaunchScreen;

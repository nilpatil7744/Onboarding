import React, { useState } from "react";
import Header from "../WelcomeScreen/Header";
import { Strings } from "../../Constant";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import SelectSetup from "./SelectSetup";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";

const SetupScreen = (props) => {
  let selectedSetup = loadData("setup");
  const [selected, setSelected] = useState(selectedSetup ?? 0);

  const handleSelected = (id) => {
    setSelected(id);
  };

  const handleAdd = () => {
    if (selected === 1 || selected === 2) {
      saveData("setup", selected);
    } else {
      alert("Please select a setup");
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
      <ProgressBarUi phase={82} />
      <br />
      <Header
        textHead={Strings.HOW_ARE_YOU}
        subText={Strings.WELL_STREAM_LINE}
      />

      <div
        style={{
          gap: "25px",
          display: "flex",
          flexDirection: "row",
          padding: "13px",
          marginLeft: "7%",
        }}
      >
        <SelectSetup
          text={Strings.FOR_MYSELF}
          subText={Strings.WRITE_BETTER_THINK}
          handleSelected={handleSelected}
          id={1}
          selected={selected}
          icon={"FaUserAlt"}
        />

        <SelectSetup
          handleSelected={handleSelected}
          text={Strings.WITH_MY}
          subText={Strings.WIKIS_TEAMS}
          id={2}
          selected={selected}
          icon={"BsFillPeopleFill"}
        />
      </div>
      {true ? (
        <Link style={{ outline: "none", textDecoration: "none" }} to="/launch">
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
              marginLeft: "4%",
              marginTop: "10px",
            }}
            onClick={() => handleAdd()}
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
              marginLeft: "4%",
              marginTop: "10px",
            }}
            onClick={() => handleAdd()}
          >
            Create Workspace
          </div>
        </>
      )}
    </div>
  );
};

export default SetupScreen;

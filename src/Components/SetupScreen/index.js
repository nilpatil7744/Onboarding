import React, { useState } from "react";
import Header from "../WelcomeScreen/Header";
import { Strings } from "../../Constant";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import SelectSetup from "./SelectSetup";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";
import { SetupDiv, SetupSubDiv, SetupWorkspaceDiv } from "../../Styles";

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
    <SetupDiv>
      <div style={{ marginLeft: "11%" }}>
        <LogoUI />
      </div>
      <div style={{ marginLeft: "10%" }}>
        <ProgressBarUi phase={82} />
      </div>

      <br />
      <Header
        textHead={Strings.HOW_ARE_YOU}
        subText={Strings.WELL_STREAM_LINE}
      />

      <div style={{ marginLeft: "5.5%" }}>
        <SetupSubDiv>
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
        </SetupSubDiv>
        {selected === 1 || selected === 2 ? (
          <Link
            style={{ outline: "none", textDecoration: "none" }}
            to="/launch"
          >
            <SetupWorkspaceDiv onClick={() => handleAdd()}>
              Create Workspace
            </SetupWorkspaceDiv>
          </Link>
        ) : (
          <>
            <SetupWorkspaceDiv onClick={() => handleAdd()}>
              Create Workspace
            </SetupWorkspaceDiv>
          </>
        )}
      </div>
    </SetupDiv>
  );
};

export default SetupScreen;

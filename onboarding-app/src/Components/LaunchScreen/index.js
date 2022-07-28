import React, { useState } from "react";
import Header from "../WelcomeScreen/Header";
import { Strings } from "../../Constant";
import AppLogo from "../../Assets/AppLogo.png";
import { Link } from "react-router-dom";
import { loadData, saveData } from "../../utils/LocalStorage";
import SelectSetup from "../SetupScreen/SelectSetup";
import { AiFillCheckCircle } from "react-icons/ai";
import LogoUI from "../../Common/Logo";
import ProgressBarUi from "../ProgressBar";

const LaunchScreen = (props) => {
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

      <ProgressBarUi phase={120} />
      <AiFillCheckCircle
        size={59}
        style={{
          color: "#6A5EE5",
          alignSelf: "center",
          marginRight: "23%",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ marginLeft: "9%" }}>{Strings.CONGRATULATIONS}</h1>
        <span style={{}}>{Strings.COMPLETED_ONBOARD}</span>
      </div>

      {true ? (
        <Link style={{ outline: "none", textDecoration: "none" }}>
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
              marginTop: "40px",
            }}
            onClick={() => {}}
          >
            Launch Eden
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
              marginTop: "40px",
            }}
            onClick={() => {}}
          >
            Launch Eden
          </div>
        </>
      )}
    </div>
  );
};

export default LaunchScreen;

import React from "react";
import styled from "styled-components";
import { Device } from "../Constant";

export const AppMainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 61px;
  padding-bottom: 40px;
  background: white;

  @media ${Device.mobileS} {
    display: flex;
    justify-content: center;
    margin-top: 61px;
    padding-bottom: 40px;
    background: #e8ecf3;
  }
  @media ${Device.mobileM} {
    background-color: #e8ecf3;
    display: flex;
    justify-content: center;
    margin-top: 61px;
    padding-bottom: 40px;
    background: #e8ecf3;
  }
  @media ${Device.mobileL} {
    display: flex;
    justify-content: center;
    margin-top: 61px;
    padding-bottom: 40px;
    background: white;
  }
`;

export const Main = styled.div`
  text-align: left;
  display: flex;
  width: 34rem;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 40px;

  @media ${Device.mobileS} {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-left: 150px;
    padding-bottom: 40px;
  }
  @media ${Device.mobileM} {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-left: 150px;
  }
  @media ${Device.mobileL} {
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const WorkspaceDiv = styled.div`
  background: #6a5ee5;
  padding-left: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 392px;
  border-radius: 5px;
  color: white;
  text-align: center;
  outline: none;
  text-decoration: none;
`;

export const WorkspaceMain = styled.div`
  text-align: left;
  display: flex;
  width: 34rem;
  flex-direction: column;
  margin-top: 30px;

  @media ${Device.mobileS} {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-left: 190px;
    padding-bottom: 40px;
  }
  @media ${Device.mobileM} {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-left: 190px;
  }
  @media ${Device.mobileL} {
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SetupDiv = styled.div`
  text-align: left;
  display: flex;
  width: 34rem;
  flex-direction: column;
  margin-top: 30px;

  @media ${Device.mobileS} {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-left: 190px;
    padding-bottom: 40px;
  }
  @media ${Device.mobileM} {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-left: 190px;
  }
  @media ${Device.mobileL} {
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SetupSubDiv = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: row;
  padding: 13px;
  margin-left: 2%;
`;

export const SetupWorkspaceDiv = styled.div`
  background: #6a5ee5;
  padding-left: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 390px;
  border-radius: 5px;
  color: white;
  text-align: center;
  outline: none;
  text-decoration: none;
  margin-left: 5%;
  margin-top: 10px;
`;

export const LaunchDiv = styled.div`
  background: #6a5ee5;
  padding-left: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 391px;
  border-radius: 5px;
  color: white;
  text-align: center;
  outline: none;
  text-decoration: none;
  margin-left: 1%;
  margin-top: 40px;
`;

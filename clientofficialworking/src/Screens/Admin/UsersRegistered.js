import React from "react";
import UserInfoCard from "../../Components/User/UserInfoCard";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loggedInAtom } from "../../_state/users";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import UserInfoPopup from "../../Components/User/UserInfoPopup";
import NewButton from "../../Components/Buttons/NewButton";

const StyledDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 5% 5px 5%;
  background-color: #051622;
  flex-grow: 1;
`;
const StyledH1 = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #1ba098;
  margin: 10vh 0 1vh 0;
`;
const StyledP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #1ba098;
`;

const CloseButton = styled.button`
  background-color: #0b2d45;
  color: red;
  font-size: 0.75rem;
  font-weight: bolder;
  border-style: 5px solid;
  border-color: red;
  border-radius: 50%;
  width: 2vw;
  height: 2.4vh;
  padding: 0;
  z-index: 100;
  position: absolute;
  top: 25%;
  right: 25%;
  &:hover {
    background-color: red;
    color: #0b2d45;
    cursor: pointer;
  }
`;
const PopupBackground = styled.div`
  background-color: #051622;
  color: #000;
  height: 100%;
  width: 100%;
  opacity: 80%;
  position: absolute;
  top: 0;
  left: 0;
`;

const UsersRegistered = () => {
  const [toggled, setToggled] = useState(true);

  const handleClick = (e) => {
    setToggled(!toggled);
  };

  const handleClose = (e) => {
    setToggled(!toggled);
  };
  const [isLoggedIn] = useRecoilState(loggedInAtom);
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <StyledDiv>
      <StyledH1>User Registry</StyledH1>
      <StyledP>A generic view of all your members in your organization</StyledP>
      <br />
      <br />
      <UserInfoCard />
      <br />
      <NewButton onClick={handleClick}>ADD USER</NewButton>
      {toggled ? null : <PopupBackground onClick={handleClose} />}
      {toggled ? null : <UserInfoPopup />}
      {toggled ? null : <CloseButton onClick={handleClose}>X</CloseButton>}
    </StyledDiv>
  );
};

export default UsersRegistered;

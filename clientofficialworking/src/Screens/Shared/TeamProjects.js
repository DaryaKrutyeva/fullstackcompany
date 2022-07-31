import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loggedInAtom } from "../../_state/users";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import ProjectShortCard from "../../Components/ProjectShort/ProjectShortCard";
import NewButton from "../../Components/Buttons/NewButton";
import SubmitProjectPopup from "../../Components/Project/SubmitProjectPopup";

const StyledTeamProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .projectAndButton {
    width: 60%;
    text-align: center;
  }
  .button {
    text-align: right;
  }
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

const TeamProjects = () => {
  useEffect(() => {
    //call api to get projects
  }, []);

  const [isLoggedIn] = useRecoilState(loggedInAtom);
  const [createProjectModalOpen, setCreateProjectModalOpen] = useState(false);

  const handleClose = () => setCreateProjectModalOpen(false);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <StyledTeamProjects>
      <div className="projectAndButton">
        <h1>Projects</h1>
        <div className="button">
          <NewButton onClick={() => setCreateProjectModalOpen(true)}>New</NewButton>
        </div>
      </div>
      <ProjectShortCard />
      {createProjectModalOpen && <PopupBackground onClick={handleClose} />}
      {createProjectModalOpen && <SubmitProjectPopup />}
      {createProjectModalOpen && <CloseButton onClick={handleClose}>X</CloseButton>}
    </StyledTeamProjects>
  );
};

export default TeamProjects;

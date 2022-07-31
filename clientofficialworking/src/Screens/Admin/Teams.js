import React from "react";
import { useState } from "react";
import TeamInfoCard from "../../Components/Teams/TeamInfoCard";
import styled from "styled-components";
import TeamsPopup from "../../Components/Teams/TeamsPopup";
import { useRecoilState } from "recoil";
import { loggedInAtom, selectedTeamAtom } from "../../_state/users";
import { Redirect } from "react-router-dom";

const seededTeams = [
  {
    name: "Team 1",
    description: "This is team 1",
    company: "Company 1",
  },
  {
    name: "Team 2",
    description: "This is team 2",
    company: "Company 2",
  },
  {
    name: "Team 3",
    description: "This is team 3",
    company: "Company 2",
  },
  {
    name: "Team 4",
    description: "This is team 4",
    company: "Company 3",
  },
  {
    name: "Team 5",
    description: "This is team 2",
    company: "Company 2",
  },
];

const seededUsers = [
  {
    userData: {
      first: "John",
      last: "Doe",
      team: "Team 1",
      company: "Company 1",
    },
  },
  {
    userData: {
      first: "Jane",
      last: "Doe",
      team: "Team 1",
      company: "Company 1",
    },
  },
  {
    userData: {
      first: "Jae",
      last: "Doe",
      team: "Team 1",
      company: "Company 1",
    },
  },
  {
    userData: {
      first: "Jane",
      last: "Noe",
      team: "Team 1",
      company: "Company 1",
    },
  },
  {
    userData: {
      first: "2John",
      last: "2Doe2",
      team: "Team 2",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 2",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 5",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 3",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 3",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 3",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 3",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 4",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 4",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 4",
      company: "Company 2",
    },
  },
  {
    userData: {
      first: "2Jane",
      last: "2Doe2",
      team: "Team 4",
      company: "Company 2",
    },
  },
];

const seededProjects = [
  {
    name: "Project 1",
    description: "This is project 1",
    active: true,
    team: "Team 1",
  },
  {
    name: "Project 2",
    description: "This is project 2",
    active: true,
    team: "Team 1",
  },
  {
    name: "Project 3",
    description: "This is project 3",
    active: true,
    team: "Team 2",
  },
];

const StyledTeams = styled.div`
  background-color: #051622;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background-color: #051622;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #c3a484;
  height: 205px;
  width: 22.75%;
  margin: 1.1rem 0 1rem 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #c3a484;
  border-width: 4px;
  border-radius: 1em;
  &:hover {
    cursor: pointer;
  }
`;
const StyledH1 = styled.h1`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #051622;
  color: #1ba098;
  margin: 0 0 0 0;
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

export const Teams = () => {
  const [toggled, setToggled] = useState(true);
  const [selected, setSelected] = useRecoilState(selectedTeamAtom);

  const handleClick = (e) => {
    setToggled(!toggled);
  };

  const handleClose = (e) => {
    setToggled(!toggled);
  };

  const handleSelect = (e) => {
    setSelected(e.target);
  };

  const [isLoggedIn] = useRecoilState(loggedInAtom);
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (selected) {
    return <Redirect to="/teamprojects" />;
  }

  return (
    <div>
      <StyledH1>Teams</StyledH1>
      <StyledTeams>
        {seededTeams.map((team, index) => {
          return (
            <TeamInfoCard
              key={index}
              handleSelect={handleSelect}
              team={team}
              value={team.name}
              users={seededUsers.filter(
                (user) => user.userData.team === team.name
              )}
              projects={seededProjects.filter(
                (project) => project.team === team.name
              )}
            />
          );
        })}
        <StyledButton onClick={handleClick}>New Team</StyledButton>
        <PopupBackground hidden={toggled} onClick={handleClick} />
        <TeamsPopup
          hidden={!toggled}
          users={seededUsers}
          triggered={toggled}
        ></TeamsPopup>
        <CloseButton hidden={toggled} onClick={handleClose}>
          X
        </CloseButton>
      </StyledTeams>
    </div>
  );
};

export default Teams;

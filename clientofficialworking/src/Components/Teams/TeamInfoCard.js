import React from "react";
import TeamInfo from "./TeamInfo";
import styled from "styled-components";

const StyledTeamCard = styled.div`
  background-color: #051622;
  color: red;
  display: flex;
  flex-direction: block;
  align-items: center;
  width: 30%;
  &:hover {
    cursor: pointer;
    background-color: #051600;
  }
`;

const TeamInfoCard = ({ team, users, projects, handleSelect }) => {
  return (
    <StyledTeamCard onClick={handleSelect}>
      <TeamInfo team={team} users={users} projects={projects} />
    </StyledTeamCard>
  );
};

export default TeamInfoCard;

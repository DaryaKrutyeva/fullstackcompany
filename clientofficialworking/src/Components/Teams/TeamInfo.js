import React from "react";
import styled from "styled-components";

const StyledMembers = styled.div`
    background-color: #1ba098;
    color: white;
    margin: .5rem;
    border-radius: .25rem;
    padding: .25rem;
    text-align: center;
    font-size: .5rem;
    width: 6vw;

    `
const StyledTeamMembers = styled.div`
    background-color: #0b2d45;
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-top: 3px solid #5a6261;
    height: 180px;
    max-width: 410px;
    min-width: 130px;
`
const StyledMembersContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    `

const StyledTeamHeader = styled.div`
    background-color: #0b2d45;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-top: .1rem;
    min-width: 130px;
    `
const StyledTeamName = styled.div`
    background-color: #0b2d45;
    color: white;
    font-size: .8rem;
    padding-left: 2vw;
    `
const StyledProjects = styled.div`
    background-color: #0b2d45;
    color: white;
    font-size: .8rem;
    margin-left: 38%;
    `
const StyledTeam = styled.div`
    background-color: #0b2d45;
    color: white;
    width: 75%;
    margin: 2rem auto;
    `
    const H5 = styled.h5`
    font-size: medium;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    `

const TeamInfo = ({ team, users, projects }) => {
    return (
        <StyledTeam>
            <StyledTeamHeader>
                <StyledTeamName>{team.name}</StyledTeamName>
                <StyledProjects># of Projects: {projects.length}</StyledProjects>
            </StyledTeamHeader>
            <StyledTeamMembers>
                <H5>Members</H5>
                <StyledMembersContainer>
                    {users.map((user, index) => {
                        return (
                            <StyledMembers key={index}>
                                {user.userData.first} {user.userData.last.charAt(0).toUpperCase()}.
                            </StyledMembers>
                        )
                    }
                    )}

                </StyledMembersContainer>
            </StyledTeamMembers>
        </StyledTeam>
    )
}

export default TeamInfo;

// 
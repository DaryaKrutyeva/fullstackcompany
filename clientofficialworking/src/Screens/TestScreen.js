import React from "react";
// import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { announcementsAtom } from "../_state/announcements";
// import { getAnnouncements, createUser } from "../_helper/api";
import styled from "styled-components";
import * as api from "../_helper/api";

const StyledDiv = styled.div`
    justify-content: center;
    align-items: center;
    width: 90%;
    border-radius: .5rem;
`
let user =
{
    username: "jimbob",
    password: "password",
    first: "Jim",
    last: "Bob",
    email: "a@mail.com",
    phone: "1234567890",
    active: true,
    admin: false,
    team: "team1",
    company: "company1",
}

let announcement =
{
    title: "Announcement 1",
    message: "This is the first announcement",
    company: "company1",
    user: "jimbob",
}

let company =
{
    name: "company1",
    description: "This is the first company",
}

let project = {
    name: "project1",
    description: "This is the first project",
    active: true,
    team: "team1",
}

let team = {
    name: "team1",
    description: "This is the first team",
    company: "company1",
}





const TestScreen = () => {
    return (
        <div>
            <StyledDiv>
                <h1>Users</h1>
                <button onClick={() => api.createUser(true, user)}>Create User</button>
                <button onClick={() => api.getUsers()}>Get Users</button>
                <button onClick={() => api.getUser(user)}>Get User</button>
                <button onClick={() => api.updateUser(true, user)}>Update User</button>
                <button onClick={() => api.deleteUser(true, user)}>Delete User</button>
                <button onClick={() => api.isLoginValid("Bob", "123")}>Is Login Valid</button>
                <br />
                <h1>Announcements</h1>
                <button onClick={() => api.createAnnouncement(announcement)}>Create Announcement</button>
                <button onClick={() => api.getAnnouncements()}>Get Announcements</button>
                <br />
                <h1>Company</h1>
                <button onClick={() => api.createCompany(true, company)}>Create Company</button>
                <button onClick={() => api.getCompanies()}>Get Companies</button>
                <button onClick={() => api.getCompany(company)}>Get Company</button>
                <button onClick={() => api.updateCompany(company)}>Update Company</button>
                <button onClick={() => api.deleteCompany(true, company)}>Delete Company</button>
                <br />
                <h1>Projects</h1>
                <button onClick={() => api.createProject(true, project)}>Create Project</button>
                <button onClick={() => api.getProjects()}>Get Projects</button>
                <button onClick={() => api.getProject(project)}>Get Project</button>
                <button onClick={() => api.updateProject(true, team, project, project.name)}>Update Project</button>
                <br />
                <h1>Teams</h1>
                <button onClick={() => api.createTeam(true, team)}>Create Team</button>
                <button onClick={() => api.getTeams()}>Get Teams</button>
                <button onClick={() => api.getTeam(team)}>Get Team</button>
                <button onClick={() => api.updateTeam(true, team)}>Update Team</button>
                <button onClick={() => api.deleteTeam(true, team)}>Delete Team</button>


            </StyledDiv>
        </div>
    )
}


export default TestScreen;
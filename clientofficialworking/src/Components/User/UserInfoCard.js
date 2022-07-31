import React from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;
    border: 1px solid #deb992;
    background-color: #051622;
    color: #fff;
    `
const StyledInfo = styled.div`
    width: 15%;
    font-size: .75rem;
    `
const StyledBoolean = styled.div`
    width: 10%;
    font-size: .75rem;
    color: #fff;
    `



export const UserInfoCard = () => {
    const users = [
        {
            "admin": true,
            "userData": {
                "username": "Jim",
                "password": "123",
                "first": "Jimothy",
                "last": "Biscuit",
                "email": "Jimbis@mail.com",
                "phone": "123-456-7890",
                "active": true,
                "admin": false,
                "status": true,
                "team": "dem bois",
                "company": "Jergens"
            }
        },
        {
            "admin": false,
            "userData": {
                "username": "Jim2",
                "password": "1232",
                "first": "Jimothy2",
                "last": "Biscuit2",
                "email": "Jimbis2@mail.com",
                "phone": "123-456-7890",
                "active": true,
                "admin": false,
                "status": true,
                "team": "dem bois2",
                "company": "Jergens2"
            }
        },
        {
            "admin": false,
            "userData": {
                "username": "Jim3",
                "password": "1232",
                "first": "Jimothy2",
                "last": "Biscuit2",
                "email": "Jimbis2@mail.com",
                "phone": "123-456-7890",
                "active": true,
                "admin": false,
                "status": false,
                "team": "",
                "company": "Jergens2"
            }
        }
    ]
    return (
        <div>
            <StyledContainer>
                <StyledInfo>Name </StyledInfo>
                <StyledInfo>Email </StyledInfo>
                <StyledInfo>Team </StyledInfo>
                <StyledBoolean>Active </StyledBoolean>
                <StyledBoolean>Admin </StyledBoolean>
                <StyledBoolean>Status </StyledBoolean>

            </StyledContainer>
            {users.map(user => <UserInfo key={user.userData.username} user={user} />)}
        </div>
    )
}

export default UserInfoCard;


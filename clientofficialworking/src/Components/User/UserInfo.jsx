import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #deb992;
    background-color: #051622;
    color: #deb992;
    `
const StyledInfo = styled.div`
    width: 15%;
    font-size: .75rem;
    `
const StyledBoolean = styled.div`
    width: 10%;
    font-size: .75rem;
    color: ${props => props.check ? '#00ff00' : '#ff0000'};
    `

export const UserInfo = ({ user }) => {

    return (
        <StyledContainer>
            <StyledInfo>
                {user.userData.first} {user.userData.last}
            </StyledInfo>
            <StyledInfo>
                {user.userData.email}
            </StyledInfo>
            <StyledInfo>
                {user.userData.team}
            </StyledInfo>
            <StyledBoolean check={user.userData.active} >
                {user.userData.active ? "YES" : "NO"}
            </StyledBoolean>
            <StyledBoolean check={user.admin}>
                {user.admin ? "YES" : "NO"}
            </StyledBoolean>
            <StyledBoolean check={user.userData.status}>
                {user.userData.status ? "JOINED" : "PENDING"}
            </StyledBoolean>
        </StyledContainer>
    )
}

export default UserInfo;
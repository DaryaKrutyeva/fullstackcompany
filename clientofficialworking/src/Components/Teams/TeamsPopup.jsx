import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const StyledPopup = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0b2d45;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    height: 50%;
    width: 50%;
    color: #000;
    opacity: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const StyledInput = styled.input`
    width: 50%;
    background-color: #0b2d45;
    color: #c4a888; 
    border-style: none;
    border-bottom: 1px solid #c4a888;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    `
const StyledSelect = styled.select`
    background-color: white;
    color: #005594;
    text-align: center;
    font-size: 1rem;
`
const StyledMembers = styled.div`
    background-color: #1ba098;
    color: white;
    margin: .25rem;
    border-radius: .25rem;
    padding: .2rem;
    text-align: center;
    font-size: 1rem;
    width: 7vw;
    `
const StyledP = styled.p`
    color: #c4a888; 
    `
const Xbutton = styled.button`
    background-color: #0b2d45;
    color: red;
    font-size: .75rem;
    font-weight: bolder;
    border-style: 5px solid;
    border-color: red;
    border-radius: 50%;
    width: 2vw;
    height: 2.4vh;
    padding: 0;
    position: relative;
    display: inline-block;
    &:hover {
        background-color: red;
        color: #0b2d45;
        cursor: pointer;
    }
    `
const StyledAddUser = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    `
const StyledButton = styled.button`
  background-color: #1ba098;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    height: 10%;
    width: 40%;
    margin-top: 2vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
    }
    `


function TeamsPopup({ users, triggered }) {
    const [teamName, setTeamName] = useState('')
    const [teamMembers, setTeamMembers] = useState([])
    const [teamDescription, setTeamDescription] = useState('')

    const handleXButtonClick = (e) => {
        const newTeamMembers = teamMembers.filter(member => member !== e.target.value)
        setTeamMembers(newTeamMembers)
    }

    const handleSelectChange = (e) => {
        setTeamMembers([...teamMembers, e.target.value])

    }

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value)
    }

    const handleTeamDescriptionChange = (e) => {
        setTeamDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (teamName === '' || teamMembers.length === 0 || teamDescription === '') {
            alert('Please fill out all fields')
        }
        // POST create a team and PATCH update user to have team
    }

    return (
        <div hidden={triggered}>
            <StyledPopup >
                <StyledInput type="text" onChange={handleTeamNameChange} placeholder="Team Name" />
                <br />
                <StyledInput type="text" onChange={handleTeamDescriptionChange} placeholder="Team Description" />
                <StyledP>Select Members</StyledP>
                <StyledSelect onChange={handleSelectChange}>
                    <option hidden>{"Pick an option."}</option>
                    {users.map((user, index) => {
                        return <option key={index}>{user.userData.first} {user.userData.last.charAt(0).toUpperCase()}.</option>
                    })}
                </StyledSelect>
                <br />
                <div>
                    {teamMembers ? teamMembers.map((member, index) => {
                        return <StyledAddUser key={member + index}><StyledMembers key={index}>{member} </StyledMembers><Xbutton key={index + member} value={member} onClick={handleXButtonClick}>X</Xbutton></StyledAddUser>
                    }) : null}
                </div>
                <br />
                <StyledButton onClick={handleSubmit}>Submit</StyledButton>
            </StyledPopup>

        </div>
    )
}

export default TeamsPopup
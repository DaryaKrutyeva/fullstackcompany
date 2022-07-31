import React from "react"
import { useState } from "react"
import styled from "styled-components"

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
    text-align: start;
    font-size: 1rem;
    margin: .75rem;
    `
const StyledSelect = styled.select`
    background-color: white;
    color: #005594;
    text-align: center;
    font-size: 1rem;
`
const StyledButton = styled.button`
  background-color: #1ba098;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    height: 5vh;
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
const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `

const UserInfoPopup = ({ toggled }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [admin, setAdmin] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || admin === "") {
            setError("Please fill out all fields")
        } else {
            if (password !== confirmPassword) {
                setError("Passwords do not match")
            } else {
                const userToSubmit = {
                    admin,
                    userData: {
                        first: firstName,
                        last: lastName,
                        email,
                        password
                    }
                }
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                setAdmin("")
                setError("")
                // ######## POST USER ########
                console.log(userToSubmit)
            }
        }
    }

    return (
        <StyledPopup>
            <FlexRow>
                <StyledInput
                    type="text"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <StyledInput
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </FlexRow>
            <StyledInput
                type="email"
                style={{ width: "70%" }}
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FlexRow>
                <StyledInput

                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <StyledInput
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FlexRow>
            <br />
            <StyledSelect
                value={admin}
                onChange={(e) => setAdmin(e.target.value)}
            >
                <option hidden>Select Admin Status</option>
                <option value="true">Admin</option>
                <option value="false">Worker</option>
            </StyledSelect>
            <br />
            <StyledButton onClick={handleSubmit}>Submit</StyledButton>
            <br />
            {error ? <p style={{ color: "red" }}>{error}</p> : null}

        </StyledPopup>
    )
}

export default UserInfoPopup
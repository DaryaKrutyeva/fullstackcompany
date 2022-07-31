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
`;
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
`;

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
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SubmitProjectPopup = ({ project }) => {
  const [name, setName] = useState(project?.name ?? "");
  const [description, setDescription] = useState(project?.description ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "") {
      setError("Please fill out all fields");
    } else {
      const newProject = { name, description };

      setName("")
      setDescription("")
      setError("")
      // ######## POST Project ########
      console.log(newProject);
    }
  };

  return <StyledPopup>
    <FlexRow>
      <StyledInput
        type="text"
        placeholder="project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </FlexRow>
    <FlexRow>
      <StyledInput
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </FlexRow>
    <br />
    <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    <br />
    {error ? <p style={{ color: "red" }}>{error}</p> : null}
  </StyledPopup>;
}

export default SubmitProjectPopup;
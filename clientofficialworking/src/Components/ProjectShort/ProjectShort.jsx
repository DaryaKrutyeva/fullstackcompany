import styled from "styled-components";
import EditButton from "../Buttons/EditButton";
import SubmitProjectPopup from "../Project/SubmitProjectPopup";
import React, {useState} from "react";

const StyledProjectShort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c1c5c8;
  .projectInfo {
    display: flex;
    align-items: center;
  }
  .projectInfo h3 {
    margin-left: 30px;
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

const ProjectShort = ({ project }) => {
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleClose = () => setEditModalOpen(false);
  return (
    <StyledProjectShort>
      <div>
        <div className="projectInfo">
          <h2>{project.name}</h2>
          <h3>Last edited {project.lastEdited} ago</h3>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="buttonHolder">
        <EditButton onClick={() => setEditModalOpen(true)}>Edit</EditButton>
      </div>
        {editModalOpen && <PopupBackground onClick={handleClose} />}
        {editModalOpen &&  <SubmitProjectPopup project={project} />}
        {editModalOpen && <CloseButton onClick={handleClose}>X</CloseButton>}
    </StyledProjectShort>
  );
};

export default ProjectShort;

import styled from "styled-components";

const StyledProject = styled.div`
  color: #e0e5e8;
  padding: 40px;
  .nameAndDate {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }
  .date {
    color: #c2c6c8;
  }
`;

const Project = ({ project }) => {
  return (
    <StyledProject>
      <div className="nameAndDate">
        <h2>{project.name}</h2>
        <h3 className="date">{project.date}</h3>
      </div>

      <p>{project.description}</p>
    </StyledProject>
  );
};

export default Project;

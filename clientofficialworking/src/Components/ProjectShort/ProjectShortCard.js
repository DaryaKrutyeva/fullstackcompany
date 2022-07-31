import { Fragment } from "react";
import styled from "styled-components";
import ProjectShort from "./ProjectShort";

const Card = styled.div`
  width: 60%;
  hr {
    border: 1px solid #deb992;
  }
`;

const ProjectShortCard = () => {
  const projects = [
    {
      name: "Project 1",
      lastEdited: "2 days",
      description: "This is the newest project",
    },
    {
      name: "Project 2",
      lastEdited: "3 days",
      description: "Look at this project",
    },
    {
      name: "Project 3",
      lastEdited: "6 days",
      description: "This is a beautiful project!",
    },
  ];

  return (
    <Card>
      {projects.map((project, idx) => (
        <Fragment key={idx}>
          <hr />
          <ProjectShort project={project} />
        </Fragment>
      ))}
    </Card>
  );
};

export default ProjectShortCard;

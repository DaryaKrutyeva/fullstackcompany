import styled from "styled-components";
import Project from "./Project";

const Card = styled.div`
  background-color: #0b2d45;
  width: 60%;
  border-radius: 20px;
`;

const ProjectCard = () => {
  const project = {
    name: "Project 1",
    date: "July 27, 2022",
    description:
      "Here is a very long description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget volutpat lectus. In hac habitasse platea dictumst. Phasellus quis elementum magna. Phasellus dictum, ante non suscipit sollicitudin, nisi lectus mollis libero, sed scelerisque est sapien quis ante. Nam pharetra nunc orci, id fringilla augue tincidunt a. Fusce et velit quis nisi feugiat fermentum vel in est. Quisque eu consectetur tellus. Cras malesuada egestas libero. Proin maximus massa massa, in lobortis nisl pretium vitae. Morbi pretium aliquet turpis, sit amet aliquam leo mollis eget. Nullam elementum est sed libero molestie, molestie pretium augue interdum. Praesent sed ex non ipsum laoreet elementum eget vel sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dignissim tincidunt gravida.",
  };
  return (
    <Card>
      <Project project={project} />
    </Card>
  );
};

export default ProjectCard;

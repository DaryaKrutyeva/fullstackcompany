import styled from "styled-components";

const LoginButton = styled.button`
  background-color: #051622;
  border: 2px solid #1ba098;
  border-radius: 30px;
  color: white;
  height: 40px;
  width: 150px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  &:hover {
    background-color: #0d3a59;
  }
  &:active {
    background-color: #092437;
    color: #1ba098;
  }
`;

export default LoginButton;

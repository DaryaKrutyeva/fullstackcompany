import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import * as api from "../../_helper/api";
import { loggedInAtom, userAtom } from "../../_state/users";
import { Redirect } from "react-router-dom";
import logo from "../../assets/icons8-group-of-projects-96.png";
import LoginButton from "../../Components/Buttons/LoginButton";
// logo taken from https://icons8.com

const StyledLoginPage = styled.div`
  color: #1ba098;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 4em;
    margin-bottom: 0px;
    font-weight: normal;
  }
  h2 {
    font-size: 3em;
    margin-top: 0px;
    font-weight: normal;
  }
`;

const StyledLogin = styled.div`
  border: 5px solid #deb992;
  border-radius: 25px;
  box-shadow: 5px 5px 5px #576168;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.div`
  background-color: #0d3a59;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 5px solid white;
  background-color: #051622;
  height: 50px;
  text-align: center;
  color: #1ba098;
  font-size: 1.25em;
  margin: 10px;
  ::placeholder {
    color: #1ba098;
  }
`;

const employee = {
  username: "employee",
  password: "password",
  firstName: "Bill",
  lastName: "Bo",
  email: "billbo@mail.com",
  admin: false
};

const administrator = {
  username: "admin",
  password: "password",
  firstName: "Jill",
  lastName: "Smith",
  email: "Jills@mail.com",
  admin: true
}


const Login = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [searchUserName, setSearchUserName] = useState("");
  const [searchUserPassword, setSearchUserPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInAtom);

  const handleClick = async () => {
    if (searchUserName === "" || searchUserPassword === "") {
      alert("Please enter a username and password");
    }
    if (searchUserName === employee.username && searchUserPassword === employee.password) {
      setUser(employee);
      setIsLoggedIn(true);
    }
    if (searchUserName === administrator.username && searchUserPassword === administrator.password) {
      setUser(administrator);
      setIsLoggedIn(true);
    }
    if (searchUserName !== "" && searchUserName !== employee.username && searchUserName !== administrator.username) {
      alert("Username not found");
    }
    if (searchUserName === employee.username && searchUserPassword !== employee.password) {
      alert("Password incorrect");
    }
    if (searchUserName === administrator.username && searchUserPassword !== administrator.password) {
      alert("Password incorrect");
    }
    // const response = await api.getUser(searchUserName);
    // setUser(response);
  };

  if (isLoggedIn && user.admin) {
    return <Redirect to="/selectcompany" />;
  } else if (isLoggedIn && !user.admin) {
    return <Redirect to="/announcements" />;
  }

  return (
    <StyledLoginPage>
      <h1>COOK SYSTEMS</h1>
      <h2>A FINAL APP</h2>
      <StyledLogin>
        <Logo>
          <img src={logo} alt="Group of projects" />
        </Logo>
        <Input
          type="text"
          value={searchUserName}
          placeholder="username"
          onChange={(e) => setSearchUserName(e.target.value)}
        />
        <br />
        <Input
          type="password"
          value={searchUserPassword}
          placeholder="password"
          onChange={(e) => setSearchUserPassword(e.target.value)}
        />
        <br />
        <LoginButton onClick={handleClick}>LOGIN</LoginButton>
      </StyledLogin>
    </StyledLoginPage>
  );
};

export default Login;

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { loggedInAtom, userAtom } from "../../_state/users";
import {
  NavContainer,
  RightContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavLinkContainer,
  NavbarLink,
  Button,
  NavbarLinkExtended,
  Logo,
  P,
} from "./style/NavBar.style";
import logo from "../../assets/icons8-group-of-projects-96.png";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom);
  const [user, setUser] = useRecoilState(userAtom);

  const handleClick = () => {
    setLoggedIn(false);
    setUser({});
  };

  return (
    <NavContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={logo} alt="Group of projects" />
          {user.admin ? <P> ACTING AS ADMIN</P> : null}
        </LeftContainer>
        <RightContainer>
          <NavLinkContainer>
            <NavbarLink
              to="/"
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              Home
            </NavbarLink>
            <NavbarLink
              exact to="/teams"
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              Teams
            </NavbarLink>
            <NavbarLink to="/users"> Users</NavbarLink>
            <NavbarLink to="/" onClick={handleClick}>
              Logout
            </NavbarLink>
            <Button
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </Button>
          </NavLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended
            to="/"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {" "}
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            exact to="/teams"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {" "}
            Teams
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/users"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {" "}
            Users
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/"
            onClick={() => {
              handleClick();
            }}
          >
            {" "}
            Logout
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavContainer>
  );
};

export default Navbar;

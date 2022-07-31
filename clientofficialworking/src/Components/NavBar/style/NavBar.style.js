import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
  font-family: "Mulish";
  font-style: normal;
  font-size: 48px;
  line-height: 150%;
  text-align: center;
  color: #1BA098;
  background-color:#061722;
  border-bottom: 2px solid #DEB992;
`;


export const RightContainer = styled.div`
  
  flex: 30%;
  display: flex;
  flex-direction: center;
  justify-content: flex-end;
  padding-right: 1%;
  
`;
export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  flex-direction: center;
  padding-left: 0px;
  
`;

export const NavbarInnerContainer = styled.div`
display: flex;
width: 100%; 
height: 59px;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: #1BA098;
  font-size: x-large;
  font-family: "Mulish";
  text-decoration: none;
  margin: 10px;
  width: fit-content;
  @media (max-width: 1920px) {
   display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: 
#1BA098;
  font-size: x-large;
  font-family: 'Mulish';
  text-decoration: none;
  margin: 10px;
  width: 80%;
  border-bottom: 2px solid #1BA098;
`;

export const Button = styled.button`
  width: 56px;
  height: 50px;
  background: #0D3A59;
  border: solid 1px black;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 45px;
  margin: 5px 15px;
  padding: 0 0 11px 0 ;
  cursor: pointer;
  @media (min-width: 1920px) {
    display: display;
  }
`;

export const NavbarExtendedContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #224864;
  opacity: 98%;
  @media (min-width: 1940px) {
  display: none;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 0px 20px;
`;

export const P = styled.p`
font-size: large;
color: #F24E1E;
display: flex;
align-items: center;
`
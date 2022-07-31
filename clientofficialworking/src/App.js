import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import GlobalStyle from "./GlobalStyles";
import Teams from "./Screens/Admin/Teams";
import UsersRegistered from "./Screens/Admin/UsersRegistered";
import Announcements from "./Screens/Shared/Announcements";
import Login from "./Screens/Shared/Login";
import SelectCompany from "./Screens/Shared/SelectCompany";
import TeamProjects from "./Screens/Shared/TeamProjects";
import TestScreen from "./Screens/TestScreen";
import { loggedInAtom } from "./_state/users";
import { useRecoilState } from "recoil";
import {Fragment} from "react";

const shouldShowNavbar = ({ isLoggedIn, path }) => Boolean(isLoggedIn && !path.includes('selectcompany'));

const RouterContents = () => {
    const [isLoggedIn] = useRecoilState(loggedInAtom);
    const { pathname } = useLocation();

    return <Fragment>
        <GlobalStyle />
        {shouldShowNavbar({ isLoggedIn, path: pathname }) ? <NavBar /> : ""}
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/announcements" component={Announcements} />
            <Route path="/users" component={UsersRegistered} />
            <Route path="/selectcompany" component={SelectCompany} />
            <Route path="/teams" component={Teams} />
            <Route path="/teamProjects" component={TeamProjects} />
            <Route path="/test" component={TestScreen} />
        </Switch>
    </Fragment>
};

const App = () => {
  return (
    <BrowserRouter>
      <RouterContents/>
    </BrowserRouter>
  );
};

export default App;
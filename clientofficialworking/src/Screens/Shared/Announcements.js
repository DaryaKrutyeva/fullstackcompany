import AnnouncementCard from "../../Components/Announcements/AnnouncementCard";
import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loggedInAtom, userAtom } from "../../_state/users";
import { Redirect } from "react-router-dom";
import NewButton from "../../Components/Buttons/NewButton";
import AnnouncementPopup from "../../Components/Announcements/AnnouncementPopup";

const AnnouncementPage = styled.div`
  width: 100%;
  height: 100%;
  background: #051622;
  padding: 20px 0;

  > h1 {
    text-align: center;
    color: #1ba098;
    font-weight: 500;
  }

  > hr {
    width: 55%;
    margin-bottom: 40px;
    color: #deb992;
  }
`;

const AnnouncementCreation = styled.div`
  text-align: center;
  width: 50%;
  margin-left: auto;
  padding-bottom: 20px;
`;

const Announcements = () => {
  const [isLoggedIn] = useRecoilState(loggedInAtom);
  const [user] = useRecoilState(userAtom);
  const [popup, setPopup] = useState(false);

  // Use temporarily until we get set up with backend and can access user.admin
  const [admin] = useState(true);

  useEffect(() => {
    //call api to get announcements
  }, []);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  const togglePopup = (event) => {
    setPopup(!popup);
  };

  return (
    <AnnouncementPage>
      {/* Once we connect to backend, change admin to user.admin */}
      {admin ? (
        <Fragment>
          <h1>Announcements</h1>
          {popup && <AnnouncementPopup togglePopup={togglePopup} user={user} />}
          <AnnouncementCreation>
            <NewButton onClick={togglePopup}>New</NewButton>
          </AnnouncementCreation>
          <hr />
          <AnnouncementCard
            creator="john john"
            date="November 27th, 2017"
            announcement="hello"
          />
        </Fragment>
      ) : (
        <Fragment>
          <AnnouncementCard
            creator="john john"
            date="November 27th, 2017"
            announcement="hello"
          />
        </Fragment>
      )}
    </AnnouncementPage>
  );
};

export default Announcements;

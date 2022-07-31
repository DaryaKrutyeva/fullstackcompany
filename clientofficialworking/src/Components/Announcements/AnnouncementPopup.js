import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userAtom } from "../../_state/users";

const BackgroundOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

const Popup = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  background: #0b2d45;
  color: #deb992;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding-bottom: 40px;
  min-width: 250px;
`;

const PopupContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const PopupForm = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);

  > label {
    padding-bottom: 40px;
    font-size: 1.5em;
  }

  > textarea {
    background: none;
    border: none;
    resize: none;
    border-bottom: 1px solid #deb992;
    color: white;
    font-size: 1.5em;
  }
`;

const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  background: none;
  border: 4px solid red;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 6px;
  display: flex;
  color: red;
  z-index: 3;
  position: absolute;
  top: 5%;
  right: 5%;

  &:hover {
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  color: white;
  position: absolute;
  background: #1ba098;
  top: 90%;
  left: 50%;
  border: none;
  font-size: 1.5em;
  padding: 0.5em 2em;
  transform: translate(-50%, 0);
  border-radius: 10px;
`;

const AnnouncementPopup = (props) => {
  const createAnnouncement = () => {
    let user = props.user;
    let message = document.getElementById("announcement");

    //call the api here to create announcement
  };

  return (
    <BackgroundOverlay>
      <Popup>
        <CloseButton onClick={props.togglePopup}>×</CloseButton>
        <PopupContainer className="popupContainer">
          <PopupForm>
            <label htmlFor="announcement">Announcement</label>
            <textarea id="announcement" rows="1" />
          </PopupForm>
          <SubmitButton onClick={createAnnouncement}>Submit</SubmitButton>
        </PopupContainer>
      </Popup>
    </BackgroundOverlay>
  );
};

export default AnnouncementPopup;

import styled from "styled-components";
import Announcement from "./Announcement";

const Card = styled.div`
  background: #0b2d45;
  color: white;
  width: 45%;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const AnnouncementCard = (props) => {
  return (
    <Card>
      <Announcement
        creator={props.creator}
        date={props.date}
        announcement={props.announcement}
      />
    </Card>
  );
};

export default AnnouncementCard;

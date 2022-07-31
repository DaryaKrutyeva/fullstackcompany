import { Fragment } from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  padding-top: 30px;
  font-size: 1.25em;
`;

const Creator = styled.div`
  padding-left: 8%;
`;

const Date = styled.div`
  margin-left: auto;
  padding-right: 8%;
`;

const AnnouncementDescription = styled.div`
  padding: 20px 0;
  padding-left: 8%;
  padding-bottom: 30px;
`;

const Announcement = (props) => {
  return (
    <Fragment>
      <Header>
        <Creator>{props.creator}</Creator>
        <Date>{props.date}</Date>
      </Header>
      <AnnouncementDescription>{props.announcement}</AnnouncementDescription>
    </Fragment>
  );
};

export default Announcement;

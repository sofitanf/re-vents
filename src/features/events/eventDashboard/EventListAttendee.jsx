import React from "react";
import { Image, List } from "semantic-ui-react";

function EventListAttendee({ photoURL, id }) {
  return (
    <List.Item>
      <Image size="mini" circular src={photoURL} key={id} />
    </List.Item>
  );
}

export default EventListAttendee;

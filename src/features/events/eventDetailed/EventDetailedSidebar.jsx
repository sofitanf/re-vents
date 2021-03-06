import React from "react";
import { Segment, Item } from "semantic-ui-react";

function EventDetailedSidebar({ attendees }) {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees.length} {attendees.length > 1 ? "People" : "Person"} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => {
            const { photoURL, name } = attendee;
            return (
              <Item style={{ position: "relative" }}>
                <Item.Image size="tiny" src={photoURL || "/assets/user.png"} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <span>{name}</span>
                  </Item.Header>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Segment>
    </>
  );
}

export default EventDetailedSidebar;

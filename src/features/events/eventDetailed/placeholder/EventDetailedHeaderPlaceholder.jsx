import React from 'react';
import {
  Segment,
  Button,
  Placeholder,
  PlaceholderImage,
} from 'semantic-ui-react';

function EventDetailedHeaderPlaceholder() {
  return (
    <Placeholder fluid>
      <Segment.Group>
        <Segment basic attached='top' style={{ padding: '0' }}>
          <Placeholder style={{ height: '215px' }}>
            <PlaceholderImage />
          </Placeholder>
          <Segment>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          </Segment>
        </Segment>
        <Segment attached='bottom'>
          <Button disabled>Cancel My Place</Button>
          <Button disabled color='teal'>
            JOIN THIS EVENT
          </Button>
          <Button disabled color='orange' floated='right'>
            Manage Event
          </Button>
        </Segment>
      </Segment.Group>
    </Placeholder>
  );
}

export default EventDetailedHeaderPlaceholder;

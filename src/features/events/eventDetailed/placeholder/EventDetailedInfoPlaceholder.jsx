import React from 'react';
import { Placeholder, Segment } from 'semantic-ui-react';

function EventDetailedInfoPlaceholder() {
  return (
    <Placeholder fluid>
      <Segment.Group clearing>
        <Segment attached='top'>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Segment>
        <Segment attached>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Segment>
        <Segment attached>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Segment>
      </Segment.Group>
    </Placeholder>
  );
}

export default EventDetailedInfoPlaceholder;

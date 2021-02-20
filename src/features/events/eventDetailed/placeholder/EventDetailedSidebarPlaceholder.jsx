import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';

function EventDetailedSidebarPlaceholder() {
  return (
    <Placeholder fluid>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        People Going
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
    </Placeholder>
  );
}

export default EventDetailedSidebarPlaceholder;

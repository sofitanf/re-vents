import React from 'react';
import { Segment, Header, Button, Placeholder } from 'semantic-ui-react';

function EventDetailedChatPlaceholder() {
  return (
    <Placeholder fluid>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{ border: 'none' }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
        <Button
          content='Add Reply'
          labelPosition='left'
          icon='edit'
          primary
          disabled
          style={{ marginTop: 20 }}
        />
      </Segment>
    </Placeholder>
  );
}

export default EventDetailedChatPlaceholder;

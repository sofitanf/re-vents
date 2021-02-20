import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';

function EventFiltersPlaceholder() {
  return (
    <Placeholder fluid>
      <Segment.Group>
        <Segment>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Segment>
        <Segment style={{ minHeight: 120 }}>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
        </Segment>
      </Segment.Group>
    </Placeholder>
  );
}

export default EventFiltersPlaceholder;

import React from 'react';
import {
  Segment,
  Placeholder,
  PlaceholderImage,
  PlaceholderLine,
  Grid,
} from 'semantic-ui-react';

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
        <Grid>
          <Grid.Column width={4}>
            <Placeholder style={{ height: 80, width: 80 }}>
              <PlaceholderImage />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={10}>
            <Placeholder>
              <PlaceholderLine />
              <PlaceholderLine />
            </Placeholder>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={4}>
            <Placeholder style={{ height: 80, width: 80 }}>
              <PlaceholderImage />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={10}>
            <Placeholder>
              <PlaceholderLine />
              <PlaceholderLine />
            </Placeholder>
          </Grid.Column>
        </Grid>
      </Segment>
    </Placeholder>
  );
}

export default EventDetailedSidebarPlaceholder;

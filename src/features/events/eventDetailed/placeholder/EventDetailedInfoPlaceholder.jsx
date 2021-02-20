import React from 'react';
import {
  Placeholder,
  Segment,
  Grid,
  PlaceholderImage,
  PlaceholderLine,
} from 'semantic-ui-react';

function EventDetailedInfoPlaceholder() {
  return (
    <Placeholder fluid>
      <Segment.Group clearing>
        <Segment attached='top'>
          <Grid>
            <Grid.Column width={1}>
              <Placeholder style={{ height: 30, width: 30 }}>
                <PlaceholderImage />
              </Placeholder>
            </Grid.Column>
            <Grid.Column width={10}>
              <Placeholder>
                <PlaceholderLine />
              </Placeholder>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid>
            <Grid.Column width={1}>
              <Placeholder style={{ height: 30, width: 30 }}>
                <PlaceholderImage />
              </Placeholder>
            </Grid.Column>
            <Grid.Column width={10}>
              <Placeholder>
                <PlaceholderLine />
              </Placeholder>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid>
            <Grid.Column width={1}>
              <Placeholder style={{ height: 30, width: 30 }}>
                <PlaceholderImage />
              </Placeholder>
            </Grid.Column>
            <Grid.Column width={10}>
              <Placeholder>
                <PlaceholderLine />
              </Placeholder>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </Placeholder>
  );
}

export default EventDetailedInfoPlaceholder;

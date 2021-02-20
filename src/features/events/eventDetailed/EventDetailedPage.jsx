import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { listenToEventFromFirestore } from '../../../app/firestore/firestoreService';
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc';
import { listenToEvents } from '../eventActions';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import EventDetailedChatPlaceholder from './placeholder/EventDetailedChatPlaceholder';
import EventDetailedHeaderPlaceholder from './placeholder/EventDetailedHeaderPlaceholder';
import EventDetailedInfoPlaceholder from './placeholder/EventDetailedInfoPlaceholder';
import EventDetailedSidebarPlaceholder from './placeholder/EventDetailedSidebarPlaceholder';

function EventDetailedPage({ match }) {
  const dispatch = useDispatch();
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id],
  });

  if (error) return <Redirect to='/error' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading || (!event && !error) ? (
          <>
            <EventDetailedHeaderPlaceholder />
            <EventDetailedInfoPlaceholder />
            <EventDetailedChatPlaceholder />
          </>
        ) : (
          <>
            <EventDetailedHeader {...event} />
            <EventDetailedInfo {...event} />
            <EventDetailedChat />
          </>
        )}
      </Grid.Column>
      <Grid.Column width={6}>
        {loading || (!event && !error) ? (
          <EventDetailedSidebarPlaceholder />
        ) : (
          <EventDetailedSidebar attendees={event?.attendees} />
        )}
      </Grid.Column>
    </Grid>
  );
}

export default EventDetailedPage;

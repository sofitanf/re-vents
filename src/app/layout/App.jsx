import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import ModalManager from '../common/modals/ModalManager';

export default function App() {
  const { key } = useLocation();
  return (
    <>
      <ModalManager />
      <Route path='/' exact component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/events' exact component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

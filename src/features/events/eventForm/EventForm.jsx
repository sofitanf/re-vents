import cuid from "cuid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";

function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const { title, category, description, city, venue, date } = values;
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Descritption"
            name="description"
            value={description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="submit" />
        <Button
          type="submit"
          floated="right"
          content="cancel"
          as={Link}
          to="/events"
        />
      </Form>
    </Segment>
  );
}

export default EventForm;

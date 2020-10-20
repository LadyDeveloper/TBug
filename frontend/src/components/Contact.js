import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Form className="contact" id="contact">
      <h1>Contact us</h1>
      <p>
        If you want more information about what we are doing, prices, sign up,
        and so on...
      </p>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="First and Last Name" />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="@email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Type your message" />
      </Form.Group>
      <Button className='contact-button' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;

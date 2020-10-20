import React from "react";
import { Container, Card, CardColumns } from "react-bootstrap";

const About = () => {
  return (
    <Container className="card-container" >
      <h1>TBug</h1>
      <p>
        TBug tracker was created to assist daily taks managment. As life gets
        busier it is easy to lose track of time. We understand that time is
        money and managing it poorly means wast of money. In order to help
        develpment teams succed in their projects as well Project's Managers,
        TBug was created. Tracking time and bugs in each project become easy.
      </p>
      <CardColumns>
        <Card>
          <Card.Body>
            <Card.Title>Track your time</Card.Title>
          </Card.Body>

          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/time.png"}
          />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Project Management</Card.Title>
          </Card.Body>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/project.png"}
          />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Track bugs</Card.Title>
          </Card.Body>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/repo.png"}
          />
        </Card>
      </CardColumns>
    </Container>
  );
};

export default About;

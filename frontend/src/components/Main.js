import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Container className='main' id='home'>
      <Row className="justify-content-md-center">
      <Col className='main-left'>
          <h1>Welcome to <span>TBug</span></h1>
          <p>Are you tired of wasting time, not knowing were you spent the majority of your time. Start today tracking your time. Add projects or tags.</p>
          <Button variant="outline-info">Start today!</Button>
      </Col>
        <Col>
          <Image
            src={
                process.env.PUBLIC_URL + '/images/dev.png'
            }
          fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

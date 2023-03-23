import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Container } from "react-bootstrap";
import Restaurant from "./Restaurant";

function Carosal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <h4>Restaurant List</h4>
          <Restaurant />
        </Col>
        <Col xs={9}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/One.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Biryani</h3>
                <p>How can you end your day without Biryani</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/two.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Mocktails</h3>
                <p>Hot Summer Cool Timepass with Friends</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/three.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Masala Dose</h3>
                <p>Start your day with star of the day</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/four.jpg"
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Chicken Burger</h3>
                <p>Mc Donalds Spicy Chicken Burgers for Evenings</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Carosal;

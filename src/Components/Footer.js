import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light pt-4">
      <Container>
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Street, Eluru, Andhrapradesh 12345</li>
              <li>Phone: +91 9000000000</li>
              <li>Email: query@foodtogo.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Food To GO is a Online Food ordering website that helps you
              discover the best restaurants in your area. We provide delicious
              items and quick services from the local restaurants, so you can
              have a food feast at your place within no time.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;

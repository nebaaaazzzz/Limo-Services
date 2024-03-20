import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-lg-around justify-content-center text-center text-lg-start">
          <Col lg="4" md="6" sm="12" >
            <div className="logo footer__logo ">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    ABC
                    <br />
                    Limo
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content text-start">
              Seamless Journeys, Memorable Moments: Discover Your GoTo Seattle Limo Service, Where Every Ride Guarantees a Smooth Experience and Every
              Destination Becomes a Cherished Memory. Let Us Be Your Bridge to Seattle's Best, One
              Effortless Trip at a Time.
            </p>
          </Col>

          <Col lg="2" md="3" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="3" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contact info</h5>
              <p className="office__info">Phone: <a className="text-decoration-none" href="tel:+1 (206)-972-7000">+1 (206)-972-7000</a></p>
              <p className="office__info">Email: <a href="mailto:info@abclimo.com" className="text-decoration-none">{" "} info@abclimo.com</a></p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright 2023, Developed by
                <a href="http://fejleszto-tech.com/" target="_blank">
                  Fejlesztő technology
                </a>
                . All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

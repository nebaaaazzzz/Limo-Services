import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import safety from "../assets/all-images/1673929460399.png";
import excellence from "../assets/all-images/1588874708538.jpeg";
import luxury from "../assets/all-images/luxury.jpg";
import customer from "../assets/all-images/limo-airport.webp";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutclassName="aboutPage" />

      <section className="about__page-section py-1">
        <Container>
          <Row>
            <div className="col-lg-6 my-1">
              <p>
                <img src={safety} alt="" style={{ float: "left", marginRight: '10px' }} className="col-12 col-md-5 col-lg-4 rounded-3" />
                <strong>Safety and Security : </strong> In Seattle's Ever-Changing Landscape, Our
                Limousine Service Stands as a Pillar of Safety and Security. We prioritize your well-being,
                integrating advanced safety features and thorough protocols to ensure every journey is a
                secure passage. With us, you're not just traveling; you're embraced by a commitment to your
                safety, allowing you to enjoy the city's beauty with peace of mind. Welcome to a service
                where security isn't just promised; it's delivered with every mile.</p>
            </div>
            <div className="col-lg-6 my-1">
              <p>
                <img src={customer} alt="" style={{ float: "left", marginRight: '10px' }} className="col-12 col-md-5 col-lg-4 rounded-3" />
                <strong>Exceptional customer service - </strong> In the Heart of Seattle’s Dynamic
                Spirit, Our Limousine Service Elevates Your Experience with Unmatched Customer Service.
                Here, Every Request is an Opportunity to Impress, and Every Ride a Chance to Exceed
                Expectations. With a Team as Attentive as They Are Expert, We Ensure Your Seattle Journeys
                are Smooth, Personalized, and Responsive to Your Unique Needs. Dive into a World Where
                Your Satisfaction is Our Blueprint for Success, and Exceptional Service is Just the Beginning.</p>
            </div>
            <div className="col-lg-6 my-1">
              <p>
                <img src={excellence} alt="" style={{ float: "left", marginRight: '10px' }} className="col-12 col-md-5 col-lg-4 rounded-3" />
                <strong>Professionalism and Excellence - </strong> Discover Seattle's Charm with a
                Service Synonymous with Professionalism and Excellence. Our Limousine Service Embarks on
                Every Journey with a Pledge to Deliver Beyond Expectations, Integrating Meticulous Attention
                to Detail with a Steadfast Commitment to Quality. Our Team, Champions of Expertise and
                Grace, Elevates Your Travel Experience, Ensuring Every Moment is Infused with Precision and
                Splendor. Welcome to a World Where Excellence is Not Just Pursued; It's Achieved, Making
                Every Ride with Us an Unforgettable Emblem of Professionalism.
              </p>
            </div>
            <div className="col-lg-6 my-1">
              <p>
                <img src={luxury} alt="" style={{ float: "left", marginRight: '10px' }} className="col-12 col-md-5 col-lg-4 rounded-3" />
                <strong>Luxury and Comfort - </strong> Explore Seattle with a Touch of Luxury and
                Comfort That Feels Just Right. Our Limousine Service is All About Giving You a Smooth,
                Enjoyable Ride Every Time. We've Focused on the Essentials: Spacious Interiors, Comfortable
                Seating, and a Quiet Ride, to Ensure You Can Sit Back, Relax, and Take in the Sights. It's the
                Perfect Blend of Simple Elegance and Practicality, Designed to Make Your Seattle Journeys
                Memorable for All the Right Reasons. Welcome to a Service Where Your Comfort is Our
                Priority, Without the Over-the-Top Extras.
              </p>
            </div>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default About;

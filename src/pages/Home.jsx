import React, { useEffect, useState } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";
import { useQuery } from "react-query";
import { getBlogs, getServices, getVehicles } from "../api";
import ErrorCM from "../components/Error/Error";
import Loading from "../components/Loading";
import Blog from "./Blog";

const Home = () => {
  const [services, setServices] = useState(null);
  const [isServiceLoading, setServiceLoading] = useState(false);
  const [serviceError, setServiceError] = useState(null);
  // same for blog
  const [blogs, setBlogs] = useState(null);
  const [isBlogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState(null);
  // same for vehicle
  const [vehicles, setVehicles] = useState(null);
  const [isVehicleLoading, setVehicleLoading] = useState(false);
  const [vehicleError, setVehicleError] = useState(null);
  useEffect(() => {
    const fetchServices = async () => {
      setServiceLoading(true);
      setServiceError(null);
      try {
        const data = await getServices();
        setServices(data);
        setServiceLoading(false);
      } catch (error) {
        setServiceLoading(false);
        setServiceError(error.message);
      }
    }
    const fetchBlogs = async () => {
      setBlogLoading(true);
      setBlogError(null);
      try {
        const data = await getBlogs();
        setBlogs(data);
        setBlogLoading(false);
      } catch (error) {
        setBlogLoading(false);
        setBlogError(error.message);
      }
    }
    const fetchVehicles = async () => {
      setVehicleLoading(true);
      setVehicleError(null);
      try {
        const data = await getVehicles();
        setVehicles(data);
        setVehicleLoading(false);
      } catch (error) {
        setVehicleLoading(false);
        setVehicleError(error.message);
      }
    }
    fetchServices();
    fetchBlogs();
    fetchVehicles();
    return () => { };
  }, []);
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container className="yellow__thing">
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <div className="col">
              {
                isServiceLoading && <Loading />
              }
              {
                serviceError && <ErrorCM errorMessage={serviceError} />
              }
              {
                services && <ServicesList services={services} />
              }
            </div>
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              {/* <h6 className="section__subtitle">Come with</h6> */}
              <h2 className="section__title">Our Limo Cars</h2>
            </Col>

            {
              isVehicleLoading && <Loading />
            }
            {
              vehicleError && <ErrorCM errorMessage={vehicleError} />
            }
            {
              vehicles && (vehicles).map((vehicle, index) => (
                <CarItem item={vehicle} key={index} />
              ))
            }
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      {/* <BecomeDriverSection /> */}

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            {
              isBlogLoading && <Loading />
            }
            {
              blogError && <ErrorCM errorMessage={blogError} />
            }
            {
              blogs && <BlogList blogs={blogs} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

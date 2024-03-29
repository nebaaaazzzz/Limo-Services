import { Link } from "react-router-dom";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "../styles/contact.css";
import { contactFormMail } from "../api";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },

  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await contactFormMail({ name, email, phone, message });
    setIsLoading(false);
    toast.success("Message sent, We will contact you shortly", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    form.current.reset();
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              {
                isLoading ? <div
                  style={{
                    display: "flex",
                    width: "100%",
                    aspectRatio: "3 / 1",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="spinner-border spinner-border-lg text-primary"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                  :
                  <form ref={form} onSubmit={sendEmail}>
                    <FormGroup className="contact__form">
                      <Input
                        value={name}
                        placeholder="Full Name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        name="user_name"
                      />
                    </FormGroup>
                    <FormGroup className="contact__form">
                      <Input
                        value={email}
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        name="user_email"
                      />
                    </FormGroup>
                    <FormGroup
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="contact__form"
                    >
                      <Input placeholder="Phone" type="text" name="user_phone" />
                    </FormGroup>
                    <FormGroup className="contact__form">
                      <textarea
                        rows="5"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        placeholder="Message"
                        className="text_area"
                        name="message"
                      ></textarea>
                    </FormGroup>
                    <input className="contact__btn" type="submit" value="Send" />
                  </form>
              }
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0"> <a className="text-decoration-none text-dark" href="tel:+1(206)-972-7000">+1(206)-972-7000</a></p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0"><a className="text-decoration-none text-dark" href="mailto:info@abclimo.com">info@abclimo.com</a></p>
                </div>

                {/* <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;

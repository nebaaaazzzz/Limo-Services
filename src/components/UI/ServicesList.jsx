import React from "react";
import "../../styles/services-list.css";
import { Link } from "react-router-dom";

const ServicesList = (props) => {
  // change service data to data from database
  // console.log(props);
  return (
    <div className="row justify-content-around">
      {props.services && props.services.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const ServiceItem = ({ item }) => (
  <Link to={`/services/${item.id}`} className="text-decoration-none col-12 col-md-4 col-lg-3 mb-2 ">
    <div className="card" >
      <img className="card-img-top" src={item.img} alt="Card image cap" />
      <div className="card-body">


        <h5 className="card-title blog__title" >{item.title}</h5>
        <button className="btn btn-outline-dark col-12 d-flex justify-content-center align-items-center">
          Details {" "}  <i className="ri-arrow-right-s-fill px-2 ri-lg"></i>
        </button>
      </div>
    </div>
  </Link>
);

export default ServicesList;

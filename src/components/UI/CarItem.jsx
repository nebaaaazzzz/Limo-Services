import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { BASE_URL } from "../../api";

const CarItem = (props) => {
  //TODO ADD  SPEED AND AUTOMATIC
  const { img, model, pricePerDay, automatic, name, speed, id } = props.item;

  return (
    <>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/cars/${id}`} className="btn btn-dark">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItem;

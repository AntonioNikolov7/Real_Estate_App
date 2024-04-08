import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img}></img>
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png"></img>
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <img src="/bed.png" alt=""></img>
            <span>{item.bedroom} bedroom</span>
          </div>
          <div className="features">
            <img src="/bath.png" alt=""></img>
            <span>{item.bathroom} bathroom</span>
          </div>
          <div className="features">
            <div className="icon">
              <img src="/save.png" alt=""></img>
            </div>
            <div className="icon">
              <img src="/chat.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

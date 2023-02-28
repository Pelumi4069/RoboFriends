import React from "react";
import './Card.css';

const Card = (props) => {
const {name, email, id } = props;

  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?200x200`} alt="_photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

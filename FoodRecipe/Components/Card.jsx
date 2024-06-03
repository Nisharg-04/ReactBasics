import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div>
      <h2>{data.title}X</h2>
      <h3>{data.publisher}</h3>
      <img src={data.image_url} alt={data.publisher} />
      <Link to={`/recipe-id/${data.id}`}>More Details</Link>
    </div>
  );
}

export default Card;

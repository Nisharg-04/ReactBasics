import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

function Details() {
  "";
  const { details, setDetails,addFav } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    async function fetchdetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      console.log(data.data);
      setDetails(data.data);
    }
    fetchdetails();
  }, []);
  return (
    <div>
     
      <h3>{details?.recipe.title}</h3>
      <img src={details?.recipe.image_url} alt={details?.recipe.title} />
      <button onClick={()=>{addFav(details?.recipe)}}>Add to Fav</button>
      {details?.recipe?.ingredients?.map((item, id) => {
        return (
          <div>
            <h4>{item.description}</h4>
            <h5>{item.quantity}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Details;

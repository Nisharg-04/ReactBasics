import React ,{ useContext } from "react";
import { GlobalContext } from "../Context";
import Card from "./Card";

function Fav() {
  const { fav } = useContext(GlobalContext);
  return (
    <div>
      {fav.map((data, i) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
}

export default Fav;

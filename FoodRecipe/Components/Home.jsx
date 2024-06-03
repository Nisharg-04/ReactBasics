import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Card from "./Card";

function Home() {
  const { recipe} = useContext(GlobalContext);
  return (
    <div>
      {recipe.map((data, i) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Nisharg-04")
      .then((responce) => responce.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div>Followers : {data.followers}</div>
      <img src={data.avatar_url} alt="" />
    </>
  );
}

export default Github;

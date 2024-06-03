import { createContext, useEffect } from "react";
import { useState } from "react";
export const GlobalContext = createContext(null);

export default function GolbalState({ children }) {
  const [searchPrams, setsearchPrams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [details, setDetails] = useState(null);
  const [fav, setfav] = useState([]);
  function addFav(currentid) {
    // console.log(currentid);
    const cpy = [...fav];
    const index = cpy.findIndex((item) => item.id === currentid.id);
    if (index === -1) {
      cpy.push(currentid);
      //   console.log(fav);
    } else {
      cpy.splice(index);
    }
    setfav(cpy);
  }
  console.log(fav);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchPrams}`
    )
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res?.data?.recipes);
        setLoading(true);
        setsearchPrams("");
      })
      .catch((error) => console.log(error));

  };

  return (
    <GlobalContext.Provider
      value={{
        searchPrams,
        setsearchPrams,
        handleSubmit,
        recipe,
        details,
        setDetails,
        addFav,
        fav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// import { createContext, useEffect } from "react";
// import { useState } from "react";
// export const GlobalContext = createContext(null);

// export default function GolbalState({ children }) {
//   const [searchPrams, setsearchPrams] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [recipe, setRecipe] = useState([]);
//   const [details, setDetails] = useState(null);
//   const [fav, setfav] = useState([]);
//   function addFav(currentid) {
//     // console.log(currentid);
//     const cpy = [...fav];
//     const index = cpy.findIndex((item) => item.id === currentid.id);
//     if (index === -1) {
//       cpy.push(currentid);
//     //   console.log(fav);
//     } else {
//       cpy.splice(index);
//     }
//     setfav(cpy);
//   }
// console.log(fav);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(
//         `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchPrams}`
//       );
//       const data = await res.json();
//       console.log(data);
//       if (data?.data?.recipes) {
//         setRecipe(data?.data?.recipes);
//         setLoading(true);
//         setsearchPrams("null");
//       }
//     } catch (error) {}
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         searchPrams,
//         setsearchPrams,
//         handleSubmit,
//         recipe,
//         details,
//         setDetails,
//         addFav,
//         fav,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// }

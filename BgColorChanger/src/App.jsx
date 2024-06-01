import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="w-full">
        <div
          className=""
          style={{
            backgroundColor: "white",
          }}
        >
          <button onClick={()=>setColor("red")} style={{
            backgroundColor:"aqua"
          }}>RED</button>
          <button onClick={()=>setColor("green")} style={{
            backgroundColor:"aqua"
          }}>Green</button>
          <button onClick={()=>setColor("aqua")} style={{
            backgroundColor:"aqua"
          }}>Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;

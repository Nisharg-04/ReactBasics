import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Fav from "../Components/Fav";
import Details from "../Components/Details";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/recipe-id/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

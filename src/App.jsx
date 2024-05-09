import React from "react";
import Inc from "./components/increment/Inc";
import Navbar from "./components/navbar/Navbar";
import Dec from "./components/decrement/Dec";
import Reset from "./components/reset/Reset";
import "./main.scss";

const App = () => {
  return (
    <div className="content">
      <div className="cards">
        <Inc />
        <Navbar />
        <Dec />
      </div>
      <Reset />
    </div>
  );
};

export default App;

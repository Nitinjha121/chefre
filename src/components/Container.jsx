import React from "react";
import "../styles/Container.css";
import Home from "./Home";
import Nav from "./Nav";

function Container() {
  return (
    <div className="container">
      <Nav />
      <Home />
    </div>
  );
}

export default Container;

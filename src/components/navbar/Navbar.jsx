import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

  return <h2>Navbar {count}</h2>;
};

export default Navbar;

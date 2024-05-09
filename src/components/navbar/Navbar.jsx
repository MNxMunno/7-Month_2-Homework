import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter);
  // console.log(count)
  return <h2>Navbar {0}</h2>;
};

export default Navbar;

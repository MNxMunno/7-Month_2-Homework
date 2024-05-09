import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dec } from "../../context/conterSlice";

const Inc = () => {
  const [iValue, setIValue] = useState("");
  const dispatc = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const numValue = parseInt(iValue);
    if (!isNaN(numValue)) {
      dispatc(dec(numValue));
    }
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="number"
          value={iValue}
          onChange={(e) => setIValue(e.target.value)}
          placeholder="Create number"
        />

        <button className="dec" onClick={() => dispatc(dec(1))}>
          Decrement
        </button>
      </form>
    </>
  );
};

export default Inc;

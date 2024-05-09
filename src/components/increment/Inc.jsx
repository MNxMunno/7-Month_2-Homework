import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inc } from "../../context/conterSlice";

const Inc = () => {
  const [iValue, setIValue] = useState("");
  const dispatc = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const numValue = parseInt(iValue);
    if (!isNaN(numValue)) {
      dispatc(inc(numValue));
    }
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="number"
          value={iValue}
          onChange={(e) => setIValue(e.target.value)}
        />

        <button onClick={() => dispatc(inc(1))}>Increment</button>
      </form>
    </>
  );
};

export default Inc;

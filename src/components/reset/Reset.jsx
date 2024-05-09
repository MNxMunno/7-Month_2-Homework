import React from "react";
import { useDispatch } from "react-redux";
import { res } from "../../context/conterSlice";

const Inc = () => {
  const dispatc = useDispatch();

  return (
    <div className="btn">
      <button onClick={() => dispatc(res())}>Reset</button>
    </div>
  );
};

export default Inc;

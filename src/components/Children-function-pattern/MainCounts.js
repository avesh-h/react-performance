import React, { useState } from "react";

const MainCounts = ({ children }) => {
  //PARENT LOCAL STATE
  const [count, setCount] = useState(0);

  // console.log("render parent");

  //COMPLEX FUNCTIONALITIES
  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => c - 1);

  //CHILDREN PATTERN AS A FUNCTION
  return children(count, setCount, handleDecrement, handleIncrement);
};

export default MainCounts;

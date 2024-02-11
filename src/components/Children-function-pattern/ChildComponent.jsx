import React from "react";

const ChildComponent = ({ setCount }) => {
  // console.log("render children");

  const handleIncrementByTwo = () => setCount((c) => c + 2);
  const handleIncrementByFive = () => setCount((c) => c + 5);

  return (
    <div>
      <button onClick={handleIncrementByFive}>Inc +5</button>
      <button onClick={handleIncrementByTwo}>Inc +2</button>
    </div>
  );
};

export default ChildComponent;

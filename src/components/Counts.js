import React, { useEffect, useState } from 'react';

const Counts = ({ num }) => {
  //It is wrong the initial value of the useState is not should be dependent on the props if we want the updated value of the props as initial value of the useState the we can use useEffect hook and set the value in callback function as below
  const [countState, setCountState] = useState(num);
  //Check here in console
  // console.log('counts--->', { num, countState });

  //HERE
  useEffect(() => {
    if (num) {
      setCountState(num);
    }
  }, [num]);

  return <div>child state: {countState}</div>;
};

export default Counts;

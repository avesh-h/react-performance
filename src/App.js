import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/Children-function-pattern/ChildComponent";
import MainCounts from "./components/Children-function-pattern/MainCounts";
import Counts from "./components/Counts";
import MainComponent from "./components/memo-children/MainComponent";

function App() {
  const [state, setState] = useState();
  // console.log("render main app");

  return (
    <div className="App">
      <h1>Initial state of useState as prop:</h1>
      {/* ----------------- Initial state of usestate as props logic understanding ---------------------  */}
      <button onClick={() => setState(Math.random(10))}>Click Me</button>
      <div>parent state: {state}</div>
      <Counts num={state} />
      <h1>Children function pattern :</h1>
      {/*---------------------- Children as a function pattern understanding ---------------------------------- */}
      {/* It is like mini context that we create here the all the complex logic we
      can put in the MainCounts component and use it inside the children */}
      <MainCounts>
        {(count, setCount, handleDecrement, handleIncrement) => {
          return (
            <div>
              <h2>{count}</h2>
              <button onClick={handleIncrement}>Increment by +1</button>
              <button onClick={handleDecrement}>Decrement by -1</button>
              <ChildComponent setCount={setCount} />
            </div>
          );
        }}
      </MainCounts>

      {/* ----------------------------Memo-children--------------------------------------- */}
      <MainComponent />
    </div>
  );
}

export default App;

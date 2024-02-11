import React, { useMemo } from "react";
import MemoChildren from "./MemoChildren";

// Theory of problem:

// The main issue is here the What if our MainComponent is re-render that will also make our MemoChildren component re-render aswell so it doesn't make sense to use React.memo on the MemoChildren component because here you can see MemoChildren is actually render <div>with some text</div> as a children prop and every render this children prop will always refrence to the new memory during comparision of before and after rendering of component, so it will always return false of shallow copy comparision so that's why it will also make re-render of MemoChildren component so here our memoization of MemoChildren component is failed.

// Solution

// So what we do here is that we use the useMemo hook to keep the same children prop memory refrence for every re-render, so every render it return the true during re-render and the children prop will not make re-render of the MemoChildren component.

const MainComponent = () => {
  const memoizedChildren = useMemo(() => {
    return <div>Render some text</div>;
  }, []);
  return (
    <MemoChildren>
      {/* <div>Render some text</div> */}
      {memoizedChildren}
    </MemoChildren>
  );
};

export default MainComponent;

import React, { useState } from "react";
import Button from "./Button";

// First basic understanding is we can send component as prop in any component , you can see in below example that we send the h2 txt as a component example in the button prop

// 2nd thing

// Lot of developer have question is in mind that this fancy button is always alerady rendered in the dom tree?

// Answer is no because it is outside the return statement which makes the render what will be on the dom tree because the fancy button is just element it has nothing to do with dom it will not be rendered onto the screen but the thing is that it will be re-initialize when the our parent component will be re-render.

const ParentButton = () => {
  const [state, setState] = useState(true);

  const fancyButton = (
    <button>
      <h3>#</h3>Fancy Button
    </button>
  );
  return <div>{state ? <Button icon={fancyButton} /> : null}</div>;
};

export default ParentButton;

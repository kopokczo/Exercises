import React, { useState } from "react";
import "../../app/globals.css";
import Example from "../gh/index";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((currentValue) => currentValue + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((currentValue) => currentValue - 1)}>
        Decrease
      </button>
      <input
        type="number"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button
        className="flex gap-2"
        onClick={() => setCount(Number(inputValue))}
      >
        <div>dupa</div>
        Reset
      </button>
      <Example />
    </div>
  );
};

export default Counter;

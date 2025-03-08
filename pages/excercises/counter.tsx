import React, { useState } from "react";

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
      <button onClick={() => setCount(Number(inputValue))}>Reset</button>
    </div>
  );
};

export default Counter;

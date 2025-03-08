import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [todoNumber, setTodoNumber] = useState(1);
  const [loadingState, setLoadingState] = useState<
    "idle" | "success" | "loading"
  >("idle");

  const fetchTodos = async () => {
    setLoadingState("loading");
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    setLoadingState("success");
  };

  useEffect(() => {
    fetchTodos();
  }, [todoNumber]);

  return (
    <>
      {/* {true && <div>prawda</div>}
      {false && <div>nieprawda</div>}
      {true ? <div>prawda</div> : <div>nieprawda</div>} */}
      {loadingState === "idle" && <div>idle...</div>}
      {loadingState === "loading" && <div>Loading...</div>}
      {loadingState === "success" && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button
        type="button"
        onClick={() => setTodoNumber((currentValue) => currentValue + 1)}
      >
        Fetch Next
      </button>
    </>
  );
};

export default DataFetcher;

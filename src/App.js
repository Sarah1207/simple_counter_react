import React, { useState } from "react";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app" data-testid="count">
      <h1> Simple Counter</h1>
      <div className="count_wrapper">
        <h2 className={count >= 0 ? "count_positive" : "count_negative"}>
          {count}
        </h2>
      </div>
      <div className="button_wrapper">
        <button onClick={() => setCount(count - 1)} className="button">
          -
        </button>
        <button onClick={() => setCount(count + 1)} className="button">
          +
        </button>
      </div>
    </div>
  );
}

export default App;

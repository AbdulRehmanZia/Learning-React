import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Welcome To My Counter</h1>
      <h2>(Min-Limit: 1) (Max-Limit: 500)</h2>
      <div id="counterResult">Counter Value: {counter}</div>
      <div id="counter">
        <div className="buttonGroup">
          <button onClick={() => setCounter(counter + 1)}>Add (+1)</button>
          <button onClick={() => setCounter(counter - 1)}>Subtract (-1)</button>
        </div>
        <div className="buttonGroup">
          <button onClick={() => setCounter(counter + 5)}>Add (+5)</button>
          <button onClick={() => setCounter(counter - 5)}>Subtract (-5)</button>
        </div>
        <div className="buttonGroup">
          <button onClick={() => setCounter(counter + 10)}>Add (+10)</button>
          <button onClick={() => setCounter(counter - 10)}>Subtract (-10)</button>
        </div>
        <div className="buttonGroup">
          <button onClick={() => setCounter(counter + 20)}>Add (+20)</button>
          <button onClick={() => setCounter(counter - 20)}>Subtract (-20)</button>
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css" 
import  {React, useState} from 'react'
function App() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(count => count + 1);
  }
  const decrease = () => {
    setCounter(count => count - 1);
  }
  const reset = () => {
    setCounter(count => 0);
  }
  return (
  <div className="counter">
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <div className="btnContainer">
      <button className="counterButton" onClick={increase}>Increase</button>
      <button className="counterButton" onClick={decrease}>Decrease</button>
      <button className="counterButton" onClick={reset}>reset</button>
    </div>
  </div>
  );
}


export default App;

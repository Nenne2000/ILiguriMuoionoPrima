import React, {useState} from "react";


const App = () => {

  const [counter, setCounter] = useState(0);

  const handlerCOunter = () => {
    setCounter(counter++);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter++)}>Click me!</button>
    </div>
  );
}

export default App;

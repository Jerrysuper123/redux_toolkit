import "./App.css";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlicer";

function App() {
  //*accessing store.js "counter" is the name of the reducer, counter.value is the state
  const count = useSelector((state) => state.counter.value);
  //dispatch action
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment+</button>
      <button onClick={() => dispatch(decrement())}>Decrement+</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment+33
      </button>
    </div>
  );
}

export default App;

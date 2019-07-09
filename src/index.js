import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));

// 1. Reducer to Return a New State
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return state = 0;
    default:
      return state;
  }
}

// 2. Store to Contain All the States
const store = createStore(counter);

// 3. Subscribe if State Changes
store.subscribe(() => {
  console.log(store.getState());
});

// 4. Dispatch an Action
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "DECREMENT"
});
store.dispatch({
  type: "RESET"
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

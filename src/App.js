import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Content from './redux/content';
import Counter from './redux/counter';
import "./App.css";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
      case "RESET":
          return {
            count: 0
          };
    default:
      return state;
  }
};

const reduxStore = createStore(
  reducer
)

function App() {
  return (
    <Provider store={reduxStore}>
    <div className="App App-header">
     <Content/>
     <Counter/>
    </div>
    </Provider>
  );
}

export default App;

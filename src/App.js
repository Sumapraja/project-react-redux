import React from "react";
// import {render} from 'react-dom'
import { Provider } from "react-redux";
import store from './redux/JS/store/index'

// import store from './redux/JS/store/index'
import App from './redux/JS/components/presentation/App'
import Content from './redux/content';
import Counter from './redux/counter';
import "./App.css";
// import Form from './redux/JS/components/container/form



function Apps() {
  return (
    <Provider store={store}>
    <div className="App App-header">
     <Content/>
     <Counter/>
     <App />
    </div>
    </Provider>
  );
}

export default Apps;

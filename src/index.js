import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Counter from "./Components/Counter/Counter";

const App = () => {
  return(
    <Counter />
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
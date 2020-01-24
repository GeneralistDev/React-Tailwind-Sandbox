import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import "./styles.scss";

function App() {
  debugger;
  return (
    <div className="App">
      <h1 className="text-red-600">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import RouterPathDefinition from './RouterPathDefinition'
import "./index.scss";

const App = () => (
  <RouterPathDefinition/>
);
ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.scss";

var mountNode = document.querySelector("#app");
ReactDOM.render(<App name="Jane" />, mountNode);
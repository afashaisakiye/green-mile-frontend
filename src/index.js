import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

var mountNode = document.querySelector("#app");
ReactDOM.render(<Router><App /></Router>, mountNode);
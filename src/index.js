import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
import UIContextProvider from "./context/UIContext"
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./signin.scss"
import "./styles.scss";
var mountNode = document.querySelector("#app");
ReactDOM.render(<Router><UIContextProvider><App /></UIContextProvider></Router>, mountNode);
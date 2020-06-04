import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./signin.scss"
import "./styles.scss";
import GeneralContexts from "./context/GeneralContexts";
let mountNode = document.querySelector("#app");
ReactDOM.render(<Router><GeneralContexts><App /></GeneralContexts></Router>, mountNode);
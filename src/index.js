import React from "react";
import ReactDOM from "react-dom";
import store from './store'
import { Provider } from 'react-redux';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import "regenerator-runtime/runtime";
import "./styles.scss";

let mountNode = document.querySelector("#app");
ReactDOM.render(
    <Provider store={store}> 
        <Router><App /></Router> </Provider>, mountNode);
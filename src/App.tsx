import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./app.scss";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import {
  RECEIVE_API_DATA,
  requestApi,
  REQUEST_API_DATA,
  REQUEST_API_DATA_1,
  RECEIVE_API_DATA_1,
} from "./redux/actions/action";
import Router from "./Router/BrowserRouter";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Hello from "./pages/Hello";

interface data {
  title: String;
}

const Any: React.FC = () => {
  const tasks = useSelector<any>((state) => state.tasks);
  console.log("tasks", tasks);
  return <h1> any</h1>;
};

const Yes: React.FC = () => {
  return <h1> any</h1>;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;

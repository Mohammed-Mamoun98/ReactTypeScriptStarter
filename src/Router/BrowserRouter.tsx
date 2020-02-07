import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Hello from "../pages/Hello";
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={About} path="/about" exact />
      <Route component={Hello} path="/hello" exact />
    </BrowserRouter>
  );
};

export default Router;

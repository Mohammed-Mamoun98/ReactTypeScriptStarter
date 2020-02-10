import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Hello from "../pages/Hello";
import Filter from "../pages/Filter";
import MultipleSelect from "../pages/Select";
import SideNav from "../components/SideNav";
import AnimationPG from "../pages/AnimationPlayground";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={About} path="/about" exact />
      <Route component={Hello} path="/hello" exact />
      <Route component={Filter} path="/filter" exact />
      <Route component={MultipleSelect} path="/select" exact />
      <Route component={SideNav} path="/side" exact />
      <Route component={AnimationPG} path="/anim" exact />
    </BrowserRouter>
  );
};

export default Router;

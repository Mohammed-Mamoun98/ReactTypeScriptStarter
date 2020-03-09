import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Hello from "../pages/Hello";
import Filter from "../pages/Filter";
import MultipleSelect from "../pages/Select";
import SideNav from "../components/SideNav";
import AnimationPG from "../pages/AnimationPlayground";
import Home from "../pages/Home";
import MultiOption from "../pages/MultiOption";
import Layout from "../pages/LayoutTest";
import HookTest from "../pages/memoTest";
import SelectorTest from "../pages/selectorTest";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={About} path="/about" exact />
      <Route component={Hello} path="/hello" exact />
      <Route component={Filter} path="/filter" exact />
      <Route component={MultipleSelect} path="/select" exact />
      <Route component={Home} path="/home" exact />
      <Route component={AnimationPG} path="/anim" exact />
      <Route component={MultiOption} path="/" exact />
      <Route component={Layout} path="/layout" exact />
      <Route component={HookTest} path="/hook" exact />
      <Route component={SelectorTest} path="/selector" exact />
    </BrowserRouter>
  );
};

export default Router;

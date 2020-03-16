import React from "react";
import { IRootState } from "../models/rootState";
import { useSelector } from "react-redux";

const UseStore = () => {
  const state = useSelector((state: IRootState) => state);

  return state;
};

export default UseStore;

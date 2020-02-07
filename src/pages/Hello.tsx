import React from "react";
import { useLocation } from "react-router-dom";

const Hello: React.FC = () => {
  const location = useLocation<any>();
  const { id = 0 } = location.state;
  return <div>{!!id && <h1>hello page id : {id}</h1>}</div>;
};

export default Hello;

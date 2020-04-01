import React from "react";
import { useLocation } from "react-router-dom";
import Navigator from "./../components/navigator/navigator";

const SubHeader = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Navigator path={pathname} />
    </>
  );
};

export default SubHeader;

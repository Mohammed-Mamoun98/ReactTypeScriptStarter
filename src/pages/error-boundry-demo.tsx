import React from "react";
import ErrorBoundry from "./../components/Error-boundry";
import UseError from "./../hooks/useError";

const FallBack = () => <>error is handled</>;

const ErroredCmp = () => {
  const a: any = {
    name: "ali",
  };
  return (
    <>
      <p>{a.name.lkanf.da}</p>
    </>
  );
};

const ErrorDemo = () => {
  return (
    <ErrorBoundry fallback={<FallBack />}>
      <ErroredCmp />
    </ErrorBoundry>
  );
};

export default ErrorDemo;

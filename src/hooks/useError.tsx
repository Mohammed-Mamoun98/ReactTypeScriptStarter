import React from "react";

interface UseError {
  children: any;
  fallBack: any;
}

const UseError = (Children: any) => {
  try {
    return <>{Children}</>;
  } catch (error) {
    return (
      <>
        <h2>error</h2>
      </>
    );
  }
};

export default UseError;

import React, { useState } from "react";

const HelloMemo = React.memo((props: any) => {
  React.useEffect(() => {
    console.log("rendered");
  });
  return <div className="">hello</div>;
});

export default HelloMemo;

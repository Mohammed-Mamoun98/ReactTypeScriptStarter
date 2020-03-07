import React, { useState } from "react";
import HelloMemo from "../components/hello";
const HookTest = (props: any) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  return (
    <div className="">
      <HelloMemo name={name} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>

      <input
        type="text"
        onChange={(e: any) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <p>{count}</p>
    </div>
  );
};

export default HookTest;

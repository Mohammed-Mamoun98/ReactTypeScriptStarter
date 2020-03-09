import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeMsg } from "../redux/actions/action";
import useFetch from "../hooks/useFetch";
interface IYes {
  count: number;
}
//hello world is only rerender only when it's props changing but without it it will rerender when parent state changed!
const HelloWorld = React.memo((props: IYes) => {
  console.log("hello world is rerender");

  return <p>hello</p>;
});

const Yes = (props: IYes) => {
  console.log("yes is rerenderd!");
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
      <p>yes counts : {count}</p>
    </div>
  );
};
const SelectorTest = (props: any) => {
  const [renders, setRenders] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [url, setUrl] = useState<string>(
    "https://jsonplaceholder.typicode.com/todos/2"
  );
  const [call, setCall] = useState<boolean>(false);

  const [data, loading] = useFetch(url, call);
  if (!!data) {
    console.log("data is here", data);
  }

  const dispatch = useDispatch();
  //when state change the compoent will rerender like setState
  const state = useSelector(state => state);

  console.log("store state is ", state);

  console.log("selector rerender");

  useEffect(() => {
    // setRenders(renders + 1);
  }, []);
  return (
    <div className="">
      {!!loading && <h3>loading...</h3>}
      <p>render count {renders}</p>
      <p>counter => {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCall(!call);
        }}
        style={{ padding: "1rem" }}
      >
        {" "}
        +
      </button>

      <button
        onClick={() => {
          dispatch(changeMsg("hello"));
        }}
        style={{ padding: "1rem" }}
      >
        {" "}
        change msg
      </button>
      <br />
      <input
        type="text"
        placeholder="Set url"
        onChange={(e: any) => {
          setUrl(e.target.value);
        }}
        value={url}
        style={{ minWidth: "20rem", minHeight: "3rem" }}
      />
      {!!data && <h3>{data.title}</h3>}
      <HelloWorld count={count} />
      <Yes count={count} />
    </div>
  );
};

export default SelectorTest;

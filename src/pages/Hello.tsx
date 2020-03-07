import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Hello: React.FC = () => {
  // const location = useLocation<any>();
  // const { id = 0 } = location.state;
  const [count, setCount] = React.useState<number>(0);
  let outerOpen = true;

  //if you clcik it the local open would  be true and when you pick it will rerender
  //so it would be false again but the outer open is true so when it has the first render we would setOpen(outerOpen) only when outer open chnages
  useEffect(() => {
    if (outerOpen) {
      setCount(1);
    }
  }, [outerOpen]);
  useEffect(() => {
    console.log("this is called once");
  }, []);
  // return <div>{!!id && <h1>hello page id : {id}</h1>}</div>;
  return (
    <div className="">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </div>
  );
};

export default Hello;

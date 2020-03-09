import React, { useState } from "react";
import HelloMemo from "../components/hello";
import axios from "axios";
import CustomSelect from "../components/customSelect";
const HookTest = (props: any) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<any>({});
  const sendRequest = async () => {
    const postRequest = await axios({
      method: "post",
      url: "http://localhost:5000/",
      data: {
        firstName: "Finn",
        lastName: "Williams"
      }
    });
    setData(postRequest.data);
    console.log("fetching ....");
  };
  console.log("current data is ", data);

  React.useEffect(() => {
    sendRequest();
  }, []);

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
      <div
        className=""
        style={{
          minWidth: "10rem",
          minHeight: "20vh",
          backgroundColor: "#666"
        }}
      >
        <CustomSelect name={name} />
      </div>
    </div>
  );
};

export default HookTest;

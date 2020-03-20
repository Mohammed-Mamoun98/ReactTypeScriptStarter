import React from "react";
import { Chip } from "@material-ui/core";
import Chart from "../components/donutChart";

const OptionsDiv = (props: any) => {
  return (
    <div
      className=""
      style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
    >
      {props.options.map((option: any) => (
        <Chip
          label={option}
          style={{ margin: "0.2rem" }}
          onDelete={() => {
            console.log("options : ", option);
          }}
        />
      ))}
    </div>
  );
};

const MultiOption = (props: any) => {
  const data = [
    {
      value: 50,
      color: "gray"
    },
    {
      value: 30,
      color: "blue"
    },
    {
      value: 20,
      color: "green"
    }
  ];
  return (
    <div
      className=""
      style={{
        minHeight: "50vh",
        backgroundColor: "#f4f4f4",
        minWidth: "50vw",
        maxWidth: "13rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* <OptionsDiv options={["hello", "world"]} /> */}

      <Chart data={data} />
    </div>
  );
};

export default MultiOption;

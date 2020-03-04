import React from "react";
import { Chip } from "@material-ui/core";

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
  return (
    <div
      className=""
      style={{
        minHeight: "50vh",
        backgroundColor: "#f4f4f4",
        minWidth: "5vw",
        maxWidth: "13rem"
      }}
    >
      <OptionsDiv options={["hello", "world"]} />
    </div>
  );
};

export default MultiOption;

import React from "react";
import { Chip, Button } from "@material-ui/core";
import Chart from "../components/donutChart";
import "../components/donut.css";
import LineDemo from "./../components/react-chart-js-2";
import { useLocation } from "react-router-dom";
import DialogDemo from "./../components/dialog/dialog";

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
  const [open, setOpen] = React.useState<boolean>(false);
  console.log("open", open);

  const data = [
    {
      value: 20,
      color: "green"
    },
    {
      value: 30,
      color: "blue"
    },
    {
      value: 50,
      color: "gray"
    }
  ];

  const location = useLocation();
  React.useEffect(() => {
    console.log("location", location);
  }, []);
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
      {/* <div
        className=""
        style={{ backgroundColor: "gray", position: "relative" }}
      >
        <p>hover me!</p>

        <div className="arrow-up"></div>
      </div>
      <Chart data={data} /> */}
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <DialogDemo
        open={open}
        onClickAway={() => {
          setOpen(false);
        }}
      />
      {/* <LineDemo /> */}
    </div>
  );
};

export default MultiOption;

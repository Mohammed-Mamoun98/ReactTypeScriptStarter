import React from "react";
import { Button } from "@material-ui/core";

const Card = (props: { style?: React.CSSProperties }) => (
  <div
    className=""
    style={{
      minWidth: "15rem",
      height: "10rem",
      backgroundColor: "blue",
      marginRight: "1rem",
      marginTop: "1rem",
      ...props.style
    }}
  ></div>
);

const Side = () => (
  <div
    className=""
    style={{
      minWidth: "37rem",
      minHeight: "20rem",
      backgroundColor: "blue",
      padding: "0.5rem"
    }}
  ></div>
);
const FlexGrid = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div
        style={{
          minWidth: "90rem",
          minHeight: "100vh",
          backgroundColor: "#AAAAAA",
          padding: "1.5rem"
        }}
      >
        <div
          className="hero-grid"
          style={{
            minHeight: "10rem",
            minWidth: "100%",
            backgroundColor: "#f4f4f4",
            marginBottom: "1rem",
            display: "flex"
          }}
        >
          <Button
            style={{ margin: "auto" }}
            onClick={() => {
              setShow(!show);
            }}
          >
            Toggle
          </Button>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "#fff",
            minHeight: "20rem",
            justifyContent: "space-between"
          }}
        >
          <div
            className=""
            style={{
              minWidth: "37rem",
              minHeight: "20rem",
              backgroundColor: "yellow",
              padding: "0.5rem"
            }}
          >
            <Card />
            <Card />
          </div>
          {show && <Side />}

          <div
            className=""
            style={{
              minWidth: "37rem",
              minHeight: "20rem",
              backgroundColor: "yellow",
              padding: "0.5rem"
            }}
          >
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexGrid;

import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./donut.css";

interface SingleValue {
  value: number;
  color: string;
}

interface DonutProps {
  data: SingleValue[];
}
const Chart = (props: DonutProps) => {
  const [progress, setProgress] = React.useState<number>(0);
  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 100 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const dataValues = props.data.map((sample: SingleValue) => sample.value);

  const reducer = (total: number, value: number) => (total += value);

  const findValue = (idx: number) => {
    return dataValues.slice(idx).reduce(reducer);
  };

  //first one is the largst percent
  //let all begin from the same origin but the bigger one we will add the other one values
  //scenario one
  //first one is 40% we will add the other to it so it should be 100%
  return (
    <>
      <div className="wrapper">
        {props.data.map((single: SingleValue, idx: number) => (
          <div className="otherChart">
            <CircularProgress
              variant="static"
              thickness={4}
              // color="primary"
              // value={progress > 40 ? 40 : progress}
              //we will add 40 + 35 +25
              //sum the values from it's index to the last index
              value={progress > findValue(idx) ? findValue(idx) : progress}
              size={100}
              style={{ color: single.color }}
            />
          </div>
        ))}
      </div>
      {/* 
        <div className="otherChart">
          <CircularProgress
            variant="static"
            // value={progress > 35 ? 35 : progress}
            //we will add 35 + 25
            value={progress > 60 ? 60 : progress}
            // color="secondary"
            thickness={4}
            size={100}
            style={{ color: "#f44556" }}
          />
        </div>

        <div className="otherChart">
          <CircularProgress
            variant="static"
            // value={progress > 15 ? 15 : progress}
            value={progress > 25 ? 25 : progress}
            thickness={4}
            size={100}
            style={{ color: "gray" }}
          />
        </div>

        <div className="otherChart">
          <CircularProgress
            variant="static"
            // value={progress > 25 ? 25 : progress}
            //it will stay as it is cuz it's the smallest
            value={progress > 10 ? 10 : progress}
            thickness={4}
            size={100}
            style={{ color: "#4f4" }}
          />
        </div>
      </div> */}
    </>
  );
};

export default Chart;

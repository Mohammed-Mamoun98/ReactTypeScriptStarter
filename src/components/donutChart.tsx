import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./donut.css";
const Chart = (props: any) => {
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
  return (
    <>
      <div className="wrapper">
        <div className="chart">
          <CircularProgress
            variant="static"
            thickness={7}
            color="primary"
            value={progress > 35 ? 35 : progress}
            size={100}
          />
        </div>

        <div>
          <CircularProgress
            variant="static"
            value={progress > 65 ? 65 : progress}
            color="secondary"
            thickness={7}
            size={100}
          />
        </div>
      </div>
    </>
  );
};

export default Chart;

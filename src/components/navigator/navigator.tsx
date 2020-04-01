import React from "react";
import { useHistory } from "react-router-dom";

interface INavigator {
  path: string;
}

const Arrow = () => (
  <div className="" style={{ margin: "0rem 0.4rem" }}>
    >
  </div>
);
const Navigator = (props: INavigator) => {
  const rawPath = props.path.substr(1); //full
  const history = useHistory();
  const paths = rawPath.split("/");

  const getPath = (index: number) => {
    const pathArray = paths.splice(0, index + 1);
    return pathArray.join("/");
  };

  return (
    <>
      <div className="" style={{ display: "flex" }}>
        {paths.map((value: string, index: number) => (
          <div className="" style={{ display: "flex" }}>
            <>
              <div
                className=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(`/${getPath(index)}`);
                }}
              >
                {value}
              </div>
              {index + 1 !== paths.length && <Arrow />}
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navigator;

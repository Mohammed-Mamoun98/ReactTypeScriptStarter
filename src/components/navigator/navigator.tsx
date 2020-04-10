import React from "react";
import { useHistory } from "react-router-dom";
import UseStore from "./../../hooks/useStore";
import { HistoryObject } from "../../redux/reducers/stateModels/tasksStateModel";
import { useDispatch } from "react-redux";
import { popHistory } from "./../../redux/actions/action";

//here you are going to get the history array which is an array of paths and names
//every single component will ref to the path of its object and have the name og its own
//when you click any btn that will send you to somewhere dont forget to push the stack
//clear the stack when click one of the side nav icons
//when click a previous one of the paths you should ref to its path and clearing it from the stack
//the clear mechanisme is about finding it's index in history and pop the stack history_length - it's_index Times
//for the navigator compoent titles are the pathNames of the history
//

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
  const dispatch = useDispatch();
  const history = useHistory();
  const paths = rawPath.split("/");
  const { historyStack } = UseStore().tasks;

  const getPath = (index: number) => {
    const pathArray = paths.splice(0, index + 1);
    return pathArray.join("/");
  };

  const findInexOf = (pathName: string) => {
    let N =
      historyStack.length -
      historyStack.findIndex((obj: HistoryObject) => obj.pathName === pathName);
    return N - 1;
  };

  return (
    <>
      <div className="" style={{ display: "flex" }}>
        {historyStack.map((pathObj: HistoryObject) => (
          <div className="" style={{ display: "flex" }}>
            <>
              <div
                className=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const times = findInexOf(pathObj.pathName);
                  dispatch(popHistory(times));
                  history.push(pathObj.path);
                }}
              >
                {pathObj.pathName}
              </div>
              {historyStack.length + 1 !== paths.length && <Arrow />}
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navigator;

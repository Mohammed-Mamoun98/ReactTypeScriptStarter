import {
  RECEIVE_API_DATA,
  REQUEST_API_DATA_1,
  RECEIVE_API_DATA_1,
  CHANGE_MSG,
  SET_THEME,
  PUSH_HISTORY,
  POP_HISTORY,
  CLEAR_HISTORY,
  TOGGLE_DRAWER,
} from "../actions/action";
import { Theme } from "./../../models/thtme";
import {
  initialStateValue,
  HistoryObject,
} from "./stateModels/tasksStateModel";
import { handleThemePick } from "./../actions/methods";

interface isType {
  tasks: Array<any>;
}

interface Task {
  title: string;
  id: number;
}
const task = {} as Task;
// const newTAsk = new task()

const popHistory = (history: HistoryObject[], times: number) => {
  for (let index = 0; index < times; index++) {
    history.pop();
  }
  return history;
};

type Todos = Array<Task>;

const todos: Todos = [{ id: 1, title: "" }];

const tasksReducer = (state = initialStateValue, action: any) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: !state.drawer,
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        historyStack: [],
      };

    case POP_HISTORY:
      const popedHistory = popHistory(state.historyStack, action.times);
      return {
        ...state,
        historyStack: popedHistory,
      };

    case PUSH_HISTORY:
      let arr = state.historyStack;
      arr.push(action.obj);
      return {
        ...state,
        historyStack: arr,
      };
    case "plus":
      return state.count + 1;
    case "minus":
      return state.count - 1;
    case RECEIVE_API_DATA:
      return action.data;
    case RECEIVE_API_DATA_1:
      return { ...state, data: action.data };
    case CHANGE_MSG:
      return { ...state, msg: action.msg };
    case SET_THEME:
      const theme = handleThemePick(action.theme);
      return { ...state, selectedTheme: action.theme, theme };
    default:
      return state;
  }
};
export default tasksReducer;

import {
  RECEIVE_API_DATA,
  REQUEST_API_DATA_1,
  RECEIVE_API_DATA_1,
  CHANGE_MSG,
  SET_THEME,
} from "../actions/action";
import { Theme } from "./../../models/thtme";
import { initialStateValue } from "./stateModels/tasksStateModel";
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

type Todos = Array<Task>;

const todos: Todos = [{ id: 1, title: "" }];

const tasksReducer = (state = initialStateValue, action: any) => {
  switch (action.type) {
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

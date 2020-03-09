import {
  RECEIVE_API_DATA,
  REQUEST_API_DATA_1,
  RECEIVE_API_DATA_1,
  CHANGE_MSG
} from "../actions/action";

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

const tasksReducer = (state: any = { msg: "helo" }, action: any) => {
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
    default:
      return state;
  }
};
export default tasksReducer;

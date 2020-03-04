import {
  RECEIVE_API_DATA,
  REQUEST_API_DATA_1,
  RECEIVE_API_DATA_1
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

const tasksReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case "plus":
      return state.count + 1;
    case "minus":
      return state.count - 1;
    case RECEIVE_API_DATA:
      console.log("api is called and data is ", action.data);
      return action.data;
    case RECEIVE_API_DATA_1:
      console.log("POST api is called and data is ", action);
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export default tasksReducer;

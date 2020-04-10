import { HistoryObject } from "../reducers/stateModels/tasksStateModel";

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const REQUEST_API_DATA_1 = "REQUEST_API_DATA_1";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const RECEIVE_API_DATA_1 = "RECEIVE_API_DATA_1";
export const CHANGE_MSG = "CHANGE_MSG";
export const SET_THEME = "SET_THEME";
export const PUSH_HISTORY = "PUSH_HISTORY";
export const POP_HISTORY = "POP_HISTORY";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});

export const popHistory = (times: number) => ({
  type: POP_HISTORY,
  times,
});

export const pushHistory = (obj: HistoryObject) => ({
  type: PUSH_HISTORY,
  obj,
});

export const setTheme = (theme: string) => ({
  type: SET_THEME,
  theme,
});

export const receiveData = (data: any) => ({
  type: RECEIVE_API_DATA,
  data: data,
});

export const requestApi = () => ({
  type: REQUEST_API_DATA,
});

export const requestApiPost = () => ({
  type: REQUEST_API_DATA_1,
});

export const receiveDatPost = (data: any) => ({
  type: RECEIVE_API_DATA_1,
  data: data,
});

export const changeMsg = (msg: string) => ({
  type: CHANGE_MSG,
  msg,
});

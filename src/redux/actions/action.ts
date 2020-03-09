export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const REQUEST_API_DATA_1 = "REQUEST_API_DATA_1";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const RECEIVE_API_DATA_1 = "RECEIVE_API_DATA_1";
export const CHANGE_MSG = "CHANGE_MSG";

export const receiveData = (data: any) => ({
  type: RECEIVE_API_DATA,
  data: data
});

export const requestApi = () => ({
  type: REQUEST_API_DATA
});

export const requestApiPost = () => ({
  type: REQUEST_API_DATA_1
});

export const receiveDatPost = (data: any) => ({
  type: RECEIVE_API_DATA_1,
  data: data
});

export const changeMsg = (msg: string) => ({
  type: CHANGE_MSG,
  msg
});

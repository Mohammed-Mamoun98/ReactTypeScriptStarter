export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const receiveData = (data: any) => ({
  type: RECEIVE_API_DATA,
  data: data
});

export const requestApi = () => ({
  type: REQUEST_API_DATA
});

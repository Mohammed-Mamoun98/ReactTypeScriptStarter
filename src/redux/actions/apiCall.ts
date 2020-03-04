export const fetchData = async () => {
  try {
    console.log("fiest call");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchDataPost = async () => {
  try {
    console.log("second call");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
  dispatch({
    type: "error",
    payload: {
      message: "An error occured.",
    },
  });
  console.log(getState());
});

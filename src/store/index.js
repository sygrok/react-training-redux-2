import redux, { createStore } from "redux";

const counterReducer = (
  state = { counter: 0, showCounter: true },
  action = { amount: 3 }
) => {
  // action = { amount: 3 } we didn't have to define amount but in order to give a start value ve did in action
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, // we have to add it in order to  keep the previous value
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter, // we have to add it in order to  keep the previous value
      showCounter: !state.showCounter, //this will invert the value
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;

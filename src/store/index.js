import redux, { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action = { amount: 5 }) {
      state.counter = state.counter + action.payload;
    },
    reset(state) {
      state.counter = state.counter = 0;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "isAuthenticated",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //they will be merged automatically to one main reducer
}); //configureStore allow us to merge reducers but in this app we don't need it actually

// dispatch actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

////////

//Old
// const counterReducer = (
//   state = { counter: 0, showCounter: true },
//   action = { amount: 3 }
// ) => {
//   action = { amount: 3 } we didn't have to define amount but in order to give a start value ve did in action
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter, we have to add it in order to  keep the previous value
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,  we have to add it in order to  keep the previous value
//       showCounter: !state.showCounter, this will invert the value
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

//export default store;

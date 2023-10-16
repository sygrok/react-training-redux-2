import { useState } from "react";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  //old
  // const dispatch = useDispatch();
  // const counter = useSelector((x) => x.counter);
  // const show = useSelector((x) => x.showCounter);
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  const dispatch = useDispatch();
  // const counter = useSelector((x) => x.counter);
  const counter = useSelector((x) => x.counter.counter); //since we have merged the slices, now we have to specify the name before accessing state
  const show = useSelector((x) => x.counter.showCounter);

  //dispatch actions
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(4));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {show && counter} --</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Custom Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
      <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
    </main>
  );
};

export default Counter;

//Redux in Class Based Components

// import { connect } from "react-redux";
// import classes from "./Counter.module.css";
// import { Component } from "react";

// class Counter extends Component {
//   increment() {
//     this.props.increment();
//   }

//   decrement() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.increment.bind(this)}>Increment</button>
//           <button onClick={this.decrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

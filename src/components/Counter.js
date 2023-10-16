// import { useState } from "react";
// import classes from "./Counter.module.css";
// import { useDispatch, useSelector } from "react-redux";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((x) => x.counter);
//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>-- {counter} --</div>
//       <div>
//         <button
//           onClick={() => {
//             dispatch({ type: "increment" });
//           }}
//         >
//           Increment
//         </button>
//         <button onClick={() => dispatch({ type: "decrement" })}>
//           Decrement
//         </button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

import { connect } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";

class Counter extends Component {
  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>-- {this.props.counter} --</div>
        <div>
          <button onClick={this.increment.bind(this)}>Increment</button>
          <button onClick={this.decrement.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

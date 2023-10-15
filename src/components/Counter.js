import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const toggleCounterHandler = () => {
    setCount(count + 1);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {count} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

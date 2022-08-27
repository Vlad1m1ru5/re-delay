import { useMemo, useState } from "react";
import { debounce, throttle } from "../lib/delay";
import styles from "./DelayInput.module.css";

function DelayInput({ delay, isDebounce }) {
  const [count, setCount] = useState(0);

  const handleClick = useMemo(() => {
    const callback = () => {
      setCount((count) => count + 1);
    };

    return isDebounce ? debounce(callback, delay) : throttle(callback, delay);
  }, [setCount, delay]);

  return (
    <button className={styles.userInput} onClick={handleClick}>
      count is {count}
    </button>
  );
}

DelayInput.defaultProps = {
  delay: 0,
  isDebounce: false,
};

export default DelayInput;

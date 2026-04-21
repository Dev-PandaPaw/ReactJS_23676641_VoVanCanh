import { useRecoilValue } from "recoil";
import { counterState } from "../recoil/atoms.js";

function CounterDisplay() {
  const count = useRecoilValue(counterState);

  return <p>Count: {count}</p>;
}

export default CounterDisplay;

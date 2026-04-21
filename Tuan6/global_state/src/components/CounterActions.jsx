import { useRecoilState } from "recoil";
import { counterState } from "../recoil/atoms.js";

function CounterActions() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tang</button>
      <button onClick={() => setCount(count - 1)}>Giam</button>
    </div>
  );
}

export default CounterActions;

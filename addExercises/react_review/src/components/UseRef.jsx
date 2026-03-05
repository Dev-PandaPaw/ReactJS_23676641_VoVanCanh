import { useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const [renderTime, setRenderTime] = useState(0);
  const renderCount = useRef(0);

  const handleIncrement = () => {
    renderCount.current += 1;
    setCount((prev) => prev + 1);
    setRenderTime(renderCount.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render time: {renderTime}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export default UseRef;

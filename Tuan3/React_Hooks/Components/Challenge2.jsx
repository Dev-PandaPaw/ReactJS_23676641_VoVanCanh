import { useEffect, useState } from "react";

function Challenge2() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  // update
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ maxWidth: 480, margin: "20px auto", textAlign: "center" }}>
      <h2>Challenge 2 - useEffect co ban</h2>
      <p>Digital Clock</p>
      <h1>{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Challenge2;

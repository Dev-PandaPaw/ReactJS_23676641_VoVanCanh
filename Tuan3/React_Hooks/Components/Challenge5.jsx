import { useEffect, useRef, useState } from "react";

const formatTime = (ms) => {
  const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const milli = String(ms % 1000).padStart(3, "0");
  return `${minutes}:${seconds}.${milli}`;
};

function Challenge5() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapName, setLapName] = useState("");
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => prev + 10);
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setElapsed(0);
    setLaps([]);
    setLapName("");
  };

  const addLap = () => {
    // focus ref
    inputRef.current?.focus();

    if (elapsed === 0) return;

    setLaps((prev) => [
      {
        id: Date.now(),
        name: lapName.trim() || `Lap ${prev.length + 1}`,
        time: elapsed,
      },
      ...prev,
    ]);

    setLapName("");
  };

  // cleanup interval khi unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ maxWidth: 640, margin: "20px auto" }}>
      <h2>Challenge 5 - Stopwatch</h2>
      <h1>{formatTime(elapsed)}</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          ref={inputRef}
          value={lapName}
          onChange={(e) => setLapName(e.target.value)}
          placeholder="Lap name"
        />
        <button onClick={addLap}>Add Lap</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {laps.map((lap) => (
          <li key={lap.id} style={{ marginBottom: 6 }}>
            {lap.name}: <strong>{formatTime(lap.time)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenge5;

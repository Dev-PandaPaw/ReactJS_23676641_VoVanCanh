import { useEffect, useRef, useState } from "react";

function Challenge1_2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchedRef = useRef(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Fetch users failed");

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setUsers([]);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    fetchUsers();
  }, []);

  return (
    <div style={{ maxWidth: 720, margin: "20px auto" }}>
      <h2>Buoi 4 - Challenge 1_2</h2>

      {loading && <p>Loading users...</p>}

      {!loading && error && (
        <div>
          <p style={{ color: "crimson" }}>Error: {error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: 8 }}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Challenge1_2;

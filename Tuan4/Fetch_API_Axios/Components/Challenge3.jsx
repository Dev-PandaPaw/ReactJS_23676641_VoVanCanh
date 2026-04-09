import { useEffect, useState } from "react";

function Challenge3() {
  const [userId, setUserId] = useState("1");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = Number(userId);

    // ràng buộc
    if (!Number.isInteger(id) || id < 1 || id > 10) {
      setUser(null);
      setError("User not found");
      return;
    }

    const fetchUserById = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setUser(null);
        setError(err.message || "User not found");
      } finally {
        setLoading(false);
      }
    };

    fetchUserById();
  }, [userId]);

  return (
    <div style={{ maxWidth: 720, margin: "20px auto" }}>
      <h2>Buoi 4 - Challenge 3</h2>
      <h3>Dynamic Fetch theo userId</h3>

      <div style={{ marginBottom: 12 }}>
        <label>User ID (1-10): </label>
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      {loading && <p>Loading user...</p>}
      {!loading && error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && !error && user && (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default Challenge3;

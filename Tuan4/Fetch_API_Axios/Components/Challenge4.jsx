import { useEffect, useMemo, useRef, useState } from "react";

function Challenge4() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Fetch posts failed");

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  //memo
  const filteredPosts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return posts;

    return posts.filter((post) => post.title.toLowerCase().includes(keyword));
  }, [posts, search]);

  return (
    <div style={{ maxWidth: 820, margin: "20px auto" }}>
      <h2>Buoi 4 - Challenge 4</h2>
      <h3>Fetch + Search + Filter</h3>

      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: 12 }}
      />

      {loading && <p>Loading posts...</p>}
      {!loading && error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      {!loading && !error && (
        <div>
          <p>
            Total: <strong>{filteredPosts.length}</strong> / {posts.length}
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {filteredPosts.slice(0, 30).map((post) => (
              <li key={post.id} style={{ marginBottom: 8 }}>
                <strong>{post.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Challenge4;

import { useReducer } from "react";

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const initialState = {
  status: "idle",
  users: [],
  error: "",
};

// reducer pure function
const usersReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        status: "loading",
        error: "",
      };

    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        status: "success",
        users: action.payload,
        error: "",
      };

    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    default:
      return state;
  }
};

function Challenge6() {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: ACTIONS.FETCH_START });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Fetch users failed");

      const data = await res.json();
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ACTIONS.FETCH_ERROR, payload: err.message });
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "20px auto" }}>
      <h2>Challenge 6 - Fetch Users State Machine</h2>
      <p>Status: <strong>{state.status}</strong></p>

      {state.status === "idle" && (
        <button onClick={fetchUsers}>Load users</button>
      )}

      {state.status === "loading" && <p>Loading users...</p>}

      {state.status === "success" && (
        <>
          <button onClick={fetchUsers} style={{ marginBottom: 10 }}>Reload</button>
          <ul>
            {state.users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </>
      )}

      {state.status === "error" && (
        <>
          <p style={{ color: "crimson" }}>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}
    </div>
  );
}

export default Challenge6;

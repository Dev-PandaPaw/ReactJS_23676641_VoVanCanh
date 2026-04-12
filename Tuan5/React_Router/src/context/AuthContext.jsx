import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: "user" });
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

import { createContext, useContext, useState } from "react";

const ShopContext = createContext(null);

function ShopProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = () => setUser({ name: "user" });
  const logout = () => setUser(null);
  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return <ShopContext.Provider value={{ user, cart, login, logout, addToCart }}>{children}</ShopContext.Provider>;
}

function useShop() {
  return useContext(ShopContext);
}

export { ShopProvider, useShop };

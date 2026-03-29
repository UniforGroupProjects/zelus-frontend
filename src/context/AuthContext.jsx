import { createContext, useEffect, useState } from "react";
import { loginRequest } from "../services/authService";
import { saveAuth, getAuth, clearAuth } from "../storage/authStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { user } = getAuth();
    if (user) setUser(user);
  }, []);

  const login = async (email, password) => {
    const data = await loginRequest(email, password);

    setUser(data.user);
    saveAuth(data);
  };

  const logout = () => {
    setUser(null);
    clearAuth();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
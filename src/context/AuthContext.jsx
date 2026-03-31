import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedToken = localStorage.getItem("zelus_token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
          setUser(JSON.parse(storedUser));
        }
    setLoading(false);
  }, []);

  async function login(email, password) {
    try {
      const data = await loginRequest(email, password);
      const userData = { email, token: data.access_token };

      setUser(userData);

      localStorage.setItem("zelus_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(userData));
      return true; 
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("zelus_token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
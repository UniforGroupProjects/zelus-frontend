import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Bom para evitar flash de tela
  
  useEffect(() => {
    // 1. Ao carregar o site, vemos se tem um token salvo
    const storedToken = localStorage.getItem("zelus_token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
          setUser(JSON.parse(storedUser));
        }
    setLoading(false);
  }, []);

  async function login(email, password) {
    try {
      // Chama o Back-end
      const data = await loginRequest(email, password);
      // O 'data' contém { access_token, token_type }
      // Aqui você poderia buscar os dados do usuário ou extrair do token
      const userData = { email, token: data.access_token };

      setUser(userData);

      // 3. Salva o Token e os dados básicos no navegador
      localStorage.setItem("zelus_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(userData));
      return true; // Para o componente de login saber que deu certo
    } catch (error) {
      console.error("Erro no login:", error);
      throw error; // Repassa o erro para o formulário mostrar ao usuário
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("zelus_token");
    localStorage.removeItem("user");
  }

  return (
    // Passamos o 'loading' também para o App saber quando terminar de checar o login
    <AuthContext.Provider value={{ user, login, logout, loading, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
import { useState } from "react"; // 1. IMPORTANTE: Adicione o useState
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // 2. Criamos as "caixinhas" para guardar o que o usuário digita
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { login } = useAuth();
  const navigate = useNavigate();
  // 3. A função agora recebe o evento (e) e é asíncrona (async)
  async function handleLogin(e) {
    e.preventDefault(); // Impede a página de recarregar
    try {
      // 4. Passamos o email e senha para a função login do Contexto
      await login(email, password); 
      
      // Se deu certo, ele navega para o mapa
      navigate("/map");
    } catch (error) {
      // Se a senha estiver errada, o erro do Back-end cai aqui
      alert("Erro ao entrar: Verifique suas credenciais.");
    }
  }

return (
    <div style={{ padding: "20px" }}>
      <h2>Login Zelus</h2>
      
      {/* 5. Usamos um formulário para o 'Enter' do teclado também funcionar */}
      <form onSubmit={handleLogin}>
        <div>
          <label>E-mail</label><br/>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
            required 
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Senha</label><br/>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado
            required 
          />
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Entrar no Sistema
        </button>
      </form>
    </div>
  );
}
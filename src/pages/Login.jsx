import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
     
      await login(email, password); 
      
     
      navigate("/nova-denuncia");
    } catch (error) {
      alert("Erro ao entrar: Verifique suas credenciais.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f8e9] px-7 font-sans">
      {/* 🟦 Layout Mais Quadrado: Alterado para rounded-md e py-16 para mais espaço vertical */}
      <div className="bg-white px-15 py-20- rounded-md shadow-2xl w-full max-w-md border-t-8 border-[#2e7d32]">
        
        {/* ✨ Mais Espaço: mb-16 afasta o cabeçalho do formulário */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-[#2e7d32] tracking-tighter">Zelus</h2>
          <p className="text-gray-600 mt-4 text-xl">Cuidando da nossa cidade juntos</p>
        </div>
        
        {/* ✨ Mais Espaço: space-y-10 aumenta a distância entre os campos */}
        <form onSubmit={handleLogin} className="space-y-50">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">E-mail</label>
            <input 
              type="email" 
              className="w-full px-5 py-4 rounded-md border border-gray-200 focus:border-[#4caf50] focus:ring-4 focus:ring-[#4caf50]/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Senha</label>
            <input 
              type="password" 
              className="w-full px-5 py-4 rounded-md border border-gray-200 focus:border-[#4caf50] focus:ring-4 focus:ring-[#4caf50]/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#2e7d32] text-white py-4 rounded-md font-bold text-xl hover:bg-[#1b5e20] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-green-200 mt-10"
          >
            Entrar no Sistema
          </button>
        </form>

        <p className="text-center mt-12 text-sm text-gray-400">
          Proteção de rotas autenticadas ativa
        </p>
      </div>
    </div>
  );
}
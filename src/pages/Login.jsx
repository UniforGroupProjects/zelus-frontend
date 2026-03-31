import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) navigate("/");
    else alert("Erro ao entrar. Verifique suas credenciais.");
  };

  return (
    <div className="min-h-screen bg-[#f1f8e9] flex items-center justify-center p-6">
      {/* Aumentei para max-w-lg e p-12 */}
      <div className="bg-white p-10 md:p-16 shadow-2xl w-full max-w-xl border-t-8 border-[#2e7d32] rounded-3xl text-center">
        <h1 className="text-6xl font-black text-[#2e7d32] mb-2 tracking-tighter">Zelus</h1>
        <p className="text-xl text-gray-500 mb-12 font-medium">Cuidando da nossa cidade juntos</p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-black text-gray-400 uppercase mb-2 ml-1">E-mail</label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#2e7d32] outline-none text-lg transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-black text-gray-400 uppercase mb-2 ml-1">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#2e7d32] outline-none text-lg transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-[#2e7d32] text-white font-black text-xl rounded-2xl shadow-lg hover:bg-black transition-all transform active:scale-95 mt-4"
          >
            Entrar no Sistema
          </button>
        </form>
        
        <p className="mt-8 text-xs text-gray-300 font-bold uppercase tracking-widest">
          Proteção de rotas autenticadas ativa
        </p>
      </div>
    </div>
  );
}
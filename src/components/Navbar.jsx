import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  // Cria um efeitinho visual: sublinha o texto se você estiver na página dele
  const isActive = (path) => 
    location.pathname === path ? "underline decoration-2 underline-offset-8" : "opacity-80 hover:opacity-100";

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#2e7d32] text-white shadow-md w-full sticky top-0 z-50">
      
      {/* Lado Esquerdo: Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold flex items-center gap-2 cursor-pointer hover:scale-105 transition"
      >
        🌿 ZELUS
      </div>

      {/* Lado Direito: Menu e Autenticação */}
      {user ? (
        <div className="flex items-center gap-8">
          
          {/* Nossos links de navegação das Issues (Só aparecem se logado) */}
          <div className="flex gap-6 font-bold text-lg">
            <button onClick={() => navigate("/")} className={`transition ${isActive("/")}`}>
              Início
            </button>
            <button onClick={() => navigate("/nova-denuncia")} className={`transition ${isActive("/nova-denuncia")}`}>
              + Denunciar
            </button>
            <button onClick={() => navigate("/perfil")} className={`transition ${isActive("/perfil")}`}>
              Perfil
            </button>
          </div>

          {/* Divisória visual para separar os links do nome do usuário */}
          <div className="h-8 w-px bg-green-400 opacity-50"></div>

          {/* Sua lógica original de usuário e logout */}
          <span className="font-semibold text-lg">
            Olá, {user.name || "Cidadão"}
          </span>

          <button
            onClick={logout}
            className="bg-white text-[#2e7d32] px-6 py-2 rounded-full font-bold hover:scale-105 transition shadow-sm"
          >
            Sair
          </button>
        </div>
      ) : (
        /* Se NÃO estiver logado, sua lógica original de Acessar */
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-[#2e7d32] px-6 py-2 rounded-full font-bold hover:scale-105 transition shadow-sm"
        >
          Acessar
        </button>
      )}
      
    </nav>
  );
}
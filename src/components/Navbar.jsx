import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => 
    location.pathname === path ? "underline decoration-2 underline-offset-8" : "opacity-80 hover:opacity-100";

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#2e7d32] text-white shadow-md w-full sticky top-0 z-50">
      
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold flex items-center gap-2 cursor-pointer hover:scale-105 transition"
      >
        🌿 ZELUS
      </div>

      {user ? (
        <div className="flex items-center gap-8">
          
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

          <div className="h-8 w-px bg-green-400 opacity-50"></div>

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
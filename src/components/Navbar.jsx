import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#2e7d32] text-white shadow-md w-full">
      
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
      >
        🌿 ZELUS
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="font-semibold text-lg">
            Olá, {user.name}
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
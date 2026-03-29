import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-700 text-white shadow-md">
      
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="text-xl font-bold flex items-center gap-2 cursor-pointer"
      >
        🌿 ZELUS
      </div>

      {/* DIREITA */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="font-semibold">
            Olá, {user.name}
          </span>

          <button
            onClick={logout}
            className="bg-white text-green-700 px-4 py-2 rounded-full font-bold hover:scale-105 transition"
          >
            Sair
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-green-700 px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Acessar
        </button>
      )}
      
    </nav>
  );
}
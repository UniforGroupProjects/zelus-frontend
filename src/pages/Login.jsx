import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/map");
  }

  return (
    <button onClick={handleLogin}>
      Fazer Login
    </button>
  );
}
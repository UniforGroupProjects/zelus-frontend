import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();

    return (
    <MainLayout>
        <h1 className="text-2xl font-bold">Página de Login</h1>
        <button onClick={login}>
            Simular Login
        </button>
    </MainLayout>

    
  );
}
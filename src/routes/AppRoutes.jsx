import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import NovaDenuncia from "../pages/NovaDenuncia"; // 1. ADICIONE ESTA LINHA AQUI
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Rota do Mapa (já existe) */}
      <Route
        path="/map"
        element={
          <ProtectedRoute>
            <Map />
          </ProtectedRoute>
        }
      />

      {/* 2. ADICIONE ESTE BLOCO NOVO AQUI EMBAIXO */}
      <Route
        path="/nova-denuncia"
        element={
          <ProtectedRoute>
            <NovaDenuncia />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
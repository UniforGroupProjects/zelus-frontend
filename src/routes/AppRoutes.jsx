import { Routes, Route } from "react-router-dom";
// NÃO importamos mais a Navbar aqui
import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import NovaDenuncia from "../pages/NovaDenuncia";
import Profile from "../pages/Profile";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Suas rotas principais */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      
      <Route
        path="/map"
        element={
          <ProtectedRoute>
            <Map />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nova-denuncia"
        element={
          <ProtectedRoute>
            <NovaDenuncia />
          </ProtectedRoute>
        }
      />

      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
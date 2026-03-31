import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import NovaDenuncia from "../pages/NovaDenuncia";
import Profile from "../pages/Profile";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "../pages/Feed";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/feed" element={<Feed />} />
      
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
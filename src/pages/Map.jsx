import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function CapturarClique({ setPosicao }) {
  useMapEvents({
    click(e) {
      setPosicao([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function Map() {
  const navigate = useNavigate();
  const location = useLocation();
  const [posicao, setPosicao] = useState([-23.5505, -46.6333]);
  const [enviando, setEnviando] = useState(false);

  const handleFinalizar = async () => {
    const dadosFormulario = location.state;
    
    if (!dadosFormulario) {
      alert("Erro: Dados da denúncia não encontrados. Comece novamente.");
      return navigate("/nova-denuncia");
    }

    const token = localStorage.getItem('zelus_token');
    setEnviando(true);

    const corpoDaDenuncia = {
      title: dadosFormulario.title,
      description: dadosFormulario.description,
      category: dadosFormulario.category,
      latitude: posicao[0],
      longitude: posicao[1],
      image_url: dadosFormulario.image_url || "string"
    };

    try {
      const response = await fetch("http://localhost:8000/reports/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(corpoDaDenuncia),
      });

      if (response.ok) {
        alert("🎉 Denúncia enviada com sucesso!");
        navigate("/perfil");
      } else {
        const erroData = await response.json();
        alert("Erro no servidor: " + (erroData.detail || "Falha ao enviar"));
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro de conexão. O servidor está ligado?");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f8e9] flex flex-col items-center p-6">
      <div className="bg-white p-6 shadow-2xl w-full max-w-2xl border-t-8 border-[#2e7d32] rounded-3xl">
        <h2 className="text-2xl font-black text-[#2e7d32] text-center mb-2 uppercase italic">Onde está o problema?</h2>
        <p className="text-center text-sm text-gray-400 mb-6 font-bold">Clique no mapa para marcar o local</p>

        <div style={{ height: "400px" }} className="rounded-2xl overflow-hidden border-4 border-gray-50 relative z-0">
          <MapContainer center={posicao} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <CapturarClique setPosicao={setPosicao} />
            <Marker position={posicao} />
          </MapContainer>
        </div>

        <button 
          onClick={handleFinalizar}
          disabled={enviando}
          className={`w-full mt-8 py-5 font-black text-xl rounded-2xl shadow-xl transition-all ${
            enviando ? "bg-gray-400" : "bg-black text-white hover:bg-[#2e7d32]"
          }`}
        >
          {enviando ? "ENVIANDO..." : "CONFIRMAR LOCALIZAÇÃO"}
        </button>
        
        <button 
          onClick={() => navigate(-1)} 
          className="w-full mt-4 text-gray-400 font-bold text-sm uppercase hover:underline"
        >
          Voltar e ajustar foto
        </button>
      </div>
    </div>
  );
}
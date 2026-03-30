import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

// IMPORTANTE: Se o mapa continuar branco, tente mover essa linha do CSS 
// para o seu arquivo main.jsx ou App.jsx
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
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
  // Começando em uma posição padrão (ex: São Paulo)
  const [posicao, setPosicao] = useState([-23.5505, -46.6333]); 

  const handleFinalizar = () => {
    alert("Localização salva!");
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-[#f1f8e9] flex flex-col items-center p-4">
      <div className="bg-white p-6 shadow-2xl w-full max-w-2xl border-t-8 border-[#2e7d32] rounded-lg">
        <h2 className="text-2xl font-extrabold text-[#2e7d32] text-center mb-2 uppercase">
          Localização
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Clique no mapa para marcar o local do problema.
        </p>

        {/* ⚠️ MUDANÇA AQUI: Definimos uma altura fixa de 400px para o container */}
        <div style={{ height: "400px", width: "100%" }} className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <MapContainer 
            center={posicao} 
            zoom={13} 
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CapturarClique setPosicao={setPosicao} />
            <Marker position={posicao} />
          </MapContainer>
        </div>

        <button 
          onClick={handleFinalizar} 
          className="w-full mt-6 py-4 font-bold text-lg bg-black text-white hover:bg-gray-800 transition-all rounded"
        >
          Confirmar Localização
        </button>
      </div>
    </div>
  );
}
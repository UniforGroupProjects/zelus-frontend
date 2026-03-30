import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NovaDenuncia() {
  const navigate = useNavigate();
  const [arquivo, setArquivo] = useState(null);
  const [preview, setPreview] = useState(null);

  const aoSelecionarFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAvancar = () => {
    if (!arquivo) return alert("Selecione uma foto!");
    // Pula direto para o mapa, sem tentar enviar para a nuvem
    navigate("/map");
  };

  return (
    <div className="min-h-screen bg-[#f1f8e9] flex items-center justify-center p-6">
      <div className="bg-white p-10 shadow-2xl w-full max-w-2xl border-t-8 border-[#2e7d32]">
        <h2 className="text-3xl font-extrabold text-[#2e7d32] text-center mb-8 uppercase">
          Nova Denúncia
        </h2>

        <div className="space-y-8 text-center">
          <div className="aspect-video w-full border-4 border-dashed border-gray-200 flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {preview ? (
              <img src={preview} className="w-full h-full object-cover" alt="Preview" />
            ) : (
              <span className="text-8xl text-gray-100">📸</span>
            )}
          </div>

          <label className="block w-full bg-[#2e7d32] text-white py-4 font-bold cursor-pointer hover:bg-black transition-all">
            {arquivo ? "Trocar Foto" : "Tirar Foto"}
            <input 
              type="file" 
              accept="image/*" 
              capture="environment" 
              className="hidden" 
              onChange={aoSelecionarFoto} 
            />
          </label>

          <button 
            onClick={handleAvancar} 
            disabled={!arquivo} 
            className={`w-full py-5 font-bold text-xl transition-all ${
              arquivo ? "bg-black text-white" : "bg-gray-100 text-gray-300"
            }`}
          >
            Próximo: Localização
          </button>
        </div>
      </div>
    </div>
  );
}
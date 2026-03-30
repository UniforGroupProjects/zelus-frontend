import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

export default function NovaDenuncia() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#f1f8e9] p-6 md:p-10 font-sans flex items-center justify-center">
        {/* 🟦 Cartão Principal Centralizado e Enquadrado: max-w-3xl mx-auto */}
        <div className="bg-white p-10 md:p-16 shadow-2xl w-full max-w-3xl border-t-8 border-[#2e7d32] rounded-none">
          
          {/* ✨ Título e Subtítulo Centralizados: text-center */}
          <div className="mb-12 border-b-2 border-gray-100 pb-6 text-center">
            <h2 className="text-4xl font-extrabold text-[#2e7d32]">
              Nova Denúncia
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Por favor, capture uma imagem clara do problema.
            </p>
          </div>

          {/* 🚀 Fluxo Vertical (Stacked) para Alinhamento Perfeito */}
          <form className="space-y-12">
            
            {/* 📸 Área de Captura (Mais Chamativa): Centralizada */}
            <div className="border-2 border-gray-200 bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Passo 1: Foto</h3>
              
              <div className="aspect-video w-full flex flex-col items-center justify-center border-4 border-dashed border-gray-300 relative overflow-hidden bg-white mb-6">
                {image ? (
                  <img src={image} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6 flex flex-col items-center justify-center">
                    {/* Ícone Maior e Placeholder mais evidente */}
                    <span className="text-8xl block mb-3 text-gray-200">📸</span>
                    <p className="text-gray-500 font-medium">Aguardando evidência visual...</p>
                  </div>
                )}
              </div>
              
              <label className="block w-full text-center bg-[#2e7d32] text-white py-5 font-bold text-lg hover:bg-black transition-all cursor-pointer shadow-lg">
                {image ? "Substituir Foto" : "Capturar Imagem"}
                <input 
                  type="file" 
                  accept="image/*" 
                  capture="environment" 
                  className="hidden" 
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* 📝 Instruções Centralizadas e Simplificadas: Mantivemos apenas as duas primeiras */}
            <div className="border-t-2 border-gray-100 pt-10 text-center flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Recomendações:</h4>
              {/* Removi list-disc e adicionei flex/itens-center para centralizar a lista */}
              <ul className="text-gray-600 space-y-3 text-base list-none">
                <li>• Certifique-se de que a iluminação esteja adequada.</li>
                <li>• O problema deve estar centralizado na imagem.</li>
                {/* Terceiro item removido */}
              </ul>
            </div>

            {/* 🟦 Botão Próximo (Enquadrado): Ocupa toda a largura do formulário */}
            <div className="mt-16">
              <button 
                type="button"
                disabled={!image}
                className={`w-full py-6 font-bold text-2xl transition-all shadow-xl ${
                  image 
                  ? "bg-black text-white hover:bg-[#2e7d32] cursor-pointer" 
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                Próximo: Localização
              </button>
            </div>
          </form>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-300 font-mono">
            <span>Zelus Media Engine v1.0</span>
            <span className="text-[#2e7d32] font-semibold">PENDING_MEDIA_CAPTURE</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
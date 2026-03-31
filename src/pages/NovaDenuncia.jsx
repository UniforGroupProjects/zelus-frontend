import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function NovaDenuncia() {
  const navigate = useNavigate();
  const [arquivo, setArquivo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Buraco");

  const aoSelecionarFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAvancar = () => {
    if (!arquivo) return alert("Selecione uma foto!");
    if (!title || !description) return alert("Preencha o título e a descrição!");

    navigate("/map", { 
      state: { title, description, category, image_url: "https://via.placeholder.com/150" } 
    });
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-6 pb-20">
        <div className="bg-white p-10 md:p-14 shadow-2xl w-full max-w-3xl border-t-8 border-[#2e7d32] rounded-3xl">
          <h2 className="text-4xl font-black text-[#2e7d32] text-center mb-10 uppercase italic tracking-tighter">
            Nova Denúncia
          </h2>

          <div className="space-y-8">
            <div className="aspect-video w-full border-4 border-dashed border-gray-100 flex items-center justify-center bg-gray-50 relative overflow-hidden rounded-3xl shadow-inner">
              {preview ? (
                <img src={preview} className="w-full h-full object-cover" alt="Preview" />
              ) : (
                <div className="text-center">
                  <span className="text-8xl block mb-4">📸</span>
                  <p className="text-gray-300 font-black uppercase text-sm tracking-widest">Sua foto aparecerá aqui</p>
                </div>
              )}
            </div>

            <label className="block w-full bg-[#2e7d32] text-white py-5 font-black text-center cursor-pointer hover:bg-black transition-all rounded-2xl shadow-xl text-lg uppercase">
              {arquivo ? "Trocar Foto" : "Tirar Foto do Problema"}
              <input type="file" accept="image/*" capture="environment" className="hidden" onChange={aoSelecionarFoto} />
            </label>

            <div className="space-y-5 pt-6 border-t-2 border-gray-50">
              <input 
                type="text"
                placeholder="Título (ex: Poste Quebrado na Rua X)"
                className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#2e7d32] outline-none font-bold text-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              
              <select 
                className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#2e7d32] outline-none font-bold text-lg appearance-none cursor-pointer"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Buraco">🚧 Buraco</option>
                <option value="Iluminação">💡 Iluminação</option>
                <option value="Lixo">🗑️ Lixo / Entulho</option>
                <option value="Vazamento">💧 Vazamento</option>
                <option value="Outros">ℹ️ Outros</option>
              </select>

              <textarea 
                placeholder="Descreva detalhadamente o que está acontecendo..."
                rows="4"
                className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#2e7d32] outline-none font-medium text-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button 
              onClick={handleAvancar} 
              disabled={!arquivo || !title} 
              className={`w-full py-6 font-black text-2xl rounded-2xl shadow-2xl transition-all uppercase tracking-tight ${
                arquivo && title ? "bg-black text-white hover:scale-[1.02] active:scale-95" : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              PRÓXIMO: MARCAR NO MAPA
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
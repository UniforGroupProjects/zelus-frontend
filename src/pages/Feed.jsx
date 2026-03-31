import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Feed() {
  const [todasDenuncias, setTodasDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarFeed() {
      try {
        const response = await fetch("http://localhost:8000/reports/");
        if (response.ok) {
          const dados = await response.json();
          setTodasDenuncias(dados.reverse());
        }
      } catch (error) {
        console.error("Erro no feed:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarFeed();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-white flex flex-col items-center p-6 md:p-10 pb-32">
        <div className="w-full max-w-4xl">
          
          {/* Título Principal - Agora em tamanho normal */}
          <div className="text-center mb-16 mt-6">
            <h1 className="text-4xl md:text-5xl font-black text-[#1b4332] uppercase italic tracking-tighter">
              Mural Zelus
            </h1>
            <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.3em] mt-2">
              Relatórios da Comunidade
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20 font-bold text-gray-300 animate-pulse text-lg">Carregando mural...</div>
          ) : (
            <div className="flex flex-col gap-6">
              {todasDenuncias.slice(0, 10).map((item) => (
                <div 
                  key={item.id} 
                  className="bg-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-all flex overflow-hidden border border-gray-100"
                >
                  {/* Barra lateral fina e elegante */}
                  <div className="w-3 bg-[#2e7d32] shrink-0"></div>

                  {/* Conteúdo com respiro normal (p-8) */}
                  <div className="flex-1 p-8 md:p-10 pl-10 md:pl-12 flex flex-col justify-center">
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-black text-white text-[9px] font-black px-3 py-1 rounded-md uppercase">
                          #{item.id}
                        </span>
                        <span className="text-[#2e7d32] text-[10px] font-black uppercase tracking-wider">
                          {item.category || "Geral"}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-gray-300 uppercase hidden sm:block">
                        São Paulo - SP
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-black text-2xl text-gray-900 uppercase leading-tight tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-base font-medium italic leading-relaxed border-l-2 border-gray-200 pl-4">
                        "{item.description}"
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-2">
                      <div className="flex gap-6">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black text-gray-300 uppercase">Status</span>
                          <span className="text-[10px] font-black text-[#2e7d32] uppercase italic">Em análise</span>
                        </div>
                      </div>
                      
                      <button className="bg-black text-white px-6 py-3 rounded-xl font-black text-[9px] uppercase hover:bg-[#2e7d32] transition-all shadow-md active:scale-95">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
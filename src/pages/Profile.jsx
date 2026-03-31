import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const [minhasDenuncias, setMinhasDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      const token = localStorage.getItem('zelus_token');
      if (!token) {
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch("http://localhost:8000/reports/me", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const dados = await response.json();
          setMinhasDenuncias(dados);
        }
      } catch (error) {
        console.error("Erro ao buscar denúncias:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  // --- NOVA FUNÇÃO: EDITAR (PATCH) ---
  const handleEdit = async (id, tituloAtual, descAtual) => {
    const novoTitulo = window.prompt("Novo título da denúncia:", tituloAtual);
    if (novoTitulo === null) return; // Cancelou

    const novaDesc = window.prompt("Nova descrição:", descAtual);
    if (novaDesc === null) return; // Cancelou

    const token = localStorage.getItem('zelus_token');

    try {
      const response = await fetch(`http://localhost:8000/reports/${id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
          title: novoTitulo,
          description: novaDesc
        })
      });

      if (response.ok) {
        // Atualiza a lista na tela instantaneamente
        setMinhasDenuncias(prev => prev.map(d => 
          d.id === id ? { ...d, title: novoTitulo, description: novaDesc } : d
        ));
        alert("Denúncia atualizada com sucesso! ✨");
      } else {
        alert("Erro ao atualizar no servidor.");
      }
    } catch (error) {
      alert("Erro de conexão.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente apagar esta denúncia?")) return;

    const token = localStorage.getItem('zelus_token');

    try {
      const response = await fetch(`http://localhost:8000/reports/${id}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}` 
        }
      });

      if (response.ok) {
        setMinhasDenuncias(prev => prev.filter(d => d.id !== id));
        alert("Denúncia removida!");
      }
    } catch (error) {
      alert("Erro ao deletar.");
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen w-full max-w-[900px] mx-auto p-6 md:p-10 pb-20">
        
        <h1 className="text-4xl font-extrabold text-[#2e7d32] text-center mb-16 uppercase">
          Meu Dashboard
        </h1>

        <div className="flex flex-col items-center gap-12">
          
          <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#2e7d32] flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gray-100 rounded-full mb-6 border-4 border-[#2e7d32] overflow-hidden">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email || 'Zelus'}`} 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800">{user?.name || "Cidadão"}</h2>
            <p className="text-gray-500 mb-8">{user?.email}</p>
            
            <div className="bg-[#f1f8e9] px-10 py-5 rounded-2xl mb-8 w-full">
              <span className="text-4xl font-black text-[#2e7d32] block">
                {minhasDenuncias.length}
              </span>
              <span className="text-[10px] text-[#2e7d32] font-bold uppercase tracking-widest">
                Denúncias Ativas
              </span>
            </div>

            <button 
              onClick={logout}
              className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all"
            >
              Sair da Conta
            </button>
          </div>

          <div className="w-full bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-black text-gray-800 mb-8 text-center uppercase tracking-widest">
              Histórico de Relatórios
            </h3>
            
            {loading ? (
              <p className="text-center py-10 text-gray-400">Carregando dados do banco...</p>
            ) : minhasDenuncias.length === 0 ? (
              <p className="text-center py-10 text-gray-400 italic">Nenhuma denúncia encontrada.</p>
            ) : (
              <div className="space-y-4">
                {minhasDenuncias.map((item) => (
                  <div key={item.id} className="p-5 border-2 border-gray-50 rounded-2xl flex justify-between items-center hover:border-green-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    
                    <div className="flex gap-4">
                      {/* BOTÃO EDITAR */}
                      <button 
                        onClick={() => handleEdit(item.id, item.title, item.description)}
                        className="text-blue-500 hover:text-blue-700 font-bold text-xs uppercase"
                      >
                        Editar
                      </button>

                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-400 hover:text-red-600 font-bold text-xs uppercase"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  // Dados para preencher o visual
  const usuarioInfo = {
    nome: user?.name || "Cíntia Neves",
    email: user?.email || "cintia.neves@email.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cintia", // Link de avatar real
    denunciasRealizadas: 12
  };

  const minhasDenuncias = [
    { id: 1, tipo: "Buraco na Via", data: "28/03/2026", descricao: "Rua do Comércio, 45", status: "Em Análise", cor: "bg-yellow-100 text-yellow-700", icone: "🚧" },
    { id: 2, tipo: "Iluminação Pública", data: "20/03/2026", descricao: "Av. Central (Poste 12)", status: "Resolvido", cor: "bg-green-100 text-green-700", icone: "💡" },
    { id: 3, tipo: "Lixo Acumulado", data: "15/03/2026", descricao: "Travessa das Flores, 8", status: "Pendente", cor: "bg-red-100 text-red-700", icone: "🗑️" },
    { id: 4, tipo: "Outros", data: "10/03/2026", descricao: "Lâmpada queimada na Praça", status: "Resolvido", cor: "bg-green-100 text-green-700", icone: "ℹ️" },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen w-full max-w-[900px] mx-auto p-6 md:p-10 pb-20">
        
        {/* TÍTULO PRINCIPAL - Centralizado e com espaçamento maior embaixo */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e7d32] text-center mb-20 uppercase tracking-tight">
          Dashboard do Cidadão
        </h1>

        <div className="flex flex-col items-center gap-16">
          
          {/* SEÇÃO DO PERFIL - Centralizada */}
          <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#2e7d32] flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full mb-6 border-4 border-[#2e7d32] overflow-hidden shadow-inner">
              <img 
                src={usuarioInfo.avatarUrl} 
                alt="Foto de Perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-1">{usuarioInfo.nome}</h2>
            <p className="text-gray-500 mb-6">{usuarioInfo.email}</p>
            
            <div className="bg-[#f1f8e9] px-8 py-4 rounded-2xl mb-8">
              <span className="text-4xl font-black text-[#2e7d32] block">{usuarioInfo.denunciasRealizadas}</span>
              <span className="text-xs text-[#2e7d32] font-bold uppercase tracking-widest">Denúncias Feitas</span>
            </div>

            <button 
              onClick={logout}
              className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all active:scale-95"
            >
              Sair da Conta
            </button>
          </div>

          {/* SEÇÃO DE RELATÓRIOS - Centralizada no layout */}
          <div className="w-full bg-white p-8 md:p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-black text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
              Meus Relatórios
            </h3>
            
            <div className="space-y-6">
              {minhasDenuncias.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl">{item.icone}</div>
                  
                  <div className="flex-1 text-center md:text-left space-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                      <h4 className="font-bold text-xl text-gray-800">{item.tipo}</h4>
                      <span className={`px-4 py-1 rounded-full font-black text-[10px] uppercase ${item.cor}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">📍 {item.descricao}</p>
                    <p className="text-xs text-gray-400">Registrado em: {item.data}</p>
                  </div>
                  
                  <button className="text-[#2e7d32] font-black text-sm hover:underline p-2">
                    Ver Detalhes →
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
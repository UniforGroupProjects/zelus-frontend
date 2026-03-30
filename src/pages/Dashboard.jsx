export default function Dashboard() {
  const todasDenuncias = [
    {
      id: 1,
      titulo: "Vazamento de Água",
      local: "Rua das Flores, 123",
      foto: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      tempo: "há 2 horas",
      status: "Urgente"
    },
    {
      id: 2,
      titulo: "Poste Queimado",
      local: "Av. Central, Bairro Novo",
      foto: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400",
      tempo: "há 5 horas",
      status: "Em Fila"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f8e9] p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-[#2e7d32]">ZELUS</h1>
          <p className="text-gray-600 font-medium">Sua cidade, seu cuidado.</p>
        </div>
        <div className="bg-white p-3 rounded-full shadow-lg text-2xl">🔔</div>
      </div>

      {/* Cards do Feed */}
      <div className="space-y-8">
        {todasDenuncias.map((card) => (
          <div key={card.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl border-b-4 border-gray-100">
            <img src={card.foto} alt="Problema" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{card.titulo}</h3>
                <span className="bg-red-100 text-red-600 text-xs font-black px-2 py-1 rounded">
                  {card.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm flex items-center">
                📍 {card.local}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">{card.tempo}</span>
                <button className="text-[#2e7d32] font-black text-sm hover:underline">
                  VER DETALHES →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
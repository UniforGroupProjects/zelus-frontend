import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center w-full max-w-[1000px] mx-auto px-4 mt-16 gap-16">
        
        {/* Título principal */}
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#2e7d32]">
            Sobre o Zelus
          </h1>

          <p className="text-xl text-[#4caf50] max-w-2xl leading-relaxed">
            Conectando cidadãos e cidade para construir um ambiente urbano melhor.
          </p>
        </div>

        {/* Seção: O que é */}
        <div className="bg-white rounded-2xl shadow-md p-8 w-full text-center">
          <h2 className="text-2xl font-bold text-[#2e7d32] mb-4">
            🌿 O que é o Zelus?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            O Zelus é uma plataforma que permite aos cidadãos registrarem problemas urbanos
            como buracos, iluminação pública defeituosa, lixo acumulado e outros.
            A ideia é facilitar a comunicação com os órgãos responsáveis e promover
            uma cidade mais organizada e eficiente.
          </p>
        </div>

        {/* Seção: Missão */}
        <div className="bg-white rounded-2xl shadow-md p-8 w-full text-center">
          <h2 className="text-2xl font-bold text-[#2e7d32] mb-4">
            🎯 Nossa Missão
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Incentivar a participação cidadã na melhoria da cidade,
            tornando o processo de denúncia mais simples, rápido e acessível para todos.
          </p>
        </div>

        {/* Seção: Como funciona */}
        <div className="bg-white rounded-2xl shadow-md p-8 w-full text-center">
          <h2 className="text-2xl font-bold text-[#2e7d32] mb-6">
            ⚙️ Como funciona?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-[#2e7d32] mb-2">
                1. Registre
              </h3>
              <p className="text-gray-600 text-sm">
                Tire uma foto e descreva o problema encontrado.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-[#2e7d32] mb-2">
                2. Compartilhe
              </h3>
              <p className="text-gray-600 text-sm">
                Sua denúncia fica visível para outros cidadãos.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-[#2e7d32] mb-2">
                3. Acompanhe
              </h3>
              <p className="text-gray-600 text-sm">
                Veja o andamento e a resolução do problema.
              </p>
            </div>
          </div>
        </div>

        {/* Seção: Call to Action */}
        <div className="text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-[#2e7d32]">
            Faça parte dessa mudança 🌱
          </h2>

          <p className="text-gray-600 max-w-xl">
            Quanto mais pessoas participarem, mais eficiente será a melhoria da cidade.
          </p>
        </div>

      </div>
    </MainLayout>
  );
}
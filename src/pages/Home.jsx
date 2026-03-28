import MainLayout from "../layouts/MainLayout";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <MainLayout>
      {/* HERO */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Cuidando da nossa cidade juntos
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Denuncie problemas urbanos da sua região de forma rápida e ajude a melhorar a zeladoria do seu bairro.
        </p>
      </div>
      
      {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      
      {/* Card 1 */}
        <FeatureCard
          icon="📷"
          title="Nova Denúncia"
          text="Viu um buraco ou poste quebrado? Registre o problema rapidamente com foto e descrição."
          onClick={() => alert("Você precisa fazer login")}
        />

      {/* Card 2 */}
        <FeatureCard
          icon="📋"
          title="Ver Denúncias"
          text="Acompanhe os problemas já reportados por outros cidadãos."
          onClick={() => alert("Faça login")}
        />
      
      {/* Card 3 */}
        <FeatureCard
          icon="ℹ️"
          title="Sobre o Projeto"
          text="Entenda como o sistema funciona."
          onClick={() => alert("Abrindo...")}
        />

    </div>

    </MainLayout>
  );
}
import MainLayout from "../layouts/MainLayout";
import FeatureCard from "../components/FeatureCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-4 mt-20 gap-20">
        
        <div className="text-center flex flex-col items-center">
          <h1 
            className="text-5xl md:text-6xl font-extrabold text-[#2e7d32]"
            style={{ marginBottom: '20px' }}
          >
            Cuidando da nossa cidade juntos
          </h1>
          <p className="text-xl text-[#4caf50] max-w-2xl leading-relaxed">
            Denuncie problemas urbanos da sua região de forma rápida e ajude a melhorar a zeladoria do seu bairro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <FeatureCard
            icon="📷"
            title="Nova Denúncia"
            text="Viu um buraco ou poste quebrado? Registre o problema rapidamente com foto e descrição exata."
            onClick={() => navigate("/login")}
          />

          {/* AJUSTADO AQUI: Mudei de /map para /feed */}
          <FeatureCard
            icon="📋"
            title="Ver Denúncias"
            text="Acompanhe os problemas já reportados por outros cidadãos e veja o status de resolução."
            onClick={() => navigate("/feed")} 
          />
          
          <FeatureCard
            icon="ℹ️"
            title="Sobre o Projeto"
            text="Entenda como o Zelus ajuda a organizar e conectar a população aos órgãos responsáveis."
            onClick={() => navigate("/about")}
          />
        </div>
      </div>
    </MainLayout>
  );
}
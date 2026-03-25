import React from 'react'
import { Navbar } from './components/Navbar'

function App() {
  const theme = {
    background: '#e8f5e9',
    primary: '#2e7d32',
    cardBg: '#ffffff',
  }

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: theme.background,
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column'
    },
    main: {
      padding: '4rem 5%', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      boxSizing: 'border-box'
    },
    hero: {
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '800px'
    },
    title: {
      fontSize: '3rem', 
      fontWeight: 'bold',
      color: theme.primary,
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563', // Aquele cinza mais escuro e elegante para leitura!
      lineHeight: '1.6',
      maxWidth: '700px', 
      margin: '0 auto' 
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      width: '100%',
      maxWidth: '1100px'
    },
    card: {
      backgroundColor: theme.cardBg,
      padding: '2.5rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      textAlign: 'center',
      cursor: 'pointer',
      borderTop: `4px solid ${theme.primary}`, 
      transition: 'transform 0.2s',
    },
    cardIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: theme.primary,
      margin: '0 0 1rem 0'
    },
    cardText: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      margin: 0
    }
  }

  return (
    <div style={styles.container}>
      <Navbar />

      <main style={styles.main}>
        {/* Seção de Destaque (Hero) */}
        <div style={styles.hero}>
          <h1 style={styles.title}>Cuidando da nossa cidade juntos</h1>
          <p style={styles.subtitle}>
            Denuncie problemas urbanos da sua região de forma rápida e ajude a melhorar a zeladoria do seu bairro.
          </p>
        </div>

        {/* Grade de Cartões (Features) */}
        <div style={styles.grid}>
          
          {/* Cartão 1: BLOQUEADO (Exige Login) */}
          <div 
            style={styles.card} 
            onClick={() => alert('Você precisa fazer login com seu e-mail e senha para fazer uma Nova Denúncia!')}
          >
            <span style={styles.cardIcon}>📷</span>
            <h3 style={styles.cardTitle}>Nova Denúncia</h3>
            <p style={styles.cardText}>
              Viu um buraco ou poste quebrado? Registre o problema rapidamente com foto e descrição exata.
            </p>
          </div>
          
          {/* Cartão 2: BLOQUEADO (Exige Login) */}
          <div 
            style={styles.card}
            onClick={() => alert('Faça login para ver as denúncias da cidade.')}
          >
            <span style={styles.cardIcon}>📋</span>
            <h3 style={styles.cardTitle}>Ver Denúncias</h3>
            <p style={styles.cardText}>
              Acompanhe os problemas já reportados por outros cidadãos e veja o status de resolução.
            </p>
          </div>
          
          {/* Cartão 3: PÚBLICO (Acesso Livre) */}
          <div 
            style={styles.card}
            onClick={() => alert('Abrindo a página Sobre o Aplicativo...')}
          >
            <span style={styles.cardIcon}>ℹ️</span>
            <h3 style={styles.cardTitle}>Sobre o Projeto</h3>
            <p style={styles.cardText}>
              Entenda como o Zelus ajuda a organizar e conectar a população aos órgãos responsáveis.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
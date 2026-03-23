import React, { useState } from 'react'

/**
 * Componente principal da aplicação Zelus.
 * ZELUS: Gestão de Zeladoria e Vias Públicas.
 * * Este componente apresenta o formulário de nova denúncia e a listagem 
 * de denúncias recentes, utilizando estilos inline para evitar erros de CSS.
 */
function App() {
  const [denuncias, setDenuncias] = useState([
    { id: 1, local: 'Rua das Flores, 123', tipo: 'Buraco na via', status: 'Pendente' },
    { id: 2, local: 'Av. Central, 500', tipo: 'Iluminação pública', status: 'Em análise' }
  ])

  // Estilos básicos para garantir a visualização sem dependência de arquivos .css
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '2rem',
      fontFamily: 'sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2563eb',
      margin: 0
    },
    subtitle: {
      color: '#4b5563',
      marginTop: '0.5rem'
    },
    main: {
      maxWidth: '56rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    section: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    input: {
      padding: '0.5rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.25rem'
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '0.75rem',
      borderRadius: '0.25rem',
      border: 'none',
      cursor: 'pointer'
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '0.5rem',
      borderLeft: '4px solid #2563eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginBottom: '1rem'
    },
    badge: {
      display: 'inline-block',
      marginTop: '0.5rem',
      fontSize: '0.75rem',
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px'
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>ZELUS - Cidade Limpa</h1>
        <p style={styles.subtitle}>Gestão de Zeladoria e Vias Públicas</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f2937' }}>Nova Denúncia</h2>
          <form style={styles.form}>
            <input 
              type="text" 
              placeholder="Localização (Ex: Rua, Número...)" 
              style={styles.input}
            />
            <select style={styles.input}>
              <option>Selecione o tipo de problema</option>
              <option>Buraco na via</option>
              <option>Iluminação defeituosa</option>
              <option>Lixo acumulado</option>
              <option>Sinalização danificada</option>
            </select>
            <textarea 
              placeholder="Comentários adicionais..." 
              style={{ ...styles.input, height: '6rem' }}
            ></textarea>
            <button 
              type="button"
              style={styles.button}
              onClick={() => alert('Denúncia enviada! (Integração com backend em breve)')}
            >
              Registrar Problema
            </button>
          </form>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f2937' }}>Denúncias Recentes</h2>
          <div>
            {denuncias.map(denuncia => (
              <div key={denuncia.id} style={styles.card}>
                <p style={{ fontWeight: 'bold', color: '#374151', margin: 0 }}>{denuncia.local}</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0.25rem 0' }}>Problema: {denuncia.tipo}</p>
                <span style={styles.badge}>
                  {denuncia.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
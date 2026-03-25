import React from 'react';

export function Navbar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      backgroundColor: '#2e7d32',
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer'
    },
    loginButton: {
      backgroundColor: '#ffffff',
      color: '#2e7d32',
      border: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🌿 ZELUS</div>
      
      {/* Removemos os links do meio para não ficar repetitivo! */}

      <button style={styles.loginButton}>Acessar</button>
    </nav>
  );
}
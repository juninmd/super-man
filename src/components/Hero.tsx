import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToTracker = () => {
    const tracker = document.getElementById('tracker');
    if (tracker) {
      tracker.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero" style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      borderBottom: '1px solid rgba(245, 158, 11, 0.1)',
      marginBottom: '60px',
      padding: '40px 20px'
    }}>
      <div className="hero-content animate-fade-up">
        <div style={{
          display: 'inline-block',
          border: '1px solid var(--primary-color)',
          padding: '5px 15px',
          borderRadius: '20px',
          color: 'var(--primary-color)',
          marginBottom: '20px',
          fontSize: '0.9rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Mentor Mqsculus
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 800,
          background: 'linear-gradient(to right, #ffffff, #f59e0b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.5rem',
          letterSpacing: '-2px',
          lineHeight: 1.1,
          textTransform: 'uppercase'
        }}>Protocolo de<br/>Alta Performance</h1>
        <p style={{
          fontSize: 'clamp(1rem, 4vw, 1.4rem)',
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6
        }}>
          Rejeite a fraqueza moderna. Domine sua mente. Esculpa seu corpo. Enriqueça seu bolso.
          <br/><span style={{color: 'var(--primary-color)', fontWeight: 600}}>A mediocridade é o inferno em vida.</span>
        </p>
        <button
          onClick={scrollToTracker}
          style={{
            background: 'var(--primary-color)',
            color: '#000',
            border: 'none',
            padding: '16px 45px',
            fontSize: '1.1rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 0 30px var(--primary-glow)',
            transition: 'all 0.3s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 0 50px var(--primary-glow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 30px var(--primary-glow)';
          }}
        >
          Iniciar Transformação <ArrowDown size={20} />
        </button>
      </div>
    </header>
  );
};

export default Hero;

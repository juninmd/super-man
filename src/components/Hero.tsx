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
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      marginBottom: '60px'
    }}>
      <div className="hero-content animate-fade-up">
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          letterSpacing: '-2px',
          lineHeight: 1.1
        }}>2026 Life Reset</h1>
        <p style={{
          fontSize: '1.5rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>Forge your own path. Take absolute ownership.</p>
        <button
          onClick={scrollToTracker}
          style={{
            background: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 0 20px var(--primary-glow)',
            transition: 'all 0.3s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 40px var(--primary-glow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 20px var(--primary-glow)';
          }}
        >
          Begin The Protocol <ArrowDown size={20} />
        </button>
      </div>
    </header>
  );
};

export default Hero;

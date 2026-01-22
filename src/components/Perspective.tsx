import { Dumbbell, PauseCircle, Moon, Utensils, Smartphone, Target, ShieldBan, Heart } from 'lucide-react';

const cards = [
  { icon: Dumbbell, title: "Physical Activity", text: "No gym leads to stagnation." },
  { icon: PauseCircle, title: "Rest & Recovery", text: "No time out leads to burnout." },
  { icon: Moon, title: "Sleep Hygiene", text: "Not enough sleep kills focus." },
  { icon: Utensils, title: "Nutrition", text: "Bad diet affects your mind." },
  { icon: Smartphone, title: "Digital Detox", text: "Too much screentime drains dopamine." },
  { icon: Target, title: "Purpose", text: "Zero purpose leads to despair." },
  { icon: ShieldBan, title: "Environment", text: "Toxic bonds hold you back." },
  { icon: Heart, title: "Connection", text: "Family time is non-negotiable." },
];

const Perspective = () => {
  return (
    <section className="perspective-section" id="perspective" style={{ padding: '40px 0' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>The Perspective</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Depression is often a signal. Listen to it.</p>
      </div>
      <div className="cards-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {cards.map((card, index) => (
          <div key={index} className="card" style={{
            background: 'var(--surface-color)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'transform 0.3s, border-color 0.3s',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'var(--primary-color)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          }}
          >
            <card.icon size={40} style={{ marginBottom: '15px', color: 'var(--primary-color)' }} />
            <h3 style={{ marginBottom: '10px', fontSize: '1.25rem' }}>{card.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perspective;

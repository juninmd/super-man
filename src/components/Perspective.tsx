import { Dumbbell, PauseCircle, Moon, Utensils, Smartphone, Target, ShieldBan, Heart } from 'lucide-react';

const cards = [
  { icon: Dumbbell, title: "Physical Mastery", text: "Weak body, weak mind. Train daily." },
  { icon: PauseCircle, title: "Strategic Rest", text: "Burnout is for the unprepared. Recover." },
  { icon: Moon, title: "Deep Sleep", text: "Sleep is your superpower. Prioritize it." },
  { icon: Utensils, title: "Fuel, Not Food", text: "Garbage in, garbage out. Eat for performance." },
  { icon: Smartphone, title: "Digital Discipline", text: "Don't let the algorithm control your life." },
  { icon: Target, title: "Clear Mission", text: "A man without a mission is lost. Find yours." },
  { icon: ShieldBan, title: "Inner Circle", text: "Cut dead weight. Surround yourself with strength." },
  { icon: Heart, title: "Loyalty & Duty", text: "Protect and provide. Family comes first." },
];

const Perspective = () => {
  return (
    <section className="perspective-section" id="perspective" style={{ padding: '40px 0' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>The Perspective</h2>
        <p style={{ color: 'var(--text-secondary)' }}>The obstacle is the way.</p>
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

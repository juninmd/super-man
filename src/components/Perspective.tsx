import { Dumbbell, PauseCircle, Moon, Utensils, Smartphone, Target, ShieldBan, Heart, Brain, BookOpen, Coins, Crown } from 'lucide-react';

const cards = [
  { icon: Dumbbell, title: "Maestria Física", text: "Corpo fraco, mente fraca. Treine diariamente." },
  { icon: PauseCircle, title: "Descanso Estratégico", text: "Burnout é para os despreparados. Recupere-se." },
  { icon: Moon, title: "Sono Profundo", text: "O sono é seu superpoder. Priorize-o." },
  { icon: Utensils, title: "Combustível, Não Comida", text: "Lixo entra, lixo sai. Coma para performance." },
  { icon: Smartphone, title: "Disciplina Digital", text: "Não deixe o algoritmo controlar sua vida." },
  { icon: Target, title: "Missão Clara", text: "Um homem sem missão está perdido. Encontre a sua." },
  { icon: ShieldBan, title: "Círculo Interno", text: "Corte o peso morto. Cerque-se de força." },
  { icon: Heart, title: "Lealdade e Dever", text: "Proteja e proveja. A família vem primeiro." },
  { icon: Brain, title: "Controle Emocional", text: "Seja uma rocha em meio à tempestade. Estoicismo." },
  { icon: BookOpen, title: "Intelecto Afiado", text: "Aprenda algo novo todos os dias. Evolua." },
  { icon: Coins, title: "Independência", text: "Controle seus recursos. Não seja escravo de dívidas." },
  { icon: Crown, title: "Legado", text: "O que você deixará para trás? Construa para a eternidade." },
];

const Perspective = () => {
  return (
    <section className="perspective-section" id="perspective" style={{ padding: '40px 0' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '10px',
          textTransform: 'uppercase',
          fontWeight: 800
        }}>A Perspectiva</h2>
        <p style={{ color: 'var(--text-secondary)' }}>O obstáculo é o caminho.</p>
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

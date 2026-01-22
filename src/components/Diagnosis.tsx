import { AlertCircle, Skull } from 'lucide-react';

const PROBLEMS = [
  "Pornografia e Masturbação",
  "Comida Lixo (Açúcar/Óleos)",
  "Sedentarismo & Corpo Fraco",
  "Procrastinação Crônica",
  "Vício em Redes Sociais",
  "Falta de Propósito",
  "Mentalidade de Vítima",
  "Gastos Emocionais"
];

const Diagnosis = () => {
  return (
    <section className="diagnosis-section" style={{
        maxWidth: '800px',
        margin: '0 auto 80px auto',
        padding: '0 20px',
        textAlign: 'center'
    }}>
      <div style={{
          background: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '4px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
      }}>
        <h2 style={{
            fontSize: '2rem',
            marginBottom: '30px',
            color: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontWeight: 800,
            textTransform: 'uppercase'
        }}>
           <AlertCircle /> Identifique o Veneno
        </h2>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
          Se você se sente perdido, fraco ou deprimido, provavelmente está consumindo:
        </p>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '15px',
            textAlign: 'left',
            marginBottom: '40px'
        }}>
            {PROBLEMS.map((problem, index) => (
                <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#fecaca',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '15px',
                    borderRadius: '4px',
                    borderLeft: '3px solid #ef4444'
                }}>
                    <span style={{ color: '#ef4444' }}>✕</span> {problem}
                </div>
            ))}
        </div>

        <div style={{
            borderTop: '1px solid rgba(239, 68, 68, 0.2)',
            paddingTop: '30px',
            marginTop: '10px'
        }}>
            <p style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                letterSpacing: '0.5px'
            }}>
                Você não está "triste". <span style={{color:'#ef4444'}}>Você está desregulado.</span>
            </p>
        </div>
      </div>

      <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '4px',
          padding: '40px',
          backdropFilter: 'blur(10px)'
      }}>
          <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '20px',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontWeight: 700
          }}>
             <Skull size={28} color="var(--primary-color)" /> Morte à Mediocridade
          </h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
              O conforto moderno está castrando homens. Ele te diz que "está tudo bem" ser fraco,
              que você merece descansar sem ter conquistado nada. <br/><br/>
              <strong style={{color: 'var(--text-primary)'}}>Isso é mentira.</strong><br/>
              O respeito é conquistado. A força é construída. O dinheiro é impresso por quem resolve problemas.
          </p>
      </div>
    </section>
  );
};

export default Diagnosis;

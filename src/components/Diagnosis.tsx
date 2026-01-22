import { AlertCircle, Skull } from 'lucide-react';

const PROBLEMS = [
  "Sem treino",
  "Sem tempo livre",
  "Sono insuficiente",
  "Dieta ruim",
  "Excesso de telas",
  "Sem propósito",
  "Laços tóxicos",
  "Sem tempo com a família"
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
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '24px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
      }}>
        <h2 style={{
            fontSize: '2rem',
            marginBottom: '30px',
            color: '#fca5a5', // light red
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
        }}>
           <AlertCircle /> O Diagnóstico
        </h2>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
          A DEPRESSÃO muitas vezes é alimentada por:
        </p>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            textAlign: 'left',
            marginBottom: '40px'
        }}>
            {PROBLEMS.map((problem, index) => (
                <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#fecaca', // very light red
                    background: 'rgba(0,0,0,0.2)',
                    padding: '10px 15px',
                    borderRadius: '8px'
                }}>
                    <span style={{ color: '#ef4444' }}>✕</span> {problem}
                </div>
            ))}
        </div>

        <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            marginTop: '10px'
        }}>
            <p style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                letterSpacing: '0.5px'
            }}>
                Sua vida é 100% sua responsabilidade.
            </p>
        </div>
      </div>

      <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
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
            gap: '12px'
          }}>
             <Skull size={28} /> O Inimigo é o Conforto
          </h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
              A mediocridade é uma doença silenciosa. Ela te diz que "está tudo bem" ser fraco,
              que você merece descansar sem ter trabalhado. Rejeite o caminho fácil.
              O crescimento só existe fora da zona de conforto.
          </p>
      </div>
    </section>
  );
};

export default Diagnosis;

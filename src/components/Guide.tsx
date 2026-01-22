import { useState } from 'react';
import { Dumbbell, Brain, Wallet, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  {
    id: 'mind',
    title: 'Mentalidade de Ferro',
    icon: Brain,
    content: [
      {
        subtitle: 'Estoicismo Aplicado',
        text: 'Você não controla o que acontece, apenas como reage. O trânsito, a economia, a opinião dos outros - tudo ruído. Foque no que está sob suas mãos: seu esforço, sua integridade, sua disciplina.'
      },
      {
        subtitle: 'A Regra dos 5 Segundos',
        text: 'Quando você sabe que precisa fazer algo, tem 5 segundos antes que seu cérebro crie uma desculpa. Conte 5-4-3-2-1 e VÁ. A hesitação é o túmulo do progresso.'
      },
      {
        subtitle: 'Vitimização é Veneno',
        text: 'Ninguém se importa com seus problemas. O mundo só respeita resultados. Pare de culpar seus pais, o governo ou sua ex. Assuma a responsabilidade extrema por tudo na sua vida.'
      }
    ]
  },
  {
    id: 'body',
    title: 'Templo de Guerra',
    icon: Dumbbell,
    content: [
      {
        subtitle: 'Levante Peso Pesado',
        text: 'Um homem fraco é um homem ignorado. Treine força 4-5x por semana. Foque nos básicos: Agachamento, Levantamento Terra, Supino, Barra Fixa.'
      },
      {
        subtitle: 'Combustível Real',
        text: 'Coma o que sua bisavó reconheceria como comida. Carne, ovos, frutas, vegetais, arroz. Elimine óleos de sementes, açúcar refinado e soja.'
      },
      {
        subtitle: 'Sono Anabólico',
        text: '7-8 horas. Quarto escuro e frio. Sem celular 1h antes. É aqui que a testosterona é produzida e o cérebro limpo.'
      }
    ]
  },
  {
    id: 'money',
    title: 'Recursos & Poder',
    icon: Wallet,
    content: [
      {
        subtitle: 'Aumente seu Valor',
        text: 'Dinheiro é uma troca de valor. Se você quer mais dinheiro, resolva problemas maiores. Aprenda vendas, programação, gestão ou oratória.'
      },
      {
        subtitle: 'Viva Abaixo dos Meios',
        text: 'Não compre passivos para impressionar pessoas que você não gosta. Invista a diferença. O objetivo é liberdade, não aparência de riqueza.'
      },
      {
        subtitle: 'Network é Networth',
        text: 'Você é a média das 5 pessoas com quem mais convive. Se seus amigos só falam de futebol e bebida, troque de amigos.'
      }
    ]
  },
  {
    id: 'spirit',
    title: 'Legado & Honra',
    icon: Trophy,
    content: [
      {
        subtitle: 'Palavra de Honra',
        text: 'Se você disse que faria, faça. Sua reputação é seu ativo mais valioso. Um homem sem palavra não é nada.'
      },
      {
        subtitle: 'Propósito Maior',
        text: 'Encontre algo pelo qual vale a pena morrer, e viva por isso. Pode ser sua família, sua fé, sua obra. Sem um norte, qualquer vento serve.'
      }
    ]
  }
];

const Guide = () => {
  const [openSection, setOpenSection] = useState<string | null>('mind');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="guide-section" style={{
      maxWidth: '800px',
      margin: '0 auto 80px auto',
      padding: '0 20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '-1px'
        }}>
          O Código
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Princípios imutáveis para a construção de um homem de valor.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {SECTIONS.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} style={{
              background: 'var(--surface-color)',
              borderRadius: '8px',
              border: `1px solid ${isOpen ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)'}`,
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}>
              <button
                onClick={() => toggleSection(section.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 30px',
                  background: 'none',
                  border: 'none',
                  color: isOpen ? 'var(--primary-color)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <section.icon size={24} />
                  {section.title}
                </div>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {isOpen && (
                <div style={{
                  padding: '0 30px 30px 30px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {section.content.map((item, idx) => (
                    <div key={idx} style={{ marginTop: '25px' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ height: '2px', width: '15px', background: 'var(--primary-color)', display: 'block' }}></span>
                        {item.subtitle}
                      </h4>
                      <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        marginLeft: '23px'
                      }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Guide;

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
    <section className="max-w-4xl mx-auto mb-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter font-heading text-white">
          O Código
        </h2>
        <p className="text-text-secondary text-lg">
          Princípios imutáveis para a construção de um homem de valor.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {SECTIONS.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className={`
                    bg-surface-100 rounded-xl overflow-hidden transition-all duration-300 border
                    ${isOpen ? 'border-primary/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]' : 'border-white/5 hover:border-white/20'}
                `}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className={`
                    w-full flex items-center justify-between p-6 md:p-8 bg-transparent border-none cursor-pointer text-lg md:text-xl font-bold uppercase transition-colors
                    ${isOpen ? 'text-primary' : 'text-white hover:text-primary/80'}
                `}
              >
                <div className="flex items-center gap-4">
                  <section.icon size={28} className={isOpen ? "text-primary" : "text-text-secondary"} />
                  {section.title}
                </div>
                {isOpen ? <ChevronUp /> : <ChevronDown className="text-text-secondary" />}
              </button>

              <div
                className={`
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-white/5">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="mt-8 first:mt-6">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                        <span className="h-[2px] w-4 bg-primary block rounded-full"></span>
                        {item.subtitle}
                      </h4>
                      <p className="text-text-secondary text-base leading-relaxed ml-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Guide;

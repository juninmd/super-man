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
    <section className="py-24 px-6 relative" id="perspective">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white font-heading">
            A Perspectiva
          </h2>
          <p className="text-text-secondary text-lg">O obstáculo é o caminho.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-surface-100 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <card.icon size={32} className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perspective;

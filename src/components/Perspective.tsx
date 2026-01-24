import { Dumbbell, PauseCircle, Moon, Utensils, Smartphone, Target, ShieldBan, Heart, Brain, BookOpen, Coins, Crown } from 'lucide-react';

const cards = [
  { icon: Dumbbell, title: "Physical Mastery", text: "Weak body, weak mind. Train daily." },
  { icon: PauseCircle, title: "Strategic Rest", text: "Burnout is for the unprepared. Recover." },
  { icon: Moon, title: "Deep Sleep", text: "Sleep is your superpower. Prioritize it." },
  { icon: Utensils, title: "Fuel, Not Food", text: "Garbage in, garbage out. Eat for performance." },
  { icon: Smartphone, title: "Digital Discipline", text: "Don't let the algorithm control your life." },
  { icon: Target, title: "Clear Mission", text: "A man without a mission is lost. Find yours." },
  { icon: ShieldBan, title: "Inner Circle", text: "Cut the dead weight. Surround yourself with strength." },
  { icon: Heart, title: "Loyalty and Duty", text: "Protect and provide. Family comes first." },
  { icon: Brain, title: "Emotional Control", text: "Be a rock in the storm. Stoicism." },
  { icon: BookOpen, title: "Sharp Intellect", text: "Learn something new every day. Evolve." },
  { icon: Coins, title: "Independence", text: "Control your resources. Don't be a slave to debt." },
  { icon: Crown, title: "Legacy", text: "What will you leave behind? Build for eternity." },
];

const Perspective = () => {
  return (
    <section className="py-24 px-6 relative" id="perspective">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white font-heading">
            The Perspective
          </h2>
          <p className="text-text-secondary text-lg">The obstacle is the way.</p>
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

import { Dumbbell, PauseCircle, Moon, Utensils, Smartphone, Target, ShieldBan, Heart, Brain, BookOpen, Coins, Crown } from 'lucide-react';

const cards = [
  { icon: Dumbbell, title: "Physical Fortitude", text: "A weak body betrays a weak mind. Forge your vessel through relentless physical struggle." },
  { icon: PauseCircle, title: "Strategic Rest", text: "Do not confuse rest with comfort. Recover fully so you can strike with absolute maximum force." },
  { icon: Moon, title: "Vital Recovery", text: "Sleep is the armor you wear into the next battle. Guard your recovery fiercely." },
  { icon: Utensils, title: "Clean Fuel", text: "Eat for power, not for pleasure. Master your basest appetites before they master you." },
  { icon: Smartphone, title: "Digital Fasting", text: "Reject the algorithm. Reclaim your focus. Your attention is your most potent weapon." },
  { icon: Target, title: "Clear Purpose", text: "Wandering is for the weak. Define your mission and execute it with ruthless precision." },
  { icon: ShieldBan, title: "Protect Your Peace", text: "Eradicate toxic influences without hesitation. Build an impenetrable inner citadel." },
  { icon: Heart, title: "Duty Above Desire", text: "Your feelings are irrelevant. Perform your duty with unwavering conviction, no matter the cost." },
  { icon: Brain, title: "Emotional Control", text: "Emotions are a fire; reason is the forge. Master your mind so the world cannot." },
  { icon: BookOpen, title: "Continuous Study", text: "Ignorance is a choice. Sharpen your intellect daily. Read the greats and implement their wisdom." },
  { icon: Coins, title: "Resource Sovereignty", text: "Debt is modern slavery. Maintain absolute financial discipline to secure true freedom." },
  { icon: Crown, title: "Enduring Legacy", text: "Be the standard. Live with such discipline that your actions echo into eternity." },
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

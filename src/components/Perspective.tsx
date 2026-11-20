import { Dumbbell, PauseCircle, Moon, Utensils, Smartphone, Target, ShieldBan, Heart, Brain, BookOpen, Coins, Crown } from 'lucide-react';

const cards = [
  { icon: Dumbbell, title: "Physical Fortitude", text: "A strong mind demands a strong vessel. Embrace the physical struggle." },
  { icon: PauseCircle, title: "Strategic Rest", text: "Rest is not weakness; it is preparation for the next battle." },
  { icon: Moon, title: "Vital Recovery", text: "Guard your sleep. It is the foundation of cognitive dominance." },
  { icon: Utensils, title: "Clean Fuel", text: "Consume for function, not indulgence. Master your appetites." },
  { icon: Smartphone, title: "Digital Fasting", text: "Reject the algorithm's noise. Preserve your focus and attention." },
  { icon: Target, title: "Clear Purpose", text: "A life without direction is wasted. Define your objective." },
  { icon: ShieldBan, title: "Protect Your Peace", text: "Ruthlessly cut out toxic influences. Guard your inner citadel." },
  { icon: Heart, title: "Duty Above Desire", text: "Do what is required, regardless of how you feel." },
  { icon: Brain, title: "Emotional Control", text: "Reason must rule over passion. Respond, do not react." },
  { icon: BookOpen, title: "Continuous Study", text: "The mind atrophies without knowledge. Read and implement." },
  { icon: Coins, title: "Resource Sovereignty", text: "Financial discipline is freedom. Avoid the chains of debt." },
  { icon: Crown, title: "Enduring Legacy", text: "Live so that your actions speak long after you are gone." },
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

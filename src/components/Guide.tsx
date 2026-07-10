import { useState } from 'react';
import { Dumbbell, Brain, Target, Trophy, Users, ChevronDown, ChevronUp, Shield, Activity } from 'lucide-react';

const SECTIONS = [
  {
    id: 'mind',
    title: 'Stoic Mindset',
    icon: Brain,
    content: [
      {
        subtitle: 'Dichotomy of Control',
        text: 'You do not control what happens, only how you react. Traffic, the economy, others\' opinions - all noise. Focus entirely on what is in your hands: your effort, your integrity, your discipline.'
      },
      {
        subtitle: 'Eradicate Excuses',
        text: 'Hesitation breeds weakness. When a task must be done, do not negotiate with yourself. Execute immediately. Action over deliberation. Discipline is your only path to true strength.'
      },
      {
        subtitle: 'Radical Responsibility',
        text: 'No one is coming to save you. Stop blaming external forces. Take extreme ownership of your failures and your successes. Your life is your fault.'
      },
      {
        subtitle: 'Amor Fati',
        text: 'Love your fate. Do not merely endure adversity, embrace it. Every obstacle, every pain, is an opportunity to practice virtue and build resilience.'
      },
      {
        subtitle: 'Premeditatio Malorum',
        text: 'Prepare for the worst. Visualize losing what you love, facing failure, and enduring pain. By rehearsing hardship, you strip it of its power to paralyze you when it arrives.'
      }
    ]
  },
  {
    id: 'body',
    title: 'Physical Fortitude',
    icon: Dumbbell,
    content: [
      {
        subtitle: 'Voluntary Discomfort',
        text: 'Take cold showers. Fast regularly. Embrace the strenuous. Train your mind to endure hardship daily, so that when true tragedy strikes, you remain unshaken.'
      },
      {
        subtitle: 'Forge the Vessel',
        text: 'A weak body betrays a weak will. Lift heavy, run far, train consistently. Physical strength is the foundation of mental durability.'
      },
      {
        subtitle: 'Fuel for Performance',
        text: 'Eat for sustenance and strength, not for pleasure. Eliminate processed garbage. Master your appetites before they master you.'
      },
      {
        subtitle: 'Restorative Discipline',
        text: 'Sleep is not weakness; it is a necessity for recovery. Maintain a strict schedule. Rebuild the body to fight the next day.'
      }
    ]
  },
  {
    id: 'discipline',
    title: 'Relentless Routine',
    icon: Target,
    content: [
      {
        subtitle: 'Master Your Time',
        text: 'Time is your only non-renewable resource. Guard it fiercely. Ruthlessly eliminate distractions and direct all energy to your core mission.'
      },
      {
        subtitle: 'Delayed Gratification',
        text: 'Reject the weak pull of cheap dopamine. Sacrifice the comfortable indulgence of today for the unshakeable strength of tomorrow. Absolute freedom requires absolute self-denial.'
      },
      {
        subtitle: 'System Over Motivation',
        text: 'Motivation is an illusion for the weak. Discipline is permanent. Forge ironclad systems that compel you to execute relentlessly, especially when your mind screams to quit.'
      }
    ]
  },
  {
    id: 'spirit',
    title: 'Virtue & Duty',
    icon: Trophy,
    content: [
      {
        subtitle: 'Unbreakable Word',
        text: 'Your integrity is your most valuable possession. If you commit, follow through. Do not compromise your character for convenience.'
      },
      {
        subtitle: 'Fulfill Your Role',
        text: 'Understand your duty to yourself, your family, and your community. Execute that duty regardless of how heavy the burden feels.'
      }
    ]
  },
  {
    id: 'tribe',
    title: 'Inner Citadel',
    icon: Users,
    content: [
      {
        subtitle: 'Guard Your Circle',
        text: 'Surround yourself only with those who demand more of you. Cut ties with those who drag you down into complacency and vice.'
      },
      {
        subtitle: 'Self-Sufficiency',
        text: 'Rely on no one for your peace of mind. Build an inner fortress that cannot be breached by the actions or words of others.'
      },
      {
        subtitle: 'Lead by Example',
        text: 'Do not preach philosophy. Embody it. Let your actions, your discipline, and your resilience be the only argument you ever need.'
      }
    ]
  },
  {
    id: 'resilience',
    title: 'Iron Resilience',
    icon: Shield,
    content: [
      {
        subtitle: 'Embrace the Struggle',
        text: 'Adversity is not an anomaly; it is the crucible. When the burden feels unbearable, smile. You are being tested. Lean into the pain to build unshakeable fortitude.'
      },
      {
        subtitle: 'Antifragility',
        text: 'Surviving is the baseline. Do not just withstand the storm—absorb its energy. Let every failure, betrayal, and physical exhaustion become the raw fuel for your undeniable ascent.'
      }
    ]
  },
  {
    id: 'protocols',
    title: 'Action Protocols',
    icon: Activity,
    content: [
      {
        subtitle: 'The Morning Forge',
        text: 'Do not touch your phone for the first 60 minutes. Hydrate immediately. Spend 5 minutes visualizing your day and the obstacles you will face. Complete your hardest, most dreaded task immediately. Win the morning, win the war.'
      },
      {
        subtitle: 'Stoic Evening Audit',
        text: 'End your day with a ruthless self-examination. Write down: What did I do wrong today? What did I do right? What duty did I neglect? Correct the trajectory daily.'
      },
      {
        subtitle: 'The 24-Hour Rule',
        text: 'When you feel a strong negative emotion—anger, frustration, despair—do not react. Impose a strict 24-hour waiting period before responding. Time neutralizes emotion and allows reason to dictate your action.'
      },
      {
        subtitle: 'Dopamine Fasting',
        text: 'Schedule one day a week with zero cheap dopamine. No social media, no entertainment, no junk food, no distractions. Reset your baseline and reclaim your ability to do deep, difficult work.'
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
          The Code
        </h2>
        <p className="text-text-secondary text-lg">
          Immutable principles for building a man of value.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {SECTIONS.map((section) => {
          const isOpen = openSection === section.id;
          const Icon = section.icon;
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
                  <Icon size={28} className={isOpen ? "text-primary" : "text-text-secondary"} />
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

import { useState } from 'react';
import { Dumbbell, Brain, Wallet, Trophy, Users, ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  {
    id: 'mind',
    title: 'Iron Mindset',
    icon: Brain,
    content: [
      {
        subtitle: 'Applied Stoicism',
        text: 'You do not control what happens, only how you react. Traffic, the economy, others\' opinions - all noise. Focus on what is in your hands: your effort, your integrity, your discipline.'
      },
      {
        subtitle: 'The 5 Second Rule',
        text: 'When you know you need to do something, you have 5 seconds before your brain creates an excuse. Count 5-4-3-2-1 and GO. Hesitation is the grave of progress.'
      },
      {
        subtitle: 'Victimhood is Poison',
        text: 'No one cares about your problems. The world only respects results. Stop blaming your parents, the government, or your ex. Take extreme responsibility for everything in your life.'
      }
    ]
  },
  {
    id: 'body',
    title: 'Temple of War',
    icon: Dumbbell,
    content: [
      {
        subtitle: 'Lift Heavy Weights',
        text: 'A weak man is an ignored man. Train strength 4-5x a week. Focus on basics: Squat, Deadlift, Bench Press, Pull-up.'
      },
      {
        subtitle: 'Real Fuel',
        text: 'Eat what your great-grandmother would recognize as food. Meat, eggs, fruits, vegetables, rice. Eliminate seed oils, refined sugar, and soy.'
      },
      {
        subtitle: 'Anabolic Sleep',
        text: '7-8 hours. Dark and cool room. No phone 1h before. This is where testosterone is produced and the brain cleaned.'
      }
    ]
  },
  {
    id: 'money',
    title: 'Resources & Power',
    icon: Wallet,
    content: [
      {
        subtitle: 'Increase Your Value',
        text: 'Money is an exchange of value. If you want more money, solve bigger problems. Learn sales, programming, management, or public speaking.'
      },
      {
        subtitle: 'Live Below Your Means',
        text: 'Don\'t buy liabilities to impress people you don\'t like. Invest the difference. The goal is freedom, not the appearance of wealth.'
      },
      {
        subtitle: 'Network is Net Worth',
        text: 'You are the average of the 5 people you spend the most time with. If your friends only talk about soccer and drinking, change friends.'
      }
    ]
  },
  {
    id: 'spirit',
    title: 'Legacy & Honor',
    icon: Trophy,
    content: [
      {
        subtitle: 'Word of Honor',
        text: 'If you said you would do it, do it. Your reputation is your most valuable asset. A man without his word is nothing.'
      },
      {
        subtitle: 'Higher Purpose',
        text: 'Find something worth dying for, and live for it. It could be your family, your faith, your work. Without a north, any wind will do.'
      }
    ]
  },
  {
    id: 'tribe',
    title: 'Brotherhood & Tribe',
    icon: Users,
    content: [
      {
        subtitle: 'Iron Sharpens Iron',
        text: 'Surround yourself with men who are stronger, smarter, and wealthier than you. Their standards will become yours. If you are the smartest person in the room, you are in the wrong room.'
      },
      {
        subtitle: 'Value Exchange',
        text: 'Do not ask for handouts. Offer value first. Relationships are built on mutual respect and benefit. Be useful, and you will never be alone.'
      },
      {
        subtitle: 'Loyalty Over Royalty',
        text: 'A small circle of loyal brothers is worth more than a thousand acquaintances. Betrayal is the ultimate sin. Protect your own.'
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

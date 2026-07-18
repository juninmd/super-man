import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SECTIONS } from '../constants/guide';

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

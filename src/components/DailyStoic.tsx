import { Quote, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QUOTES } from '../constants/quotes';

const DIRECTIVES = [
  "Do not negotiate with your alarm clock tomorrow. Wake up and move immediately.",
  "Identify one comfort you rely on daily. Eliminate it for the next 24 hours.",
  "When you feel the urge to complain today, remain completely silent instead.",
  "Do your hardest, most dreaded task first today. No excuses.",
  "Push yourself past your physical limit in your next training session.",
  "Embrace an obstacle today. Say 'Amor Fati' and attack the problem.",
  "Refuse cheap dopamine today. No mindless scrolling. Guard your focus.",
  "Take absolute responsibility for a recent failure. Do not blame anyone else."
];

const DailyStoic = () => {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [directive, setDirective] = useState(DIRECTIVES[0]);

  useEffect(() => {
    // Randomly select a quote on mount, but maybe we can make it daily based on date?
    // For now random is fine to keep it fresh on reload.
    const randomQuoteIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomQuoteIndex]);

    const randomDirectiveIndex = Math.floor(Math.random() * DIRECTIVES.length);
    setDirective(DIRECTIVES[randomDirectiveIndex]);
  }, []);

  return (
    <section className="py-12 px-6 border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Quote className="text-primary" size={24} />
        </div>

        <blockquote className="text-xl md:text-3xl font-light text-white italic leading-relaxed mb-8 font-heading">
          "{quote.text}"
        </blockquote>

        <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-primary/30"></div>
            <cite className="text-primary font-bold uppercase tracking-[0.2em] text-sm not-italic">
            {quote.author}
            </cite>
            <div className="h-[1px] w-12 bg-primary/30"></div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-2">
               <Activity size={16} /> Daily Actionable Directive
            </div>
            <p className="text-lg text-text-secondary font-medium max-w-2xl">
              {directive}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyStoic;

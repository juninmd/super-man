import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QUOTES } from '../constants/quotes';

const DailyStoic = () => {
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    // Randomly select a quote on mount, but maybe we can make it daily based on date?
    // For now random is fine to keep it fresh on reload.
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]);
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

        <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-primary/30"></div>
            <cite className="text-primary font-bold uppercase tracking-[0.2em] text-sm not-italic">
            {quote.author}
            </cite>
            <div className="h-[1px] w-12 bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
};

export default DailyStoic;

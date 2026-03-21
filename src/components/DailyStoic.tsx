import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const QUOTES = [
  { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius" },
  { text: "The obstacle in the path becomes the path. Never forget, within every obstacle is an opportunity to improve our condition.", author: "Marcus Aurelius" },
  { text: "Difficulty shows what men are.", author: "Epictetus" },
  { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
  { text: "No man is free who is not master of himself.", author: "Epictetus" },
  { text: "To bear trials with a calm mind robs misfortune of its strength and burden.", author: "Seneca" },
  { text: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca" },
  { text: "If you want to be beautiful, make your choices beautiful.", author: "Epictetus" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "He who fears death will never do anything worthy of a man who is alive.", author: "Seneca" },
  { text: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },
  { text: "If it is not right do not do it; if it is not true do not say it.", author: "Marcus Aurelius" },
  { text: "How long are you going to wait before you demand the best for yourself?", author: "Epictetus" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
  { text: "A man is as unhappy as he has convinced himself he is.", author: "Seneca" },
  { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" }
];

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

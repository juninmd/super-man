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
  { text: "The soul becomes dyed with the color of its thoughts. Think only on what elevates you.", author: "Marcus Aurelius" },
  { text: "He who fears death will never do anything worthy of a man who is alive.", author: "Seneca" },
  { text: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },
  { text: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius" },
  { text: "How long are you going to wait before you demand the best for yourself?", author: "Epictetus" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "The best revenge is to be unlike him who performed the injury. Rise above.", author: "Marcus Aurelius" },
  { text: "A man is as unhappy as he has convinced himself he is. Master your perception.", author: "Seneca" },
  { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
  { text: "You must build up your life action by action, and be content if each one achieves its goal as far as possible.", author: "Marcus Aurelius" },
  { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
  { text: "The more we value things outside our control, the less control we have.", author: "Epictetus" },
  { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { text: "Sometimes even to live is an act of courage.", author: "Seneca" },
  { text: "He who sweats more in training bleeds less in war.", author: "Spartan Proverb" },
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "Do not pray for an easy life, pray for the strength to endure a difficult one.", author: "Bruce Lee" },
  { text: "It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.", author: "Socrates" },
  { text: "Fire tests gold, suffering tests brave men.", author: "Seneca" },
  { text: "No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have.", author: "Seneca" },
  { text: "You have been given your own work to do. Get to it right now, do your best at it, and don't worry about who is watching you.", author: "Epictetus" },
  { text: "You must be like a promontory of the sea, against which, though the waves beat continually, yet it both itself stands, and about it are those swelling waves stilled and quieted.", author: "Marcus Aurelius" },
  { text: "No man is free who is not master of himself. Discipline is the only path to true freedom.", author: "Epictetus" },
  { text: "We must undergo a hard winter training and not rush into things for which we haven't prepared. Strength is forged through voluntary hardship.", author: "Epictetus" },
  { text: "It is essential that you show yourself to be strong. To complain, to whine, to seek comfort—these are the hallmarks of a weak mind. Eradicate them.", author: "Marcus Aurelius" },
  { text: "You have power over your mind, not outside events. Realize this, apply absolute discipline, and you will find an unshakeable inner strength.", author: "Marcus Aurelius" },
  { text: "A strong man relies on his discipline, while a weak man relies on his motivation. Constant personal improvement demands the former.", author: "Seneca" },
  { text: "Endurance is not just the ability to bear a hard thing, but to turn it into glory. Resilience is your ultimate weapon.", author: "Seneca" },
  { text: "Wake up early. Do the hardest task first. This simple protocol will forge a discipline that no obstacle can break.", author: "Mentor Mqsculus" },
  { text: "Strength is built not in the days you feel motivated, but in the days you execute despite your weakness.", author: "Stoic Discipline" },
  { text: "Do not negotiate with your inner voice of comfort. When the alarm rings, move. Immediate action is the foundation of resilience.", author: "Stoic Action" },
  { text: "Track your failures ruthlessly. They are the exact coordinates of where your next improvement must occur.", author: "Resilience Protocol" },
  { text: "Every time you choose the hard path over the easy one, you cast a vote for the strong, resilient version of yourself.", author: "Daily Forging" },
  { text: "Pain is temporary, quitting lasts forever. Endure the pain and forge your character.", author: "Resilience Protocol" },
  { text: "Your potential is on the other side of exhaustion. Keep pushing when others stop.", author: "Mentor Mqsculus" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "To conquer oneself is a greater task than conquering others.", author: "Buddha" },
  { text: "Do not seek an easy life. Seek the strength to endure a difficult one.", author: "Stoic Mindset" },
  { text: "The measure of a man is what he does with power. Master your own mind.", author: "Plato" },
  { text: "He who is brave is free. Face your fears with unyielding resolve.", author: "Seneca" },
  { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
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

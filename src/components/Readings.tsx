import { BookOpen, ExternalLink, Star } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  description: string;
  impact: string;
  link: string;
}

const books: Book[] = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    description: "Personal writings of the Roman Emperor. The definitive guide to Stoic philosophy and mental fortress building.",
    impact: "Emotional Control & Resilience",
    link: "https://amazon.com/dp/0812968255"
  },
  {
    title: "Letters from a Stoic",
    author: "Seneca",
    description: "Practical wisdom on friendship, death, and the brevity of life. A guide to living with virtue and tranquility.",
    impact: "Moral Character & Wisdom",
    link: "https://amazon.com/dp/0140442103"
  },
  {
    title: "Discourses",
    author: "Epictetus",
    description: "Direct teachings from a former slave turned philosopher. Focuses on what is within our control and what is not.",
    impact: "Unshakeable Freedom",
    link: "https://amazon.com/dp/0140449469"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "The most practical guide to breaking bad habits and building good ones. Small changes, remarkable results.",
    impact: "Systematic Improvement",
    link: "https://amazon.com/dp/0735211299"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world. Learn to master hard things quickly.",
    impact: "Unrivaled Focus",
    link: "https://amazon.com/dp/1455586692"
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master your mind and defy the odds. The path to becoming the hardest person you know.",
    impact: "Mental Callus & Durability",
    link: "https://amazon.com/dp/1544512287"
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    description: "A manual for those who want to negotiate power dynamics in society. Amoral, cunning, ruthless, and instructive.",
    impact: "Strategic Dominance",
    link: "https://amazon.com/dp/0140280197"
  },
  {
    title: "Skin in the Game",
    author: "Nassim Nicholas Taleb",
    description: "The most important rule in life: never trust anyone who doesn't have something to lose if they are wrong.",
    impact: "Risk Management & Ethics",
    link: "https://amazon.com/dp/042528462X"
  },
  {
    title: "Extreme Ownership",
    author: "Jocko Willink",
    description: "Leadership principles from the battlefield. There are no bad teams, only bad leaders.",
    impact: "Absolute Responsibility",
    link: "https://amazon.com/dp/1250067057"
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A psychiatrist's memoir of life in Nazi death camps. He who has a why to live can bear almost any how.",
    impact: "Finding Purpose in Suffering",
    link: "https://amazon.com/dp/0807014273"
  },
  {
    title: "Discipline is Destiny",
    author: "Ryan Holiday",
    description: "The power of self-control. A guide to mastering your will and achieving greatness through discipline.",
    impact: "Self-Mastery",
    link: "https://amazon.com/dp/0593190816"
  },
  {
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    description: "The fight to master our greatest opponent. Learn to be humble in your aspirations, gracious in your success, and resilient in your failures.",
    impact: "Humility",
    link: "https://amazon.com/dp/1591847818"
  }
];

const Readings = () => {
  return (
    <section className="py-20 px-4" id="readings">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6">
            <BookOpen size={16} />
            <span className="text-sm font-semibold uppercase tracking-wider">Mental Library</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Software for the Brain
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Your body is hardware. Your mind is software.
            <span className="text-primary block mt-2">Install these upgrades.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <div 
              key={index}
              className="group relative bg-surface-100 border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-primary/80 font-medium font-mono text-sm">
                      LINES OF CODE BY {book.author.toUpperCase()}
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Star className="text-neutral-400 group-hover:text-primary transition-colors" size={20} />
                  </div>
                </div>

                <p className="text-neutral-400 mb-6 flex-grow leading-relaxed">
                  {book.description}
                </p>

                <div className="mt-auto border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Impact</span>
                      <span className="text-sm font-semibold text-white/90">{book.impact}</span>
                    </div>
                    
                    <a 
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      Acquire
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Readings;

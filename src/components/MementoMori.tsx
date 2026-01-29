import { useState, useEffect, memo } from 'react';
import { Hourglass, Skull, Calendar, RefreshCcw } from 'lucide-react';

const EXPECTED_YEARS = 80;
const TOTAL_WEEKS = EXPECTED_YEARS * 52;

const LifeGrid = memo(({ weeksLived }: { weeksLived: number }) => {
  return (
    <div className="flex flex-wrap gap-1 justify-center opacity-80 mb-8 p-4 bg-black/40 rounded-2xl border border-white/5">
      {Array.from({ length: TOTAL_WEEKS }).map((_, i) => (
        <div
            key={i}
            title={i === weeksLived ? "This Week" : i < weeksLived ? "Past" : "Future"}
            className={`w-1.5 h-1.5 rounded-sm transition-all duration-500
                ${i < weeksLived
                    ? 'bg-surface-200'
                    : i === weeksLived
                        ? 'bg-primary animate-pulse shadow-[0_0_8px_var(--primary-color)] scale-125 z-10'
                        : 'bg-white/10 hover:bg-white/30'
                }`}
        />
      ))}
    </div>
  );
});

const MementoMori = () => {
  const [birthDate, setBirthDate] = useState<string | null>(null);
  const [weeksLived, setWeeksLived] = useState(0);
  const [timeLeftStr, setTimeLeftStr] = useState('');
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    const storedDate = localStorage.getItem('mementoMoriDate');
    if (storedDate) {
      setBirthDate(storedDate);
      setShowInput(false);
      calculateLife(storedDate);
    }
  }, []);

  useEffect(() => {
    if (!birthDate) return;

    const interval = setInterval(() => {
      calculateTimeLeft(birthDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  const calculateLife = (dateStr: string) => {
    const start = new Date(dateStr).getTime();
    const now = Date.now();
    const weeks = Math.floor((now - start) / (1000 * 60 * 60 * 24 * 7));
    setWeeksLived(weeks);
    calculateTimeLeft(dateStr);
  };

  const calculateTimeLeft = (dateStr: string) => {
    const start = new Date(dateStr);
    const end = new Date(start);
    end.setFullYear(start.getFullYear() + EXPECTED_YEARS);

    const now = new Date();
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) {
      setTimeLeftStr("TIME EXPIRED");
      return;
    }

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeLeftStr(`${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  const handleSaveDate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const date = formData.get('birthdate') as string;

    if (date) {
      localStorage.setItem('mementoMoriDate', date);
      setBirthDate(date);
      setShowInput(false);
      calculateLife(date);
    }
  };

  const handleReset = () => {
    if (confirm("Reset your birthdate?")) {
      localStorage.removeItem('mementoMoriDate');
      setBirthDate(null);
      setShowInput(true);
      setWeeksLived(0);
    }
  };

  // Optimize grid rendering by using simple divs
  // If we have 4160 divs, React can handle it, but let's be careful.
  // We can render in chunks if needed, but 4000 nodes is okay for modern browsers.

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="memento-mori">
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-200/20 via-background to-background pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight font-heading mb-4 flex items-center justify-center gap-4">
            <Hourglass className="text-primary animate-pulse" size={40} />
            Memento Mori
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            You are dying. Slowly. <br />
            Visualize your time. Do not waste a single second.
          </p>
        </div>

        {showInput ? (
          <div className="max-w-md mx-auto bg-surface-100 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md animate-fade-up">
            <form onSubmit={handleSaveDate} className="flex flex-col gap-6">
              <label className="text-white font-medium flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                Enter your birthdate:
              </label>
              <input
                type="date"
                name="birthdate"
                required
                className="w-full bg-surface-200 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full bg-primary text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]"
              >
                Face Reality
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in">
             <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-surface-100/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <p className="text-text-secondary text-sm uppercase tracking-wider mb-1">Estimated Time Remaining</p>
                    <div className="text-3xl md:text-4xl font-mono font-bold text-white tabular-nums tracking-tighter">
                        {timeLeftStr}
                    </div>
                </div>

                <div className="flex gap-8 text-center">
                    <div>
                        <p className="text-3xl font-bold text-primary">{weeksLived}</p>
                        <p className="text-xs text-text-secondary uppercase">Weeks Lived</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">{TOTAL_WEEKS - weeksLived}</p>
                        <p className="text-xs text-text-secondary uppercase">Weeks Left</p>
                    </div>
                </div>
             </div>

             <LifeGrid weeksLived={weeksLived} />

             <div className="text-center">
                <button
                    onClick={handleReset}
                    className="text-text-secondary hover:text-red-400 text-sm flex items-center justify-center gap-2 mx-auto transition-colors"
                >
                    <RefreshCcw size={14} /> Reset Birthdate
                </button>
             </div>
          </div>
        )}

        <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-100 border border-white/10 text-xs text-text-secondary">
                <Skull size={14} />
                <span>Based on 80-year statistical average. Death is certain. Timing is not.</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default MementoMori;


import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Flame, RefreshCcw, Bell, Check } from 'lucide-react';

interface TrackerProps {
  addToast: (msg: string, type?: 'info' | 'success' | 'warning') => void;
}

const HABITS = [
  "Train body: Destroy physical weakness through intense exercise",
  "Train mind: Study stoic texts to forge mental armor",
  "Voluntary discomfort: Cold shower. Seek the hard path.",
  "Control fuel: Zero processed sugar. Command your appetite.",
  "Master time: Wake before the sun. Seize the day.",
  "Build focus: Intermittent fasting. Master your impulses.",
  "Hydrate: 3L of water. Maintain the vessel.",
  "Control speech: Speak only what is necessary and true.",
  "Reflect: Nightly journaling. Brutally assess your actions.",
  "Protect peace: Block all useless digital distraction.",
  "Fulfill duty: Execute your obligations without complaint.",
  "Mental armor: Radically reject victimhood.",
  "Action over words: Execute. Do not explain.",
  "Physical endurance: Push your physical limits today.",
  "Recovery: Guard your sleep. Prepare for tomorrow's war.",
  "Gratitude: Acknowledge what you have. Desire nothing else.",
  "Train resilience: Actively seek out one difficult task.",
  "Amor Fati: Embrace whatever happens, good or bad.",
  "Premeditatio Malorum: Visualize absolute failure and prepare.",
  "Memento Mori: Remember death. Do not waste today.",
  "Radical Honesty: Tell the truth, especially when it hurts.",
  "Discipline: Attack today's most difficult task first.",
  "Endurance & Strength: Push past the point where weak minds quit.",
  "Absolute Resilience: Turn every setback into strategic advantage."
];

const REMINDERS = [
  "No one is coming to save you. Total responsibility.",
  "Difficulty shows what men are. Embrace the struggle.",
  "First say to yourself what you would be; and then do what you have to do.",
  "Do not be a slave to your emotions. Reason must rule absolutely.",
  "What you do in the dark defines who you are in the light.",
  "Discipline is choosing between what you want now and what you want most.",
  "To bear trials with a calm mind robs misfortune of its strength.",
  "A gem cannot be polished without friction, nor a man perfected without trials.",
  "If you want to be beautiful, make your choices beautiful.",
  "Waste no more time arguing what a good man should be. Be one.",
  "The obstacle in the path becomes the path. Dominate it.",
  "He who fears death will never do anything worthy of a man who is alive.",
  "We suffer more often in imagination than in reality. Control your mind.",
  "It is not death that a man should fear, but he should fear never beginning to live.",
  "Man conquers the world by conquering himself first.",
  "The soul becomes dyed with the color of its thoughts. Guard them.",
  "Do not pray for an easy life, pray for the strength to endure a difficult one.",
  "Your mind will quit a thousand times before your body does. Keep pushing.",
  "Discipline equals freedom. Own your day."
];

const Tracker = ({ addToast }: TrackerProps) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(HABITS.length).fill(false)
  );
  const [streak, setStreak] = useState(0);

  // Initialize state from local storage
  useEffect(() => {
    const todayKey = new Date().toISOString().split('T')[0];
    const storedDate = localStorage.getItem('habitDate2026');
    const storedState = JSON.parse(localStorage.getItem('habitState2026') || '[]');
    const storedStreak = parseInt(localStorage.getItem('habitStreak2026') || '0');

    if (storedDate !== todayKey) {
      // New day logic
      localStorage.setItem('habitDate2026', todayKey);
      localStorage.setItem('habitState2026', JSON.stringify([])); // clear for new day
      setCheckedState(new Array(HABITS.length).fill(false));
    } else {
      // Same day, load state
      if (storedState.length === HABITS.length) {
        setCheckedState(storedState);
      } else {
        if (storedState.length < HABITS.length) {
          const newArr = [...storedState, ...new Array(HABITS.length - storedState.length).fill(false)];
          setCheckedState(newArr);
        } else {
          setCheckedState(new Array(HABITS.length).fill(false));
        }
      }
    }
    setStreak(storedStreak);
  }, []);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    localStorage.setItem('habitState2026', JSON.stringify(updatedCheckedState));

    // Check for 100% completion
    const allCompleted = updatedCheckedState.every(Boolean);
    if (allCompleted && !checkedState.every(Boolean)) {
      fireConfetti();
      addToast("Protocol Complete. You won the day.", "success");
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('habitStreak2026', newStreak.toString());
    }
  };

  const fireConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const resetDay = () => {
    if (confirm("Are you sure you want to reset today's progress?")) {
      const resetState = new Array(HABITS.length).fill(false);
      setCheckedState(resetState);
      localStorage.setItem('habitState2026', JSON.stringify(resetState));
      addToast("Day reset.", "warning");
    }
  };

  const showReminder = () => {
    const randomReminder = REMINDERS[Math.floor(Math.random() * REMINDERS.length)];
    addToast(randomReminder, 'info');
  };

  const completedCount = checkedState.filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / HABITS.length) * 100);
  const todayDisplay = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="max-w-4xl mx-auto my-20 p-6 md:p-10 bg-surface-100/60 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl" id="tracker">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-heading tracking-tight mb-2">The Battlefield</h2>
          <p className="text-text-secondary">Execute the protocol. No excuses.</p>
        </div>

        <div className="text-right flex flex-col items-end">
          <span className="text-sm text-text-secondary mb-2 capitalize">{todayDisplay}</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-bold">
            <Flame size={18} className={streak > 0 ? "animate-pulse" : ""} />
            {streak} Days of Focus
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-wider text-text-secondary">
          <span>Mission Status</span>
          <span className={progressPercentage === 100 ? "text-primary" : "text-white"}>{progressPercentage}%</span>
        </div>
        <div className="h-3 bg-surface-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {HABITS.map((habit, index) => (
          <div
            key={index}
            onClick={() => handleOnChange(index)}
            className={`group relative p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-4 overflow-hidden
                    ${checkedState[index]
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]'
              }
                `}
          >
            <div className={`
                    w-6 h-6 rounded flex items-center justify-center transition-all duration-300 transform group-hover:scale-110
                    ${checkedState[index] ? 'bg-green-500 text-black' : 'border-2 border-text-secondary'}
                `}>
              {checkedState[index] && <Check size={16} strokeWidth={4} />}
            </div>

            <span className={`
                    text-lg font-medium transition-all duration-300 select-none flex-grow
                    ${checkedState[index] ? 'text-text-secondary line-through' : 'text-white'}
                `}>
              {habit}
            </span>

            {/* Hover Effect Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={showReminder}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all"
        >
          <Bell size={18} /> Stoic Reminder
        </button>
        <button
          onClick={resetDay}
          className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg font-medium transition-all"
        >
          <RefreshCcw size={18} /> Reset Day
        </button>
      </div>
    </section>
  );
};

export default Tracker;

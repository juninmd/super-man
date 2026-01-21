import { Bell, RotateCcw } from 'lucide-react';
import { useHabits } from './hooks/useHabits';
import { PerspectiveSection } from './components/PerspectiveSection';
import { HabitItem } from './components/HabitItem';

function App() {
  const { habits, toggleHabit, resetHabits, progress, habitList } = useHabits();

  const handleReminder = () => {
    const reminders = [
      "No gym leads to stagnation.",
      "Take a timeout when needed.",
      "Sleep is crucial for recovery.",
      "You are what you eat.",
      "Limit your screentime.",
      "Find your purpose.",
      "Cut toxic bonds.",
      "Family is everything."
    ];
    const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];

    // Check for notification permission
    if ("Notification" in window && Notification.permission === "granted") {
       new Notification("2026 Life Reset", { body: randomReminder });
    } else if ("Notification" in window && Notification.permission !== "denied") {
       Notification.requestPermission().then(permission => {
         if (permission === "granted") {
           new Notification("2026 Life Reset", { body: randomReminder });
         } else {
           alert(randomReminder);
         }
       });
    } else {
      alert(randomReminder);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            2026 <span className="text-brand-500">Life Reset</span>
          </h1>
          <p className="text-slate-500 font-medium">Your life is 100% your responsibility.</p>
        </header>

        <PerspectiveSection />

        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
             <h2 className="text-2xl font-bold text-slate-800">Daily Habits</h2>
             <span className="text-brand-600 font-bold">{progress}% Completed</span>
          </div>

          <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-3 mb-12">
          {habitList.map((habit, idx) => (
            <HabitItem
              key={idx}
              index={idx}
              label={habit}
              checked={!!habits[idx]}
              onToggle={() => toggleHabit(idx)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleReminder}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Bell size={18} />
            Get Reminder
          </button>

          <button
            onClick={resetHabits}
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all font-medium"
          >
            <RotateCcw size={18} />
            Reset Day
          </button>
        </div>

        <footer className="mt-16 text-center text-slate-400 text-sm">
           &copy; {new Date().getFullYear()} Life Reset Project
        </footer>
      </div>
    </div>
  );
}

export default App;

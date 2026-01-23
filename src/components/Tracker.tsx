
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Flame, RefreshCcw, Bell, Check } from 'lucide-react';

interface TrackerProps {
  addToast: (msg: string, type?: 'info' | 'success' | 'warning') => void;
}

const HABITS = [
  "Zero Pornografia/Masturbação",
  "Treino Pesado (Musculação/Luta)",
  "Dieta Limpa (Sem açúcar/processados)",
  "Cardio (Correr/Caminhar)",
  "Leitura Estratégica (30min)",
  "Deep Work (Trabalho Focado)",
  "Banho Gelado",
  "Sem Redes Sociais Inúteis",
  "Planejar o dia seguinte",
  "Investir em Conhecimento",
  "Silêncio & Reflexão",
  "Hidratação (3L+)"
];

const REMINDERS = [
  "Ninguém virá te salvar. É responsabilidade sua.",
  "Dor é o preço da entrada para uma nova vida.",
  "Enquanto você dorme, seu inimigo treina.",
  "Não seja escravo das suas emoções. Aja com a razão.",
  "O que você faz no escuro define quem você é na luz.",
  "Disciplina é fazer o que odeia como se amasse.",
  "Seja perigoso, mas controlado.",
  "A pobreza é, na maioria das vezes, uma doença mental curável.",
  "Sua rede define seu patrimônio. Afaste-se de perdedores.",
  "Não conte seus planos. Mostre seus resultados.",
  "A morte sorri para todos; tudo o que um homem pode fazer é sorrir de volta.",
  "Não aceite a versão 'beta' de si mesmo."
];

const Tracker = ({ addToast }: TrackerProps) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(HABITS.length).fill(false)
  );
  const [streak, setStreak] = useState(0);

  // Initialize state from local storage
  useEffect(() => {
    const todayKey = new Date().toISOString().split('T')[0];
    const storedDate = localStorage.getItem('habitDate');
    const storedState = JSON.parse(localStorage.getItem('habitState') || '[]');
    const storedStreak = parseInt(localStorage.getItem('habitStreak') || '0');

    if (storedDate !== todayKey) {
      // New day logic
      localStorage.setItem('habitDate', todayKey);
      localStorage.setItem('habitState', JSON.stringify([])); // clear for new day
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
    localStorage.setItem('habitState', JSON.stringify(updatedCheckedState));

    // Check for 100% completion
    const allCompleted = updatedCheckedState.every(Boolean);
    if (allCompleted && !checkedState.every(Boolean)) {
      fireConfetti();
      addToast("Protocolo Completo. Você venceu o dia.", "success");
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('habitStreak', newStreak.toString());
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
    if (confirm("Tem certeza que deseja reiniciar o progresso de hoje?")) {
      const resetState = new Array(HABITS.length).fill(false);
      setCheckedState(resetState);
      localStorage.setItem('habitState', JSON.stringify(resetState));
      addToast("Dia reiniciado.", "warning");
    }
  };

  const showReminder = () => {
    const randomReminder = REMINDERS[Math.floor(Math.random() * REMINDERS.length)];
    addToast(randomReminder, 'info');
  };

  const completedCount = checkedState.filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / HABITS.length) * 100);
  const todayDisplay = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="max-w-4xl mx-auto my-20 p-6 md:p-10 bg-surface-100/60 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl" id="tracker">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-heading tracking-tight mb-2">O Campo de Batalha</h2>
          <p className="text-text-secondary">Execute o protocolo. Sem desculpas.</p>
        </div>

        <div className="text-right flex flex-col items-end">
          <span className="text-sm text-text-secondary mb-2 capitalize">{todayDisplay}</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-bold">
            <Flame size={18} className={streak > 0 ? "animate-pulse" : ""} />
            {streak} Dias de Foco
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-wider text-text-secondary">
          <span>Status da Missão</span>
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
          <Bell size={18} /> Lembrete Estoico
        </button>
        <button
          onClick={resetDay}
          className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg font-medium transition-all"
        >
          <RefreshCcw size={18} /> Reiniciar Dia
        </button>
      </div>
    </section>
  );
};

export default Tracker;

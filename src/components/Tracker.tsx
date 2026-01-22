import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Flame, RefreshCcw, Bell } from 'lucide-react';

interface TrackerProps {
  addToast: (msg: string, type?: 'info' | 'success' | 'warning') => void;
}

const HABITS = [
  "Comer limpo",
  "Caminhar mais",
  "Levantar pesos",
  "Dormir mais cedo",
  "Acordar às 5h",
  "Jejum matinal",
  "Beber água",
  "Falar menos",
  "Ouvir mais",
  "Tempo sozinho",
  "Amar sua família",
  "Evitar pensamentos negativos"
];

const REMINDERS = [
  "Sofremos mais na imaginação do que na realidade.",
  "A melhor vingança é não ser assim.",
  "Não perca mais tempo discutindo sobre o que um bom homem deve ser. Seja um.",
  "Se não é certo, não faça; se não é verdade, não diga.",
  "Você tem poder sobre sua mente - não sobre eventos externos. Perceba isso e encontrará força.",
  "Disciplina é liberdade.",
  "Não deseje que fosse mais fácil, deseje que você fosse melhor.",
  "Permaneça firme."
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
        // If the previous day was missed, streak might reset (simplified logic here)
        // For now, we just reset the checks
        localStorage.setItem('habitDate', todayKey);
        localStorage.setItem('habitState', JSON.stringify([])); // clear for new day
        setCheckedState(new Array(HABITS.length).fill(false));
    } else {
        // Same day, load state
        if (storedState.length === HABITS.length) {
            setCheckedState(storedState);
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

    const interval: any = setInterval(function() {
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
      if(confirm("Tem certeza que deseja reiniciar o progresso de hoje?")) {
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
    <section className="tracker-section" id="tracker" style={{
        maxWidth: '800px',
        margin: '80px auto',
        background: 'rgba(30, 41, 59, 0.5)',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)'
    }}>
      <div className="tracker-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '20px'
      }}>
        <h2 style={{ fontSize: '2rem' }}>Protocolo Diário</h2>
        <div className="date-container" style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '5px' }}>{todayDisplay}</span>
            <div className="streak-badge" style={{
                background: 'rgba(245, 158, 11, 0.1)',
                color: '#f59e0b',
                padding: '5px 12px',
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                border: '1px solid rgba(245, 158, 11, 0.2)'
            }}>
                <Flame size={16} /> {streak} Dias de Sequência
            </div>
        </div>
      </div>

      <div className="progress-wrapper" style={{ marginBottom: '30px' }}>
        <div className="progress-text" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
            <span>Progresso</span>
            <span>{progressPercentage}%</span>
        </div>
        <div className="progress-container" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
            <div className="progress-bar" style={{
                background: 'linear-gradient(90deg, var(--primary-color), #60a5fa)',
                height: '100%',
                width: `${progressPercentage}%`,
                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 0 15px var(--primary-glow)'
            }}></div>
        </div>
      </div>

      <div className="habits-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {HABITS.map((habit, index) => (
             <div
                key={index}
                className={`habit-item ${checkedState[index] ? 'completed' : ''}`}
                onClick={() => handleOnChange(index)}
                style={{
                    background: checkedState[index] ? 'rgba(16, 185, 129, 0.1)' : 'var(--surface-color)',
                    borderColor: checkedState[index] ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                    padding: '15px 20px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    userSelect: 'none'
                }}
             >
                <div className="checkbox-custom" style={{
                    width: '24px',
                    height: '24px',
                    border: `2px solid ${checkedState[index] ? 'var(--success-color)' : 'var(--text-secondary)'}`,
                    backgroundColor: checkedState[index] ? 'var(--success-color)' : 'transparent',
                    borderRadius: '6px',
                    marginRight: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    color: 'white',
                    fontSize: '16px'
                }}>
                    {checkedState[index] && '✓'}
                </div>
                <label style={{
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    flexGrow: 1,
                    textDecoration: checkedState[index] ? 'line-through' : 'none',
                    color: checkedState[index] ? 'var(--text-secondary)' : 'var(--text-primary)'
                }}>
                    {habit}
                </label>
            </div>
        ))}
      </div>

      <div className="controls" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <button className="secondary-btn" onClick={showReminder} style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'var(--text-primary)',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            <Bell size={18} /> Lembrete Estoico Aleatório
        </button>
        <button className="danger-btn" onClick={resetDay} style={{
            background: 'rgba(244, 63, 94, 0.1)',
            color: 'var(--accent-color)',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            <RefreshCcw size={18} /> Reiniciar Dia
        </button>
      </div>
    </section>
  );
};

export default Tracker;

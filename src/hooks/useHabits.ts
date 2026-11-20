import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const HABITS = [
  "Eat clean",
  "Walk more",
  "Lift weights",
  "Sleep earlier",
  "Wake up at 5 AM",
  "Fast in the morning",
  "Drink water",
  "Talk less",
  "Listen more",
  "Spend time alone",
  "Love your family",
  "Avoid negative thoughts"
];

// Corrupted or hand-edited storage must not crash the whole app on mount.
function readStoredHabits(): Record<number, boolean> {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem('habitState') || '{}');
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as Record<number, boolean>) : {};
  } catch {
    return {};
  }
}

export function useHabits() {
  const [habits, setHabits] = useState<Record<number, boolean>>({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Initialize or Reset
    const now = new Date();
    const todayKey = now.getFullYear() + '-' +
                     String(now.getMonth() + 1).padStart(2, '0') + '-' +
                     String(now.getDate()).padStart(2, '0');

    const storedDate = localStorage.getItem('habitDate');
    const storedHabits = readStoredHabits();

    if (storedDate !== todayKey) {
      localStorage.setItem('habitDate', todayKey);
      localStorage.setItem('habitState', JSON.stringify({}));
      setHabits({});
    } else {
      setHabits(storedHabits);
    }
  }, []);

  useEffect(() => {
    // Update Progress
    const completedCount = Object.values(habits).filter(Boolean).length;
    const newProgress = Math.round((completedCount / HABITS.length) * 100);
    setProgress(newProgress);

    // Save to local storage
    if (Object.keys(habits).length > 0) {
       localStorage.setItem('habitState', JSON.stringify(habits));
    }

    // Celebration
    if (newProgress === 100) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [habits]);

  const toggleHabit = (index: number) => {
    setHabits(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const resetHabits = () => {
    if (confirm("Are you sure you want to reset today's progress?")) {
      setHabits({});
      localStorage.setItem('habitState', JSON.stringify({}));
    }
  };

  return { habits, toggleHabit, resetHabits, progress, habitList: HABITS };
}

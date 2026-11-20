import { useState, useRef, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import DailyStoic from './components/DailyStoic';
import Diagnosis from './components/Diagnosis';
import MementoMori from './components/MementoMori';
import Perspective from './components/Perspective';
import Readings from './components/Readings';
import Guide from './components/Guide';
import Tracker from './components/Tracker';
import ToastContainer, { Toast } from './components/Toast';

function App() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timerMapRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const removeToast = useCallback((id: string) => {
    const timer = timerMapRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timerMapRef.current.delete(id);
    }
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    setToasts(prev => [...prev, { id, message, type }]);

    const timer = setTimeout(() => {
      timerMapRef.current.delete(id);
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);

    timerMapRef.current.set(id, timer);
  }, []);

  useEffect(() => {
    const timers = timerMapRef.current;
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  return (
    <div className="app-container">
      <Hero />
      <DailyStoic />
      <Diagnosis />
      <MementoMori />
      <Perspective />
      <Readings />
      <Guide />
      <Tracker addToast={addToast} />
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      <footer>
        <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} Mqsculus Protocol. Pain is temporary, glory is eternal.
        </p>
      </footer>
    </div>
  );
}

export default App;

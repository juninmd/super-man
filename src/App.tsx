import { useState } from 'react';
import Hero from './components/Hero';
import Diagnosis from './components/Diagnosis';
import MementoMori from './components/MementoMori';
import Perspective from './components/Perspective';
import Readings from './components/Readings';
import Guide from './components/Guide';
import Tracker from './components/Tracker';
import ToastContainer, { Toast } from './components/Toast';

function App() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <div className="app-container">
      <Hero />
      <Diagnosis />
      <MementoMori />
      <Perspective />
      <Readings />
      <Guide />
      <Tracker addToast={addToast} />
      <ToastContainer toasts={toasts} />

      <footer>
        <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.6 }}>
          &copy; 2026 Protocolo Mqsculus. Pain is temporary, glory is eternal.
        </p>
      </footer>
    </div>
  );
}

export default App;

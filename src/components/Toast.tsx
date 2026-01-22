import { CheckCircle, Info, AlertTriangle } from 'lucide-react';

export interface Toast {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning';
}

interface ToastContainerProps {
  toasts: Toast[];
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <div id="toast-container" style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

const ToastItem = ({ toast }: { toast: Toast }) => {
    const getIcon = () => {
        switch(toast.type) {
            case 'success': return <CheckCircle size={20} color="var(--success-color)" />;
            case 'warning': return <AlertTriangle size={20} color="var(--accent-color)" />;
            default: return <Info size={20} color="var(--primary-color)" />;
        }
    };

    return (
        <div className="toast" style={{
            background: 'var(--surface-color)',
            color: 'var(--text-primary)',
            padding: '15px 25px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            borderLeft: `4px solid ${
                toast.type === 'success' ? 'var(--success-color)' :
                toast.type === 'warning' ? 'var(--accent-color)' :
                'var(--primary-color)'
            }`,
            minWidth: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15px',
            animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {getIcon()}
                <span>{toast.message}</span>
            </div>
        </div>
    );
};

export default ToastContainer;

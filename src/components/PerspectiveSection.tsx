import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function PerspectiveSection() {
  const negatives = [
    "No gym", "No time out", "No enough sleep", "Bad diet",
    "Too much screentime", "Zero purpose", "Toxic bonds", "No time with family"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6 mb-8 border-l-4 border-red-400"
    >
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="text-red-500" />
        <h2 className="text-xl font-bold text-slate-800">Perspective</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide">Depression is often just:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {negatives.map((item, idx) => (
          <div key={idx} className="flex items-center text-slate-600 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></span>
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

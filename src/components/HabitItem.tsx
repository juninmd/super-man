import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';
import clsx from 'clsx';

interface HabitItemProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  index: number;
}

export function HabitItem({ label, checked, onToggle, index }: HabitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={clsx(
        "flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 shadow-sm border",
        checked
          ? "bg-emerald-50 border-emerald-200"
          : "bg-white border-slate-100 hover:border-brand-200"
      )}
    >
      <div className={clsx(
        "flex items-center justify-center w-6 h-6 rounded-full mr-4 transition-colors",
        checked ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-300"
      )}>
        {checked ? <Check size={14} strokeWidth={3} /> : <Circle size={14} />}
      </div>
      <span className={clsx(
        "font-medium text-lg transition-colors",
        checked ? "text-slate-400 line-through" : "text-slate-700"
      )}>
        {label}
      </span>
    </motion.div>
  );
}

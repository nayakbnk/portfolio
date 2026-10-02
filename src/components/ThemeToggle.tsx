import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`inline-flex items-center justify-center gap-2 p-2 font-black text-xs uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer ${
        isDark
          ? 'bg-[#1E1E24] text-[#FFD84D] hover:bg-[#2A2A32]'
          : 'bg-[#FFD84D] text-[#111111] hover:bg-[#FFE37A]'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 stroke-[2.5] text-[#FFD84D]" />
      ) : (
        <Moon className="w-4 h-4 stroke-[2.5] text-[#111111]" />
      )}
      {showLabel && (
        <span className="font-mono font-bold">
          {isDark ? 'LIGHT MODE' : 'DARK MODE'}
        </span>
      )}
    </button>
  );
};

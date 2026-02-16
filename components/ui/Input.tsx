import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && <label className="font-display font-bold text-black text-xs uppercase tracking-wider ml-1">{label}</label>}
      <input 
        className={`
          w-full px-5 py-3 rounded-2xl border-2 border-black bg-white 
          font-body text-black placeholder-gray-400 outline-none
          focus:ring-2 focus:ring-plus-purple-med focus:border-black transition-all
          ${error ? 'bg-red-50' : ''}
        `}
        {...props} 
      />
      {error && <span className="text-red-600 text-xs font-bold ml-1">{error}</span>}
    </div>
  );
};
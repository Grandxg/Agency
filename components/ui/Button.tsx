import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'black';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-bold border-2 border-black rounded-full transition-transform duration-200 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#D8B4FE] text-black shadow-neo hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0_0_15px_rgba(216,180,254,0.6),_5px_5px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-[#FDE047] text-black shadow-neo hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0_0_15px_rgba(253,224,71,0.6),_5px_5px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-white text-black shadow-neo hover:bg-gray-50 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.6),_5px_5px_0px_0px_rgba(0,0,0,1)]",
    black: "bg-black text-white shadow-neo border-white hover:bg-gray-900 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0_0_15px_rgba(0,0,0,0.6),_5px_5px_0px_0px_rgba(255,255,255,1)]",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
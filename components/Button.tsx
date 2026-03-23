import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-bold transition-all duration-300 active:scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] rounded-full";

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
    secondary: "bg-[#FAFAFA] text-[#1E293B] border-2 border-[#2563EB]/50 hover:bg-white hover:border-[#2563EB]",
    accent: "bg-[#F97316] text-white hover:bg-[#EA580C]",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

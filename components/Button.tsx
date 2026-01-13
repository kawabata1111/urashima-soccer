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
  // 不均一な角丸（有機的な形状）
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-bold transition-all duration-300 active:scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] rounded-[255px_15px_225px_15px/15px_225px_15px_255px]";
  
  const variants = {
    primary: "bg-[#94A684] text-white hover:bg-[#839674] hover:rounded-[15px_225px_15px_255px/255px_15px_225px_15px]",
    secondary: "bg-[#F9F7F2] text-[#595045] border-2 border-[#94A684]/50 hover:bg-white hover:border-[#94A684]",
    accent: "bg-[#E6A57E] text-white hover:bg-[#D6956E] hover:rounded-[15px_225px_15px_255px/255px_15px_225px_15px]",
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
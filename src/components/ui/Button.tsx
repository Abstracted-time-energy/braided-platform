import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  children: React.ReactNode;
}

export function Button({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default",
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wairua focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    default: "bg-gradient-to-r from-wairua to-wairua-dark text-white hover:shadow-md hover:translate-y-[-1px]",
    secondary: "bg-mauri-dark text-white hover:bg-mauri hover:shadow-md",
    outline: "border-2 border-wairua text-wairua hover:bg-wairua/10 hover:shadow-sm",
    ghost: "hover:bg-wairua/10 text-wairua-dark",
  };
  
  const sizeStyles = {
    sm: "h-9 px-3 text-sm rounded-md",
    default: "h-10 py-2 px-4 text-sm rounded-md",
    lg: "h-11 px-6 text-base rounded-md",
    xl: "h-12 px-8 text-base rounded-lg font-semibold",
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
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
  
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wairua focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    default: "bg-wairua-dark text-white hover:bg-wairua",
    secondary: "bg-mauri-dark text-white hover:bg-mauri",
    outline: "border border-wairua text-wairua hover:bg-wairua/10",
    ghost: "hover:bg-wairua/10 text-wairua-dark",
  };
  
  const sizeStyles = {
    sm: "h-9 px-3 text-sm",
    default: "h-10 py-2 px-4 text-sm",
    lg: "h-11 px-6 text-base",
    xl: "h-12 px-8 text-base font-semibold",
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
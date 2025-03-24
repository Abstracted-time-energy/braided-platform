"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface WaveDividerProps {
  inverted?: boolean;
  className?: string;
  color?: string;
}

export default function WaveDivider({ inverted = false, className = "", color }: WaveDividerProps) {
  // Brand colors for the waves
  const waveColors = {
    primary: color || '#64B5BA',    // Use provided color or default to Teal
    secondary: '#C4A484',  // Tan
    accent: '#2D3B4D'      // Dark blue-grey
  };

  return (
    <div 
      className={`w-full overflow-hidden relative ${className}`} 
      style={{ height: '120px', backgroundColor: color || 'transparent' }}
    >
      <svg 
        className={`w-full h-full absolute ${inverted ? 'transform rotate-180' : ''}`}
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        {/* Primary Wave */}
        <motion.path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={waveColors.primary}
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut" 
          }}
          style={{ opacity: 0.7 }}
        />
        
        {/* Secondary Wave */}
        <motion.path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={waveColors.secondary}
          initial={{ y: -20 }}
          animate={{ 
            y: [-20, 5, -20],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          style={{ opacity: 0.5 }}
        />
        
        {/* Accent Wave */}
        <motion.path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={waveColors.accent}
          initial={{ y: 20 }}
          animate={{ 
            y: [20, -5, 20],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 22,
            ease: "easeInOut" 
          }}
          style={{ opacity: 0.3 }}
        />
      </svg>
    </div>
  );
}

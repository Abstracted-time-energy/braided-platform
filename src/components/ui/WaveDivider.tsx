"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface WaveDividerProps {
  inverted?: boolean;
  color?: string;
  className?: string;
}

export default function WaveDivider({ inverted = false, color = "#ffffff", className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: '80px' }}>
      <svg 
        className={`w-full h-full ${inverted ? 'transform rotate-180' : ''}`}
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <motion.path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={color}
          initial={{ y: 10 }}
          animate={{ 
            y: [10, -10, 10],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </svg>
    </div>
  );
}

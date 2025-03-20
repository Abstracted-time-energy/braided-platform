"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InteractionType } from '@/types/whirlpool';

type RiverBackgroundProps = {
  interactionType: InteractionType;
};

export const RiverBackground: React.FC<RiverBackgroundProps> = ({
  interactionType
}) => {
  // Get background color based on interaction type
  const getBackgroundColor = () => {
    switch (interactionType) {
      case 'harmony':
        return '#e0f2fe'; // Light blue
      case 'creative':
        return '#ddd6fe'; // Light purple
      case 'resonant':
        return '#bbf7d0'; // Light green
      case 'dissonant':
        return '#fed7aa'; // Light orange
      case 'fearful':
        return '#fecaca'; // Light red
      case 'destructive':
        return '#fee2e2'; // Lighter red
      default:
        return '#e0f2fe'; // Light blue
    }
  };
  
  // Generate particles for the flow
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    y: 50 + (Math.random() * 20 - 10),
    size: Math.random() * 2 + 1,
    speed: Math.random() * 5 + 5,
    delay: Math.random() * 3
  }));
  
  return (
    <div 
      className="absolute inset-0 overflow-hidden rounded-lg"
      style={{ 
        background: `linear-gradient(to bottom, #f0f9ff 0%, ${getBackgroundColor()} 40%, ${getBackgroundColor()} 60%, #f0f9ff 100%)` 
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Flow wave */}
        <motion.path
          d="M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 C100,45 110,55 120,50"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          animate={{
            d: [
              "M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 C100,45 110,55 120,50",
              "M0,50 C10,55 20,45 30,50 C40,55 50,45 60,50 C70,55 80,45 90,50 C100,55 110,45 120,50",
              "M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 C100,45 110,55 120,50"
            ],
            transition: {
              duration: interactionType === 'dissonant' || interactionType === 'destructive' ? 5 : 10,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Flow particles */}
        {particles.map(particle => (
          <motion.circle
            key={particle.id}
            cx={0}
            cy={particle.y}
            r={particle.size}
            fill="white"
            fillOpacity={0.5}
            animate={{
              cx: [0, 100],
              transition: {
                duration: interactionType === 'dissonant' || interactionType === 'destructive' 
                  ? 10 / (particle.speed * 1.5)
                  : 10 / particle.speed,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay
              }
            }}
          />
        ))}
      </svg>
    </div>
  );
};
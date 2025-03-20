"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WhirlpoolState, WhirlpoolLayer } from '@/types/whirlpool';
import { getLayerColor, getFlowPattern } from '@/lib/whirlpool-utils';

type WhirlpoolProps = {
  data: WhirlpoolState;
  position: 'left' | 'right';
  size?: number;
  onLayerClick?: (layer: WhirlpoolLayer) => void;
};

export const Whirlpool: React.FC<WhirlpoolProps> = ({
  data,
  position,
  size = 120,
  onLayerClick,
}) => {
  // Get the primary color from the color schema if available
  const getPrimaryColor = () => {
    return data.colorSchema?.primary || getLayerColor(data.dominantLayer, data.energyLevel, false);
  };
  
  const getLightColor = () => {
    return data.colorSchema?.light || getLayerColor(data.dominantLayer, data.energyLevel, true);
  };
  
  const getDarkColor = () => {
    return data.colorSchema?.dark || getLayerColor(data.dominantLayer, data.energyLevel, false);
  };
  
  // Layers ordered from outside to inside
  const layers: WhirlpoolLayer[] = [
    'environment',
    'community',
    'relationship',
    'body',
    'nervous',
    'mind',
    'mauri',
    'wairua'
  ];
  
  return (
    <div 
      className="relative"
      style={{ 
        width: size, 
        height: size 
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Render layers from outside to inside */}
        {layers.map((layer, i) => {
          const radius = 50 * (1 - i / layers.length);
          const isActive = data.dominantLayer === layer;
          const hasBlockage = data.blockages?.includes(layer);
          
          // Calculate a gradient between the primary color and light/dark variants
          const layerOpacity = 0.5 + (i / layers.length) * 0.5; // Opacity increases for inner layers
          
          return (
            <g key={layer}>
              {/* Main layer circle with custom color */}
              <motion.circle
                cx="50"
                cy="50"
                r={radius}
                fill={`rgba(${hexToRgb(getPrimaryColor())}, ${layerOpacity})`}
                stroke={isActive ? "white" : "transparent"}
                strokeWidth={isActive ? 1 : 0}
                strokeDasharray={isActive ? "2 1" : "0"}
                animate={{
                  scale: isActive ? [1, 1.05, 1] : 1,
                  transition: {
                    repeat: isActive ? Infinity : 0,
                    duration: 2,
                    ease: "easeInOut"
                  }
                }}
                onClick={() => onLayerClick?.(layer)}
                style={{ cursor: 'pointer' }}
              />
              
              {/* Blockage indicator */}
              {hasBlockage && (
                <motion.path
                  d={`M${50 - radius * 0.7},${50} L${50 + radius * 0.7},${50}`}
                  stroke="#f43f5e"
                  strokeWidth={radius * 0.2}
                  strokeLinecap="round"
                  animate={{
                    rotate: [45, 135, 225, 315, 405],
                    transition: {
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity
                    }
                  }}
                  style={{ transformOrigin: '50px 50px' }}
                />
              )}
            </g>
          );
        })}
        
        {/* Center core with glow effect using the custom color */}
        <motion.circle
          cx="50"
          cy="50"
          r={3}
          fill={getLightColor()}
          animate={{
            r: [3, 4, 3],
            opacity: [0.8, 1, 0.8],
            transition: {
              duration: data.energyLevel === 'erratic' ? 0.8 : 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Energy emission based on state with custom color */}
        <g>
          {Array.from({ length: data.energyLevel === 'high' ? 8 : data.energyLevel === 'erratic' ? 12 : 4 }).map((_, i) => {
            const angle = (i * 360 / (data.energyLevel === 'high' ? 8 : data.energyLevel === 'erratic' ? 12 : 4)) * (Math.PI / 180);
            const length = data.energyLevel === 'low' ? 8 : 15;
            
            // Add more distinct patterns based on emotional state
            const emotionPattern = data.colorSchema ? getEmotionPattern(data, i, angle, length) : null;
            
            return emotionPattern || (
              <motion.line
                key={`energy-${i}`}
                x1={50}
                y1={50}
                x2={50 + Math.cos(angle) * length}
                y2={50 + Math.sin(angle) * length}
                stroke={getPrimaryColor()}
                strokeWidth={1}
                strokeLinecap="round"
                animate={{
                  x2: [
                    50 + Math.cos(angle) * length, 
                    50 + Math.cos(angle) * (length * 1.5), 
                    50 + Math.cos(angle) * length
                  ],
                  y2: [
                    50 + Math.sin(angle) * length, 
                    50 + Math.sin(angle) * (length * 1.5), 
                    50 + Math.sin(angle) * length
                  ],
                  opacity: [0.6, 1, 0.6],
                  transition: {
                    duration: data.energyLevel === 'erratic' ? Math.random() * 2 + 0.5 : 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

// Helper function to convert hex to rgb
function hexToRgb(hex: string) {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

// Helper function to determine emotion-specific energy patterns
function getEmotionPattern(data: WhirlpoolState, index: number, angle: number, length: number) {
  // If no schema is provided, return null to use default pattern
  if (!data.colorSchema) return null;
  
  // Get primary color from schema
  const color = data.colorSchema.primary;
  
  // Find which emotion by comparing color
  switch (color) {
    // SEEKING (Amber)
    case "#F59E0B":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          animate={{
            d: [
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`,
              `M50,50 L${50 + Math.cos(angle) * (length * 1.8)},${50 + Math.sin(angle) * (length * 1.8)}`,
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`
            ],
            opacity: [0.7, 1, 0.7],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1
            }
          }}
        />
      );
    
    // CARE (Purple)
    case "#8B5CF6":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 C${50 + Math.cos(angle) * length * 0.5},${50 + Math.sin(angle) * length * 0.5} 
             ${50 + Math.cos(angle) * length * 0.8},${50 + Math.sin(angle) * length * 0.8} 
             ${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`}
          stroke={color}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              `M50,50 C${50 + Math.cos(angle) * length * 0.5},${50 + Math.sin(angle) * length * 0.5} 
                ${50 + Math.cos(angle) * length * 0.8},${50 + Math.sin(angle) * length * 0.8} 
                ${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`,
              `M50,50 C${50 + Math.cos(angle) * length * 0.6},${50 + Math.sin(angle) * length * 0.6} 
                ${50 + Math.cos(angle) * length * 0.9},${50 + Math.sin(angle) * length * 0.9} 
                ${50 + Math.cos(angle) * length * 1.4},${50 + Math.sin(angle) * length * 1.4}`,
              `M50,50 C${50 + Math.cos(angle) * length * 0.5},${50 + Math.sin(angle) * length * 0.5} 
                ${50 + Math.cos(angle) * length * 0.8},${50 + Math.sin(angle) * length * 0.8} 
                ${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`
            ],
            opacity: [0.6, 0.9, 0.6],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15
            }
          }}
        />
      );
    
    // PLAY (Blue)
    case "#3B82F6":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          animate={{
            d: [
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`,
              `M50,50 L${50 + Math.cos(angle) * (length * 1.3 + Math.sin(index * 2) * 5)},${50 + Math.sin(angle) * (length * 1.3 + Math.cos(index * 2) * 5)}`,
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`
            ],
            opacity: [0.7, 1, 0.7],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }
          }}
        />
      );
    
    // FEAR (Green)
    case "#10B981":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          animate={{
            d: [
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`,
              `M50,50 L${50 + Math.cos(angle) * (length * 0.7)},${50 + Math.sin(angle) * (length * 0.7)}`,
              `M50,50 L${50 + Math.cos(angle) * (length * 1.2)},${50 + Math.sin(angle) * (length * 1.2)}`,
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`
            ],
            opacity: [0.7, 0.3, 0.9, 0.7],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.05
            }
          }}
        />
      );
    
    // RAGE (Red)
    case "#EF4444":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`}
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          animate={{
            d: [
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`,
              `M50,50 L${50 + Math.cos(angle) * length * 1.6},${50 + Math.sin(angle) * length * 1.6}`,
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`
            ],
            opacity: [0.8, 1, 0.8],
            strokeWidth: [2, 3, 2],
            transition: {
              duration: data.energyLevel === 'erratic' ? 1.2 : 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.05
            }
          }}
        />
      );
      
    // GRIEF (Gray)
    case "#6B7280":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 L${50 + Math.cos(angle) * length * 0.8},${50 + Math.sin(angle) * length * 0.8}`}
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            strokeWidth: [1, 1.5, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }
          }}
        />
      );
      
    // LUST (Pink)
    case "#EC4899":
      return (
        <motion.path
          key={`energy-${index}`}
          d={`M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          animate={{
            d: [
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`,
              `M50,50 L${50 + Math.cos(angle) * length * 1.3},${50 + Math.sin(angle) * length * 1.3}`,
              `M50,50 L${50 + Math.cos(angle) * length},${50 + Math.sin(angle) * length}`
            ],
            opacity: [0.7, 1, 0.7],
            transition: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1
            }
          }}
        />
      );
    
    // Default for other emotions
    default:
      return null;
  }
}
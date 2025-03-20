"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WhirlpoolState, InteractionType } from '@/types/whirlpool';
import { blendColors } from '@/lib/whirlpool-utils';

type InteractionEffectsProps = {
  type: InteractionType;
  strength: number;
  whirlpool1: WhirlpoolState;
  whirlpool2: WhirlpoolState;
};

export const InteractionEffects: React.FC<InteractionEffectsProps> = ({
  type,
  strength,
  whirlpool1,
  whirlpool2,
}) => {
  // Get color for interaction based on the emotional states' color schemas
  const getInteractionColor = () => {
    // Default colors by interaction type
    const defaultColors = {
      harmony: '#34d399', // Green
      creative: '#818cf8', // Indigo
      resonant: '#60a5fa', // Blue
      dissonant: '#fbbf24', // Amber
      fearful: '#f87171', // Red
      destructive: '#ef4444', // Red
      neutral: '#94a3b8', // Slate
    };

    // If we have color schemas in the whirlpool states, blend them based on interaction type
    if (whirlpool1.colorSchema?.primary && whirlpool2.colorSchema?.primary) {
      // For harmonious interactions, blend the colors
      if (type === 'harmony' || type === 'resonant' || type === 'creative') {
        return blendColors(
          whirlpool1.colorSchema.primary, 
          whirlpool2.colorSchema.primary, 
          0.5
        );
      }
      
      // For dissonant interactions, use the dominant color
      if (type === 'dissonant' || type === 'fearful' || type === 'destructive') {
        // Use the "stronger" color (usually the threat system)
        return isThreateningState(whirlpool1) ? whirlpool1.colorSchema.primary : whirlpool2.colorSchema.primary;
      }
    }
    
    // Fallback to default colors
    return defaultColors[type] || defaultColors.neutral;
  };
  
  // Helper to check if a state is from the threat system
  const isThreateningState = (state: WhirlpoolState) => {
    // These are typically threat system states with stronger visual impact
    return state.energyLevel === 'erratic' || 
           (state.energyLevel === 'high' && state.dominantLayer === 'nervous');
  };
  
  // Generate particles for the interaction
  const particleCount = Math.floor(strength * 20) + 5;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Connection path between whirlpools */}
        <motion.path
          d={`M25,50 C35,50 65,50 75,50`}
          fill="none"
          stroke={getInteractionColor()}
          strokeWidth={strength * 10}
          strokeOpacity={0.3}
          animate={{
            strokeWidth: [strength * 10, strength * 15, strength * 10],
            strokeOpacity: [0.2, 0.4, 0.2],
            transition: {
              duration: type === 'harmony' ? 4 : 
                        type === 'creative' ? 3 : 
                        type === 'dissonant' ? 2 : 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Particles moving between whirlpools */}
        {particles.map((particle) => {
          // Determine direction based on interaction type and emotional states
          const rightToLeft = determineParticleDirection(type, whirlpool1, whirlpool2, particle.id);
          
          // Get particle shape and animation based on interaction and emotions
          const particleConfig = getParticleConfig(type, whirlpool1, whirlpool2, particle);
          
          // Create the particle path element
          return (
            <motion.path
              key={particle.id}
              d={particleConfig.path}
              fill={getInteractionColor()}
              stroke={particleConfig.useStroke ? getInteractionColor() : "none"}
              strokeWidth={particleConfig.strokeWidth || 0}
              animate={{
                ...particleConfig.animation,
                transition: {
                  duration: 3 * (1 / strength) * particleConfig.durationFactor,
                  repeat: Infinity,
                  ease: particleConfig.ease || "linear",
                  delay: particle.delay
                }
              }}
            />
          );
        })}
        
        {/* Additional effects based on interaction type */}
        {type === 'destructive' && (
          <motion.circle
            cx={50}
            cy={50}
            r={10}
            fill={getInteractionColor()}
            fillOpacity={0.3}
            animate={{
              r: [10, 20, 10],
              fillOpacity: [0.3, 0.1, 0.3],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        )}
        
        {type === 'harmony' && (
          <motion.circle
            cx={50}
            cy={50}
            r={15}
            fill="none"
            stroke={getInteractionColor()}
            strokeWidth={1}
            strokeDasharray="3 2"
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{ transformOrigin: '50px 50px' }}
          />
        )}
        
        {/* Special interaction effects for emotional states */}
        {createSpecialInteractionEffect(type, whirlpool1, whirlpool2, getInteractionColor())}
      </svg>
    </div>
  );
};

// Determine which direction particles should flow based on the emotional states
function determineParticleDirection(
  type: InteractionType, 
  whirlpool1: WhirlpoolState, 
  whirlpool2: WhirlpoolState, 
  particleId: number
): boolean {
  // For specific interaction patterns
  if (type === 'harmony' || type === 'resonant') {
    // Balanced flow in both directions
    return particleId % 2 === 0;
  }
  
  if (type === 'creative') {
    // More dynamic exchange
    return Math.random() > 0.4;
  }
  
  if (type === 'dissonant') {
    // Find the more "active" emotion
    const isW1Active = 
      whirlpool1.energyLevel === 'high' || 
      whirlpool1.energyLevel === 'erratic';
    
    const isW2Active = 
      whirlpool2.energyLevel === 'high' || 
      whirlpool2.energyLevel === 'erratic';
    
    if (isW1Active && !isW2Active) return false; // Left to right
    if (!isW1Active && isW2Active) return true;  // Right to left
    
    // If both or neither are active, create imbalanced flow
    return Math.random() > 0.7;
  }
  
  if (type === 'destructive' || type === 'fearful') {
    // Create chaotic, mainly opposing flows
    return Math.random() > 0.3;
  }
  
  // Default balanced flow
  return particleId % 2 === 0;
}

// Configure particle appearance and animation based on emotion types
function getParticleConfig(
  type: InteractionType, 
  whirlpool1: WhirlpoolState, 
  whirlpool2: WhirlpoolState,
  particle: { id: number, size: number, delay: number }
) {
  const size = particle.size;
  const isCircle = particle.id % 3 !== 0;
  
  // Determine direction for this particle
  const rightToLeft = determineParticleDirection(type, whirlpool1, whirlpool2, particle.id);
  
  // Default circle path
  let path = isCircle 
    ? `M${rightToLeft ? 75 : 25},50 a${size},${size} 0 1,0 ${size/10},0` 
    : `M${rightToLeft ? 75 : 25},${50 - size/2} l${size},0 l0,${size} l-${size},0 z`;
  
  // Default animation
  const animation: {
    x: number[];
    y?: number[];
    opacity: number[];
    scale: number[];
    rotate?: number[];
  } = {
    x: rightToLeft ? [-50, 50] : [50, -50],
    opacity: [1, type === 'destructive' ? 0 : 1],
    scale: type === 'destructive' ? [1, 0.5, 0] : [1, 1.2, 1],
  };
  
  // Customize based on interaction type
  let durationFactor = 1;
  let ease = "linear";
  let useStroke = false;
  let strokeWidth = 0;
  
  // Customize shape based on emotional types
  if (whirlpool1.colorSchema && whirlpool2.colorSchema) {
    // LUST and FEAR (Intimacy Mismatch)
    if (whirlpool1.colorSchema.primary === "#EC4899" && whirlpool2.colorSchema.primary === "#10B981" ||
        whirlpool2.colorSchema.primary === "#EC4899" && whirlpool1.colorSchema.primary === "#10B981") {
      // Pink particles more aggressive, green particles more defensive
      if (rightToLeft) {
        // FEAR's defensive barrier
        path = `M${70 - size/2},${50 - size} l${size},${size*2} l-${size},0 z`;
        animation.y = [0, Math.sin(particle.id * 2) * 20, 0];
        animation.rotate = [0, 180, 360];
        durationFactor = 0.8;
      } else {
        // LUST's approach
        path = isCircle 
          ? `M${25 - size},50 a${size},${size} 0 1,0 ${size * 2},0 a${size},${size} 0 1,0 -${size * 2},0`
          : `M${25 - size},${50 - size/2} l${size*2},0 l0,${size} l-${size*2},0 z`;
        animation.scale = [1, 1.3, 1];
        durationFactor = 1.2;
      }
    }
    
    // RAGE and CARE (Anger Meets Compassion)
    if (whirlpool1.colorSchema.primary === "#EF4444" && whirlpool2.colorSchema.primary === "#8B5CF6" ||
        whirlpool2.colorSchema.primary === "#EF4444" && whirlpool1.colorSchema.primary === "#8B5CF6") {
      if (!rightToLeft) {
        // RAGE's sharp triangles
        path = `M${25},${50 - size} l${size*1.5},${size} l-${size*1.5},${size} z`;
        animation.scale = [1, 1.2, 0.8, 1];
        durationFactor = 0.7;
      } else {
        // CARE's soothing waves
        path = `M${75},${50-size/2} c${-size/2},0 ${-size/2},${size} 0,${size}`;
        useStroke = true;
        strokeWidth = 1.5;
        animation.scale = [1, 1.1, 1];
        durationFactor = 1.3;
      }
    }
  }
  
  // Further customize based on interaction type
  switch (type) {
    case 'harmony':
      durationFactor = 1.2;
      ease = "easeInOut";
      animation.scale = [1, 1.1, 1];
      break;
    
    case 'resonant':
      durationFactor = 1.1;
      ease = "easeInOut";
      animation.y = [0, Math.sin(particle.id * 0.5) * 15, 0];
      break;
    
    case 'creative':
      durationFactor = 0.9;
      ease = "easeOut";
      animation.rotate = [0, particle.id % 2 === 0 ? 180 : -180];
      animation.scale = [1, 1.3, 1];
      break;
    
    case 'dissonant':
      durationFactor = 0.8;
      ease = "easeIn";
      animation.y = [0, (particle.id % 2 === 0 ? 1 : -1) * 10, 0];
      break;
    
    case 'fearful':
      durationFactor = 0.7;
      ease = "easeOut";
      animation.y = [0, Math.sin(particle.id * 2) * 20, 0];
      animation.scale = [1, 0.7, 1];
      break;
    
    case 'destructive':
      durationFactor = 0.6;
      ease = "easeIn";
      useStroke = true;
      strokeWidth = 1;
      break;
  }
  
  return {
    path,
    animation,
    durationFactor,
    ease,
    useStroke,
    strokeWidth
  };
}

// Create special interaction effects for emotional combinations
function createSpecialInteractionEffect(
  type: InteractionType,
  whirlpool1: WhirlpoolState,
  whirlpool2: WhirlpoolState,
  color: string
) {
  // Only add special effects if we have color schemas
  if (!whirlpool1.colorSchema || !whirlpool2.colorSchema) {
    return null;}
  
    // LUST and FEAR (Intimacy Mismatch)
    if ((whirlpool1.colorSchema.primary === "#EC4899" && whirlpool2.colorSchema.primary === "#10B981") ||
        (whirlpool2.colorSchema.primary === "#EC4899" && whirlpool1.colorSchema.primary === "#10B981")) {
      if (type === 'dissonant') {
        return (
          <g>
            {/* Barrier between whirlpools */}
            <motion.path
              d="M50,30 L50,70"
              stroke="#10B981"
              strokeWidth={3}
              strokeDasharray="5 3"
              animate={{
                x: [-2, 2, -2],
                opacity: [0.6, 0.8, 0.6],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            {/* Fear ripples */}
            <motion.circle
              cx={60}
              cy={50}
              r={5}
              fill="none"
              stroke="#10B981"
              strokeWidth={1}
              animate={{
                r: [5, 15, 5],
                opacity: [0.8, 0, 0.8],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }
              }}
            />
          </g>
        );
      }
    }
    
    // RAGE and CARE (Anger Meets Compassion)
    if ((whirlpool1.colorSchema.primary === "#EF4444" && whirlpool2.colorSchema.primary === "#8B5CF6") ||
        (whirlpool2.colorSchema.primary === "#EF4444" && whirlpool1.colorSchema.primary === "#8B5CF6")) {
      if (type === 'resonant') {
        return (
          <g>
            {/* Soothing wave effect from CARE to RAGE */}
            <motion.path
              d="M60,50 C65,45 70,55 75,50"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth={2}
              strokeLinecap="round"
              animate={{
                d: [
                  "M60,50 C65,45 70,55 75,50",
                  "M55,50 C60,42 65,58 70,50",
                  "M50,50 C55,40 60,60 65,50",
                  "M45,50 C50,42 55,58 60,50",
                  "M40,50 C45,45 50,55 55,50",
                  "M35,50 C40,47 45,53 50,50",
                  "M30,50 C35,48 40,52 45,50",
                  "M25,50 C30,49 35,51 40,50"
                ],
                opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          </g>
        );
      }
    }
    
    // PLAY and SEEKING (Playful Exploration)
    if ((whirlpool1.colorSchema.primary === "#3B82F6" && whirlpool2.colorSchema.primary === "#F59E0B") ||
        (whirlpool2.colorSchema.primary === "#3B82F6" && whirlpool1.colorSchema.primary === "#F59E0B")) {
      if (type === 'creative') {
        // Create playful sparks in the middle
        return (
          <g>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.circle
                key={`spark-${i}`}
                cx={50}
                cy={50}
                r={2}
                fill={blendColors("#3B82F6", "#F59E0B", Math.random())}
                animate={{
                  cx: [50, 50 + (Math.random() * 30 - 15)],
                  cy: [50, 50 + (Math.random() * 30 - 15)],
                  r: [2, Math.random() * 3 + 1],
                  opacity: [0, 1, 0],
                  transition: {
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 0.5,
                    ease: "easeInOut"
                  }
                }}
              />
            ))}
          </g>
        );
      }
    }
    
    // CARE and CARE (Compassionate Connection)
    if (whirlpool1.colorSchema.primary === "#8B5CF6" && whirlpool2.colorSchema.primary === "#8B5CF6") {
      if (type === 'harmony') {
        return (
          <g>
            <motion.path
              d="M25,50 C35,40 45,60 50,50 C55,40 65,60 75,50"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth={1.5}
              strokeLinecap="round"
              animate={{
                d: [
                  "M25,50 C35,40 45,60 50,50 C55,40 65,60 75,50",
                  "M25,50 C35,60 45,40 50,50 C55,60 65,40 75,50",
                  "M25,50 C35,40 45,60 50,50 C55,40 65,60 75,50"
                ],
                opacity: [0.7, 1, 0.7],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </g>
        );
      }
    }
    
    // GRIEF and CARE (Compassionate Support)
    if ((whirlpool1.colorSchema.primary === "#6B7280" && whirlpool2.colorSchema.primary === "#8B5CF6") ||
        (whirlpool2.colorSchema.primary === "#6B7280" && whirlpool1.colorSchema.primary === "#8B5CF6")) {
      if (type === 'resonant') {
        const griefSide = whirlpool1.colorSchema.primary === "#6B7280" ? 25 : 75;
        const careSide = whirlpool1.colorSchema.primary === "#8B5CF6" ? 25 : 75;
        const midPoint = (griefSide + careSide) / 2;
        
        return (
          <g>
            {/* Gentle waves from CARE to GRIEF */}
            <motion.path
              d={`M${careSide},50 Q${midPoint},45 ${griefSide},50`}
              fill="none"
              stroke="#8B5CF6"
              strokeWidth={1.5}
              strokeLinecap="round"
              animate={{
                d: [
                  `M${careSide},50 Q${midPoint},45 ${griefSide},50`,
                  `M${careSide},50 Q${midPoint},55 ${griefSide},50`,
                  `M${careSide},50 Q${midPoint},45 ${griefSide},50`
                ],
                opacity: [0.7, 1, 0.7],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            {/* Slow tears/drops from GRIEF */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.circle
                key={`tear-${i}`}
                cx={griefSide}
                cy={40}
                r={1.5}
                fill="#6B7280"
                animate={{
                  cy: [40, 60],
                  opacity: [0, 1, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeIn"
                  }
                }}
              />
            ))}
          </g>
        );
      }
    }
    
    // RAGE and FEAR (Conflict Escalation)
    if ((whirlpool1.colorSchema.primary === "#EF4444" && whirlpool2.colorSchema.primary === "#10B981") ||
        (whirlpool2.colorSchema.primary === "#EF4444" && whirlpool1.colorSchema.primary === "#10B981")) {
      if (type === 'destructive') {
        return (
          <g>
            {/* Collision point in the middle */}
            <motion.path
              d="M45,45 L55,55 M45,55 L55,45"
              stroke={blendColors("#EF4444", "#10B981", 0.5)}
              strokeWidth={3}
              strokeLinecap="round"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeOut"
                }
              }}
            />
            {/* Chaotic bursts */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              return (
                <motion.line
                  key={`burst-${i}`}
                  x1={50}
                  y1={50}
                  x2={50 + Math.cos(angle) * 15}
                  y2={50 + Math.sin(angle) * 15}
                  stroke={i % 2 === 0 ? "#EF4444" : "#10B981"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  animate={{
                    x2: [
                      50 + Math.cos(angle) * 15,
                      50 + Math.cos(angle) * 25,
                      50 + Math.cos(angle) * 15
                    ],
                    y2: [
                      50 + Math.sin(angle) * 15,
                      50 + Math.sin(angle) * 25,
                      50 + Math.sin(angle) * 15
                    ],
                    opacity: [0.8, 1, 0.8],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }
                  }}
                />
              );
            })}
          </g>
        );
      }
    }
    
    return null;
  }
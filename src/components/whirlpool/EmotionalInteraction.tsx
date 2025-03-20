"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EmotionId, 
  PatternId, 
  FlowDirection, 
  InteractionScenario,
  emotionalStates,
  interactionPatterns,
  interactionScenarios,
  getEmotionSymbol,
  getInteractionColor
} from '@/lib/emotionData';

interface AnimationParams {
  duration: number;
  ease: string;
  scale: number[];
  opacity: number[];
}

interface EmotionalInteractionProps {
  scenarioId?: string;
}

// Main component
export default function EmotionalInteraction({ scenarioId = "mutual-care" }: EmotionalInteractionProps) {
  const [isClient, setIsClient] = useState(false);
  
  // This ensures particles only render on the client
  useEffect(() => {
    setIsClient(true);
  }, []);
  // Get the selected scenario
  const scenario = interactionScenarios.find(s => s.id === scenarioId) || interactionScenarios[0];
  
  // Get emotion and pattern details
  const emotion1 = emotionalStates[scenario.emotion1];
  const emotion2 = emotionalStates[scenario.emotion2];
  const pattern = interactionPatterns[scenario.pattern];
  
  // Animation parameters based on interaction pattern
  const getAnimationParams = (patternId: PatternId): AnimationParams => {
    switch (patternId) {
      case "harmony":
        return {
          duration: 4,
          ease: "easeInOut",
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.9, 0.7]
        };
      case "creative":
        return {
          duration: 3,
          ease: "easeOut",
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.95, 0.6]
        };
      case "resonant":
        return {
          duration: 3.5,
          ease: "easeInOut",
          scale: [1, 1.08, 1],
          opacity: [0.75, 0.9, 0.75]
        };
      case "dissonant":
        return {
          duration: 2.5,
          ease: "easeIn",
          scale: [1, 0.95, 1],
          opacity: [0.7, 0.85, 0.7]
        };
      case "fearful":
        return {
          duration: 2,
          ease: "easeOut",
          scale: [1, 0.9, 1],
          opacity: [0.8, 0.6, 0.8]
        };
      case "destructive":
        return {
          duration: 1.5,
          ease: "anticipate",
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.7, 0.9, 0.6, 0.7]
        };
      default:
        return {
          duration: 3,
          ease: "easeInOut",
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7]
        };
    }
  };
  
  const animParams = getAnimationParams(scenario.pattern);
  const interactionColor = getInteractionColor(scenario.emotion1, scenario.emotion2, scenario.pattern);
  
  // Determine the flow direction based on the interaction pattern
  const getFlowDirection = (patternId: PatternId): FlowDirection => {
    switch (patternId) {
      case "harmony":
      case "creative":
      case "resonant":
        return "bidirectional"; // Equal exchange
      case "dissonant":
      case "fearful":
        return scenario.emotion1 === "rage" || scenario.emotion1 === "lust" 
          ? "leftToRight" // First emotion dominates
          : "rightToLeft"; // Second emotion dominates
      case "destructive":
        return "chaotic"; // Unpredictable
      default:
        return "bidirectional";
    }
  };
  
  const flowDirection = getFlowDirection(scenario.pattern);
  
  return (
    <div className="w-full h-[300px] bg-gray-50 rounded-xl relative overflow-hidden">
      {/* Background that subtly reflects the interaction pattern */}
      <div 
        className="absolute inset-0 bg-opacity-10"
        style={{ 
          background: `linear-gradient(45deg, ${emotion1.color}20, ${emotion2.color}20)`,
          opacity: 0.3
        }}
      />
      
      {/* Interaction visualization */}
      <div className="absolute inset-0 flex items-center justify-between px-12">
        {/* Left person/emotion */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-20 h-20 rounded-full flex items-center justify-center relative"
            style={{ backgroundColor: emotion1.color }}
            animate={{
              scale: animParams.scale,
              boxShadow: [
                `0 0 15px ${emotion1.color}80`,
                `0 0 25px ${emotion1.color}a0`,
                `0 0 15px ${emotion1.color}80`
              ]
            }}
            transition={{
              duration: animParams.duration,
              ease: animParams.ease,
              repeat: Infinity
            }}
          >
            {/* Icon or symbol representing the emotion */}
            <motion.div
              className="text-white text-xl absolute"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ 
                duration: emotion1.pulseRate === "rapid" ? 1.5 : 
                         emotion1.pulseRate === "fast" ? 2 :
                         emotion1.pulseRate === "medium" ? 3 : 4,
                repeat: Infinity
              }}
            >
              {getEmotionSymbol(scenario.emotion1)}
            </motion.div>
            
            {/* Emotional reach indicator */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ 
                border: `2px solid ${emotion1.color}`,
                backgroundColor: `${emotion1.color}20`
              }}
              animate={{
                scale: [1, 
                  emotion1.reach === "far" ? 2.2 : 
                  emotion1.reach === "medium" ? 1.8 : 1.4, 
                  1],
                opacity: [0.7, 0.2, 0]
              }}
              transition={{
                duration: emotion1.pulseRate === "rapid" ? 2 : 
                         emotion1.pulseRate === "fast" ? 2.5 :
                         emotion1.pulseRate === "medium" ? 3.5 : 4.5,
                repeat: Infinity
              }}
            />
          </motion.div>
          <p className="mt-3 text-sm font-medium text-gray-700">
            {emotion1.name.split('/')[1].trim()}
          </p>
        </div>
        
        {/* Interaction zone */}
        <div className="flex-1 mx-4 flex items-center justify-center relative h-full">
          {/* Connection line based on interaction pattern */}
          <motion.div
            className="h-1 w-full absolute"
            style={{ 
              background: `linear-gradient(to right, ${emotion1.color}, ${interactionColor}, ${emotion2.color})`,
              opacity: 0.7
            }}
            animate={{
              height: pattern.animationStyle === "chaotic" ? [1, 3, 1, 4, 1] : [1, 2, 1],
              opacity: animParams.opacity
            }}
            transition={{
              duration: animParams.duration,
              ease: animParams.ease,
              repeat: Infinity
            }}
          />
          
          {/* Interaction particles/energy */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Generate different particles based on flow direction */}
            {Array.from({ length: 5 }).map((_, i) => (
              <React.Fragment key={i}>
                {/* Left to right particles */}
                {(flowDirection === "leftToRight" || flowDirection === "bidirectional" || flowDirection === "chaotic") && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{ 
                      backgroundColor: emotion1.color,
                      width: 6 + Math.random() * 6,
                      height: 6 + Math.random() * 6
                    }}
                    initial={{ 
                      x: -100 - (i * 20), 
                      y: (Math.random() * 60) - 30,
                      opacity: 0.8
                    }}
                    animate={{ 
                      x: 100 + (i * 20),
                      opacity: flowDirection === "chaotic" ? [0.8, 0.4, 0.9, 0.5] : [0.8, 0.6, 0.8]
                    }}
                    transition={{
                      duration: 3 + (Math.random() * 2),
                      repeat: Infinity,
                      ease: flowDirection === "chaotic" ? "easeInOut" : "linear",
                      delay: i * 0.4
                    }}
                  />
                )}
                
                {/* Right to left particles */}
                {(flowDirection === "rightToLeft" || flowDirection === "bidirectional" || flowDirection === "chaotic") && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{ 
                      backgroundColor: emotion2.color,
                      width: 6 + Math.random() * 6,
                      height: 6 + Math.random() * 6
                    }}
                    initial={{ 
                      x: 100 + (i * 20), 
                      y: (Math.random() * 60) - 30,
                      opacity: 0.8
                    }}
                    animate={{ 
                      x: -100 - (i * 20),
                      opacity: flowDirection === "chaotic" ? [0.8, 0.3, 0.7, 0.5] : [0.8, 0.6, 0.8]
                    }}
                    transition={{
                      duration: 3 + (Math.random() * 2),
                      repeat: Infinity,
                      ease: flowDirection === "chaotic" ? "easeInOut" : "linear",
                      delay: i * 0.3 + 0.5
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Interaction effect in the middle */}
          {scenario.pattern === "harmony" || scenario.pattern === "resonant" ? (
            <motion.div
              className="absolute rounded-full"
              style={{ 
                backgroundColor: interactionColor,
                width: 20,
                height: 20,
                opacity: 0.7
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ) : scenario.pattern === "destructive" ? (
            <motion.div
              className="absolute w-12 h-12 flex items-center justify-center"
              animate={{
                rotate: [0, 180, 0],
                scale: [1, 1.2, 0.9, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <motion.path 
                  d="M5 5L19 19M5 19L19 5" 
                  stroke={interactionColor} 
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>
          ) : scenario.pattern === "creative" ? (
            <motion.div
              className="absolute"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <motion.path 
                  d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19" 
                  stroke={interactionColor} 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>
          ) : scenario.pattern === "dissonant" ? (
            <motion.div
              className="absolute"
              style={{
                width: 24,
                height: 24,
                border: `2px solid ${interactionColor}`,
                borderRadius: 4
              }}
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 0.9, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ) : (
            // Default interaction effect
            <motion.div
              className="absolute rounded-full"
              style={{ 
                backgroundColor: interactionColor,
                width: 15,
                height: 15,
                opacity: 0.5
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
        
        {/* Right person/emotion */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-20 h-20 rounded-full flex items-center justify-center relative"
            style={{ backgroundColor: emotion2.color }}
            animate={{
              scale: animParams.scale,
              boxShadow: [
                `0 0 15px ${emotion2.color}80`,
                `0 0 25px ${emotion2.color}a0`,
                `0 0 15px ${emotion2.color}80`
              ]
            }}
            transition={{
              duration: animParams.duration,
              ease: animParams.ease,
              repeat: Infinity
            }}
          >
            {/* Icon or symbol representing the emotion */}
            <motion.div
              className="text-white text-xl absolute"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ 
                duration: emotion2.pulseRate === "rapid" ? 1.5 : 
                         emotion2.pulseRate === "fast" ? 2 :
                         emotion2.pulseRate === "medium" ? 3 : 4,
                repeat: Infinity
              }}
            >
              {getEmotionSymbol(scenario.emotion2)}
            </motion.div>
            
            {/* Emotional reach indicator */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ 
                border: `2px solid ${emotion2.color}`,
                backgroundColor: `${emotion2.color}20`
              }}
              animate={{
                scale: [1, 
                  emotion2.reach === "far" ? 2.2 : 
                  emotion2.reach === "medium" ? 1.8 : 1.4, 
                  1],
                opacity: [0.7, 0.2, 0]
              }}
              transition={{
                duration: emotion2.pulseRate === "rapid" ? 2 : 
                         emotion2.pulseRate === "fast" ? 2.5 :
                         emotion2.pulseRate === "medium" ? 3.5 : 4.5,
                repeat: Infinity
              }}
            />
          </motion.div>
          <p className="mt-3 text-sm font-medium text-gray-700">
            {emotion2.name.split('/')[1].trim()}
          </p>
        </div>
      </div>
    </div>
  );
}
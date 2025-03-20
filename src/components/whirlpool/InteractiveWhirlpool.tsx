"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import whirlpool model data
import whirlpoolModel from '@/content/whirlpool/model.json';

// Helper function to generate lighter and darker variants of a color
const generateColorVariants = (baseColor: string) => {
  // Simple function to lighten a hex color
  const lightenColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    ).toString(16).slice(1);
  };
  
  // Simple function to darken a hex color
  const darkenColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    
    return '#' + (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    ).toString(16).slice(1);
  };
  
  return {
    light: lightenColor(baseColor, 20),
    dark: darkenColor(baseColor, 20)
  };
};

// Define types for layer data
interface Layer {
  id: string;
  name: string;
  description: string;
  prompts: string[];
  color: string;
  colorLight?: string;
  colorDark?: string;
  icon: string;
  order?: number;
  reflectionPrompts?: string[];
  blockageIndications?: string[];
  flowStates?: string[];
}

// Enhance the layers with color variants if they don't already have them
const enhancedLayers = whirlpoolModel.layers.map((layer: any) => {
  if (layer.colorLight && layer.colorDark) {
    return layer as Layer;
  }
  
  const colorVariants = generateColorVariants(layer.color);
  return {
    ...layer,
    colorLight: colorVariants.light,
    colorDark: colorVariants.dark
  } as Layer;
});

export default function InteractiveWhirlpool() {
  // Explicitly type the state variables to accept string or null
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [hoverLayer, setHoverLayer] = useState<string | null>(null);

  // Calculate the focused layer
  const focusedLayer = activeLayer || hoverLayer;

  return (
    <div className="my-12">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Whirlpool Visualization */}
        <div className="relative w-full md:w-1/2 aspect-square max-w-md mx-auto">
          {/* Render layers from outside in */}
          {[...enhancedLayers].reverse().map((layer, idx) => {
            const isActive = focusedLayer === layer.id;
            const size = 100 - (idx * (75 / enhancedLayers.length));
            
            return (
              <motion.div
                key={layer.id}
                className="absolute rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  width: `${size}%`,
                  height: `${size}%`,
                  backgroundColor: layer.color,
                  top: '50%',
                  left: '50%',
                  // Critical fix: Reversed z-index so inner layers appear above outer layers
                  zIndex: idx + 1,
                }}
                initial={{ opacity: 0.5, x: '-50%', y: '-50%' }}
                animate={{ 
                  opacity: isActive ? 0.9 : 0.5,
                  scale: isActive ? 1.05 : 1,
                  x: '-50%', 
                  y: '-50%',
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                onMouseEnter={() => setHoverLayer(layer.id)}
                onMouseLeave={() => setHoverLayer(null)}
              >
                {idx === enhancedLayers.length - 1 && (
                  <div className="text-white text-sm md:text-base font-medium">
                    Core
                  </div>
                )}
              </motion.div>
            );
          })}
          
          {/* Water flow animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
            <motion.div 
              className="absolute inset-0 opacity-10" 
              style={{ 
                background: `radial-gradient(circle, rgba(135,206,235,0.3) 0%, rgba(135,206,235,0) 70%)` 
              }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut" 
              }}
            />
          </div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="absolute inset-0 rounded-full border border-wairua-light/30"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ 
                  scale: 1.2, 
                  opacity: 0 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: i * 1.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Layer Information Panel */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6 min-h-[300px]">
          {focusedLayer ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={focusedLayer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const layer = enhancedLayers.find(l => l.id === focusedLayer);
                  if (!layer) return null;
                  
                  return (
                    <>
                      <div 
                        className="w-full h-1 mb-4 rounded-full" 
                        style={{ backgroundColor: layer.color }}
                      ></div>
                      <h3 className="text-xl font-montserrat mb-3">{layer.name}</h3>
                      <p className="text-gray-600 mb-4">{layer.description}</p>
                      
                      <div className="mt-6 space-y-6">
                        <div>
                          <h4 className="font-medium text-sm text-gray-500 mb-2">Reflection Questions</h4>
                          <ul className="space-y-2 list-disc pl-5">
                            {layer.prompts.map((prompt, index) => (
                              <li key={index}>{prompt}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {layer.reflectionPrompts && layer.reflectionPrompts.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-2">Deeper Reflection</h4>
                            <ul className="space-y-2 list-disc pl-5">
                              {layer.reflectionPrompts.map((prompt, index) => (
                                <li key={index}>{prompt}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          {layer.blockageIndications && layer.blockageIndications.length > 0 && (
                            <div>
                              <h4 className="font-medium text-sm text-gray-500 mb-2">Potential Blockages</h4>
                              <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                                {layer.blockageIndications.slice(0, 3).map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {layer.flowStates && layer.flowStates.length > 0 && (
                            <div>
                              <h4 className="font-medium text-sm text-gray-500 mb-2">Flow States</h4>
                              <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                                {layer.flowStates.slice(0, 3).map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-xl font-montserrat mb-3">Explore Your Whirlpool</h3>
              <p className="text-gray-600">
                Hover over or click on any layer of the whirlpool to learn more about each dimension of wellbeing.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500 italic text-center px-4">
        The whirlpool model recognizes that wellbeing emerges from the interconnected flow between all layers of our existence,
        from our deepest spiritual core to our outer environmental context.
      </div>
    </div>
  );
}
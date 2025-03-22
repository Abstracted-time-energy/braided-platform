"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  order: number;
  reflectionPrompts?: string[];
  blockageIndications?: string[];
  flowStates?: string[];
}

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

// Hardcoded whirlpool layers with genetics included
const WHIRLPOOL_LAYERS: Layer[] = [
  {
    id: "wairua",
    name: "Spirit",
    description: "The core of your whirlpool - your spiritual essence, connection to peace, purpose, meaning, and values.",
    prompts: [
      "What gives your life meaning and purpose?",
      "What values are most important to you?",
      "How do you connect with something larger than yourself?",
      "When are you most at peace?"
    ],
    color: "#87CEEB",
    colorLight: "#e0f5ff",
    colorDark: "#5BA3D0",
    icon: "Star",
    order: 1,
    reflectionPrompts: [
      "When do you feel most connected to your sense of purpose?",
      "How might you align your daily actions more closely with your core values?",
      "What practices help you connect with your spiritual dimension?"
    ],
    blockageIndications: [
      "Feeling disconnected from purpose",
      "Value conflicts or confusion",
      "Spiritual emptiness or questioning",
      "Hopelessness"
    ],
    flowStates: [
      "Clarity of purpose",
      "Alignment with values",
      "Sense of connection to something greater"
    ]
  },
  {
    id: "genetics",
    name: "Genetics",
    description: "Your biological inheritance that shapes your predispositions, tendencies, and unique traits.",
    prompts: [
      "What inherited traits do you recognize in yourself?",
      "How do your genetic predispositions influence your wellbeing?",
      "What family patterns have you observed across generations?",
      "How do you work with your biological tendencies?"
    ],
    color: "#FFD700",
    colorLight: "#fff8d1",
    colorDark: "#DAA520",
    icon: "Dna",
    order: 3,
    reflectionPrompts: [
      "When do you feel most at peace with your inherited traits?",
      "How might you honor your genetic inheritance while creating your own path?",
      "What genetic strengths can you build upon for greater wellbeing?"
    ],
    blockageIndications: [
      "Genetic determinism or fatalism",
      "Resistance to inherited traits",
      "Ignoring biological needs or limitations",
      "Perpetuating unhealthy family patterns"
    ],
    flowStates: [
      "Integration of inherited traits",
      "Working with rather than against biology",
      "Transcending limiting genetic patterns"
    ]
    
  },
  {
    id: "mauri",
    name: "Energy",
    description: "Your life force and vitality - the energy that animates and sustains you through each day.",
    prompts: [
      "How is your overall energy level?",
      "How do you feel when you wake up in the morning?",
      "What activities energise you?",
      "What drains your energy?"
    ],
    color: "#90EE90",
    colorLight: "#d1f0e0",
    colorDark: "#3CB371",
    icon: "Zap",
    order: 2,
    reflectionPrompts: [
      "When do you feel most energised and alive?",
      "How might you structure your day to honour your natural energy rhythms?",
      "What practices help you restore your energy when depleted?"
    ],
    blockageIndications: [
      "Chronic fatigue or exhaustion",
      "Energy crashes or inconsistency",
      "Feeling drained by activities that once energised you",
      "Blunted emotions or disconnection"
    ],
    flowStates: [
      "Sustainable energy throughout the day",
      "Vitality and aliveness",
      "Natural rhythms of activity and rest"
    ]
  
  },
  {
    id: "mind",
    name: "Mind",
    description: "Your thoughts, emotions, beliefs, and mental patterns that shape your experience.",
    prompts: [
      "What thought patterns do you notice?",
      "How do you relate to difficult emotions?",
      "What beliefs shape your view of yourself and the world?"
    ],
    color: "#F5DEB3",
    colorLight: "#f0e0d1",
    colorDark: "#DEB887",
    icon: "Brain",
    order: 4,
    reflectionPrompts: [
      "When do you experience mental clarity and peace?",
      "How might you respond to challenging thoughts with greater compassion?",
      "What beliefs serve your wellbeing, and which might be limiting you?"
    ],
    blockageIndications: [
      "Rumination or thought loops",
      "Harsh self-criticism",
      "Rigid or limiting beliefs"
    ],
    flowStates: [
      "Mental clarity and flexibility",
      "Emotional awareness and regulation",
      "Helpful and supportive belief systems"
    ]
  },
  {
    id: "nervous",
    name: "Nervous System",
    description: "Your body's stress response and regulation system that influences how you respond to life.",
    prompts: [
      "How does your body respond to stress?",
      "What helps you feel calm and centered?",
      "How do you recover after challenging experiences?"
    ],
    color: "#D8BFD8",
    colorLight: "#e0d1f0",
    colorDark: "#9370DB",
    icon: "Activity",
    order: 5,
    reflectionPrompts: [
      "When does your nervous system feel most settled and regulated?",
      "How might you recognize early signs of dysregulation?",
      "What practices help you return to a state of calm after activation?"
    ],
    blockageIndications: [
      "Chronic stress or anxiety",
      "Shutdown or numbing responses",
      "Difficulty returning to baseline after stress"
    ],
    flowStates: [
      "Resilient response to stressors",
      "Ability to self-regulate",
      "Balance between activation and rest"
    ]
  },
  {
    id: "body",
    name: "Body",
    description: "Your physical health, movement, rest, and sensory experience of the world.",
    prompts: [
      "How do you care for your physical health?",
      "What is your relationship with movement and rest?",
      "How do you experience the world through your senses?"
    ],
    color: "#B0C4DE",
    colorLight: "#d1e0f0",
    colorDark: "#6495ED",
    icon: "Heart",
    order: 6,
    reflectionPrompts: [
      "When does your body feel most alive and well?",
      "How might you honor your body's needs more fully?",
      "What sensory experiences bring you joy and grounding?"
    ],
    blockageIndications: [
      "Chronic pain or tension",
      "Disconnection from bodily sensations",
      "Ignoring physical needs"
    ],
    flowStates: [
      "Embodied presence",
      "Balance of movement and rest",
      "Attunement to physical needs"
    ]
  },
  {
    id: "relationship",
    name: "Relationships",
    description: "Your connections with others - family, friends, partners, and colleagues.",
    prompts: [
      "What are your most important relationships?",
      "How do you give and receive support?",
      "What patterns do you notice in your relationships?"
    ],
    color: "#FFB6C1",
    colorLight: "#f0d1e0",
    colorDark: "#DB7093",
    icon: "Users",
    order: 7,
    reflectionPrompts: [
      "When do you feel most connected and understood by others?",
      "How might you cultivate more authentic relationships?",
      "What boundaries would support healthier connections?"
    ],
    blockageIndications: [
      "Isolation or loneliness",
      "Conflict or misunderstanding",
      "Patterns of disconnection"
    ],
    flowStates: [
      "Authentic connection",
      "Mutual support and understanding",
      "Healthy boundaries"
    ]
  },
  {
    id: "community",
    name: "Community",
    description: "Your belonging to groups, communities, and collective identities.",
    prompts: [
      "What communities are you part of?",
      "How do you contribute to your communities?",
      "Where do you feel a sense of belonging?"
    ],
    color: "#98FB98",
    colorLight: "#e0f0d1",
    colorDark: "#3CB371",
    icon: "Home",
    order: 8,
    reflectionPrompts: [
      "When do you experience a genuine sense of belonging?",
      "How might your gifts and talents serve your community?",
      "What communities align with your values and aspirations?"
    ],
    blockageIndications: [
      "Feeling like an outsider",
      "Lack of meaningful contribution",
      "Disconnection from shared purpose"
    ],
    flowStates: [
      "Sense of belonging",
      "Meaningful contribution",
      "Collective support and resilience"
    ]
  },
  {
    id: "environment",
    name: "Environment",
    description: "Your physical surroundings, access to nature, and the broader ecology you're part of.",
    prompts: [
      "How does your environment affect your wellbeing?",
      "What is your connection to the natural world?",
      "How do you shape and respond to your surroundings?"
    ],
    color: "#AFEEEE",
    colorLight: "#d1f0f0",
    colorDark: "#5F9EA0",
    icon: "Globe",
    order: 9,
    reflectionPrompts: [
      "When do your surroundings most support your wellbeing?",
      "How might you create spaces that nourish rather than deplete you?",
      "What forms of connection with nature restore your sense of balance?"
    ],
    blockageIndications: [
      "Disconnection from natural world",
      "Chaotic or depleting surroundings",
      "Environmental stressors"
    ],
    flowStates: [
      "Harmony with surroundings",
      "Nourishing connection to nature",
      "Environmental stewardship"
    ]
  }
];

export default function StandaloneInteractiveWhirlpool() {
  // Explicitly type the state variables to accept string or null
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [hoverLayer, setHoverLayer] = useState<string | null>(null);
  const [processedLayers, setProcessedLayers] = useState<Layer[]>([]);
  
  useEffect(() => {
    // Process layers once on component mount
    const enhancedLayers = WHIRLPOOL_LAYERS.map(layer => {
      // If color variants are not provided, generate them
      if (!layer.colorLight || !layer.colorDark) {
        const variants = generateColorVariants(layer.color);
        return {
          ...layer,
          colorLight: variants.light,
          colorDark: variants.dark
        };
      }
      return layer;
    });
    
    // Sort layers by order
    const sortedLayers = [...enhancedLayers].sort((a, b) => a.order - b.order);
    setProcessedLayers(sortedLayers);
  }, []);

  // Calculate the focused layer
  const focusedLayer = activeLayer || hoverLayer;

  return (
    <div className="my-12">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Whirlpool Visualization */}
        <div className="relative w-full md:w-1/2 aspect-square max-w-md mx-auto">
          {/* Render layers from outside in */}
          {[...processedLayers].reverse().map((layer, idx) => {
            const isActive = focusedLayer === layer.id;
            const size = 100 - (idx * (75 / processedLayers.length));
            
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
                {idx === processedLayers.length - 1 && (
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
                  const layer = processedLayers.find(l => l.id === focusedLayer);
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
      </div>
    </div>
  );
}
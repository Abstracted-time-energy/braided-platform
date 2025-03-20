"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Whirlpool } from './Whirlpool';
import { InteractionEffects } from './InteractionEffects';
import { RiverBackground } from './RiverBackground';
import { 
  generateWhirlpoolData, 
  getInteractionEffects, 
  emotionalStates, 
  interactionPairs, 
  getEmotionalStatesForInteraction 
} from '@/lib/whirlpool-utils';
import { WhirlpoolState, InteractionType, WhirlpoolLayer } from '@/types/whirlpool';

type WhirlpoolInteractionProps = {
  initialStates?: {
    whirlpool1: WhirlpoolState;
    whirlpool2: WhirlpoolState;
  };
  interactionId?: string;
  showControls?: boolean;
  className?: string;
};

export default function WhirlpoolInteraction({
  initialStates,
  interactionId,
  showControls = true,
  className,
}: WhirlpoolInteractionProps) {
  // If interaction ID is provided, use it to get emotional states
  const emotionalInteraction = interactionId 
    ? getEmotionalStatesForInteraction(interactionId) 
    : null;
  
  // Whirlpool states - use emotional states if available, otherwise use provided initialStates or defaults
  const [whirlpool1, setWhirlpool1] = useState<WhirlpoolState>(
    emotionalInteraction?.state1?.whirlpoolState || 
    initialStates?.whirlpool1 || 
    generateWhirlpoolData('default')
  );
  
  const [whirlpool2, setWhirlpool2] = useState<WhirlpoolState>(
    emotionalInteraction?.state2?.whirlpoolState || 
    initialStates?.whirlpool2 || 
    generateWhirlpoolData('default')
  );
  
  // Interaction state
  const [interactionType, setInteractionType] = useState<InteractionType>(
    emotionalInteraction?.interaction?.interactionType as InteractionType || 'neutral'
  );
  const [interactionStrength, setInteractionStrength] = useState(0.7);
  const [selectedInteractionId, setSelectedInteractionId] = useState<string | undefined>(interactionId);
  
  // Animation controls
  const whirlpool1Controls = useAnimation();
  const whirlpool2Controls = useAnimation();
  
  // Calculate interaction effects when states change
  useEffect(() => {
    const effects = getInteractionEffects(whirlpool1, whirlpool2, interactionStrength);
    setInteractionType(effects.type);
    
    // Apply animations based on interaction type
    whirlpool1Controls.start({
      rotate: effects.w1RotationSpeed,
      scale: effects.w1Scale,
      transition: { duration: 2, ease: "easeInOut" }
    });
    
    whirlpool2Controls.start({
      rotate: effects.w2RotationSpeed,
      scale: effects.w2Scale,
      transition: { duration: 2, ease: "easeInOut" }
    });
  }, [whirlpool1, whirlpool2, interactionStrength]);
  
  // Effect to update states when interactionId changes
  useEffect(() => {
    if (interactionId && interactionId !== selectedInteractionId) {
      const emotionalStates = getEmotionalStatesForInteraction(interactionId);
      if (emotionalStates) {
        setWhirlpool1(emotionalStates.state1?.whirlpoolState || whirlpool1);
        setWhirlpool2(emotionalStates.state2?.whirlpoolState || whirlpool2);
        setInteractionType(emotionalStates.interaction?.interactionType as InteractionType || interactionType);
        setSelectedInteractionId(interactionId);
        setInteractionStrength(0.7); // Set a good default strength for emotional interactions
      }
    }
  }, [interactionId]);
  
  // Apply emotional interaction preset
  const applyEmotionalInteraction = (id: string) => {
    const emotionalStates = getEmotionalStatesForInteraction(id);
    if (emotionalStates) {
      setWhirlpool1(emotionalStates.state1?.whirlpoolState || whirlpool1);
      setWhirlpool2(emotionalStates.state2?.whirlpoolState || whirlpool2);
      setInteractionType(emotionalStates.interaction?.interactionType as InteractionType || interactionType);
      setSelectedInteractionId(id);
      setInteractionStrength(0.7); // Set a good default strength for emotional interactions
    }
  };
  
  // Preset interaction scenarios
  const applyPreset = (preset: 'harmony' | 'creativity' | 'dissonance' | 'fear') => {
    switch(preset) {
      case 'harmony':
        setWhirlpool1({...whirlpool1, energyLevel: 'balanced', dominantLayer: 'wairua'});
        setWhirlpool2({...whirlpool2, energyLevel: 'balanced', dominantLayer: 'wairua'});
        setInteractionStrength(0.8);
        setSelectedInteractionId(undefined);
        break;
      case 'creativity':
        setWhirlpool1({...whirlpool1, energyLevel: 'high', dominantLayer: 'mind'});
        setWhirlpool2({...whirlpool2, energyLevel: 'high', dominantLayer: 'mind'});
        setInteractionStrength(0.7);
        setSelectedInteractionId(undefined);
        break;
      case 'dissonance':
        setWhirlpool1({...whirlpool1, energyLevel: 'high', dominantLayer: 'nervous'});
        setWhirlpool2({...whirlpool2, energyLevel: 'low', dominantLayer: 'body'});
        setInteractionStrength(0.6);
        setSelectedInteractionId(undefined);
        break;
      case 'fear':
        setWhirlpool1({...whirlpool1, energyLevel: 'erratic', dominantLayer: 'nervous'});
        setWhirlpool2({...whirlpool2, energyLevel: 'erratic', dominantLayer: 'nervous'});
        setInteractionStrength(0.9);
        setSelectedInteractionId(undefined);
        break;
    }
  };
  
  return (
    <div 
      className={`relative w-full h-[400px] overflow-hidden rounded-xl ${className}`}
    >
      {/* River Background */}
      <RiverBackground interactionType={interactionType} />
      
      {/* Whirlpool Visualizations */}
      <div className="absolute inset-0 flex justify-around items-center">
        <motion.div animate={whirlpool1Controls} style={{ originX: 0.5, originY: 0.5 }}>
          <Whirlpool 
            data={whirlpool1}
            position="left"
            onLayerClick={(layer) => {
              setWhirlpool1({...whirlpool1, dominantLayer: layer});
            }}
          />
        </motion.div>
        
        {/* Interaction Effects Zone */}
        <InteractionEffects 
          type={interactionType}
          strength={interactionStrength}
          whirlpool1={whirlpool1}
          whirlpool2={whirlpool2}
        />
        
        <motion.div animate={whirlpool2Controls} style={{ originX: 0.5, originY: 0.5 }}>
          <Whirlpool 
            data={whirlpool2}
            position="right"
            onLayerClick={(layer) => {
              setWhirlpool2({...whirlpool2, dominantLayer: layer});
            }}
          />
        </motion.div>
      </div>
      
      {/* Controls Panel - only shown when showControls is true */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 rounded-t-xl">
          {/* Emotional Interaction Presets */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Emotional Interactions</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {interactionPairs.map(interaction => (
                <button 
                  key={interaction.id}
                  onClick={() => applyEmotionalInteraction(interaction.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedInteractionId === interaction.id
                      ? 'bg-wairua-dark text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {interaction.name}
                </button>
              ))}
            </div>
            
            {/* Classic Presets */}
            <h4 className="text-sm font-medium mb-1 mt-3">Classic Presets</h4>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => applyPreset('harmony')}
                className="px-3 py-1 rounded-md text-xs bg-green-100 hover:bg-green-200"
              >
                Harmony & Resonance
              </button>
              <button 
                onClick={() => applyPreset('creativity')}
                className="px-3 py-1 rounded-md text-xs bg-purple-100 hover:bg-purple-200"
              >
                Creativity & Flow
              </button>
              <button 
                onClick={() => applyPreset('dissonance')}
                className="px-3 py-1 rounded-md text-xs bg-yellow-100 hover:bg-yellow-200"
              >
                Dissonance & Conflict
              </button>
              <button 
                onClick={() => applyPreset('fear')}
                className="px-3 py-1 rounded-md text-xs bg-red-100 hover:bg-red-200"
              >
                Fear & Destruction
              </button>
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium">Interaction Strength</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={interactionStrength}
              onChange={(e) => setInteractionStrength(parseFloat(e.target.value))}
              className="w-full h-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}
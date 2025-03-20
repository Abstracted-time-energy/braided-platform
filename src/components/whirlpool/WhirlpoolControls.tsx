"use client";

import React from 'react';
import { WhirlpoolState, WhirlpoolLayer, EnergyLevel } from '@/types/whirlpool';
import { getLayerLabel } from '@/lib/whirlpool-utils';

type WhirlpoolControlsProps = {
  whirlpoolState: WhirlpoolState;
  onChange: (newState: WhirlpoolState) => void;
  label?: string;
};

export const WhirlpoolControls: React.FC<WhirlpoolControlsProps> = ({
  whirlpoolState,
  onChange,
  label
}) => {
  const handleEnergyLevelChange = (level: EnergyLevel) => {
    onChange({
      ...whirlpoolState,
      energyLevel: level
    });
  };
  
  const handleDominantLayerChange = (layer: WhirlpoolLayer) => {
    onChange({
      ...whirlpoolState,
      dominantLayer: layer
    });
  };
  
  const handleBlockageToggle = (layer: WhirlpoolLayer) => {
    const hasBlockage = whirlpoolState.blockages?.includes(layer) || false;
    let newBlockages = [...(whirlpoolState.blockages || [])];
    
    if (hasBlockage) {
      newBlockages = newBlockages.filter(l => l !== layer);
    } else {
      newBlockages.push(layer);
    }
    
    onChange({
      ...whirlpoolState,
      blockages: newBlockages
    });
  };
  
  const layers: WhirlpoolLayer[] = [
    'wairua',
    'mauri',
    'mind',
    'nervous',
    'body',
    'relationship',
    'community',
    'environment'
  ];
  
  return (
    <div className="space-y-4">
      {label && <h3 className="text-lg font-medium">{label}</h3>}
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Energy Level</h4>
        <div className="flex space-x-2">
          {(['balanced', 'high', 'low', 'erratic'] as EnergyLevel[]).map(level => (
            <button
              key={level}
              className={`px-3 py-1 rounded-md text-sm ${
                whirlpoolState.energyLevel === level 
                  ? 'bg-wairua-dark text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => handleEnergyLevelChange(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Dominant Layer</h4>
        <div className="grid grid-cols-2 gap-2">
          {layers.map(layer => (
            <button
              key={layer}
              className={`p-2 rounded-md border text-sm ${
                whirlpoolState.dominantLayer === layer 
                  ? 'bg-wairua-light border-wairua' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => handleDominantLayerChange(layer)}
            >
              {getLayerLabel(layer)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Blockages</h4>
        <div className="grid grid-cols-4 gap-2">
          {layers.map(layer => (
            <button
              key={`blockage-${layer}`}
              className={`p-2 text-center rounded-md border text-xs ${
                whirlpoolState.blockages?.includes(layer)
                  ? 'bg-red-100 border-red-400'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => handleBlockageToggle(layer)}
            >
              {getLayerLabel(layer).split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
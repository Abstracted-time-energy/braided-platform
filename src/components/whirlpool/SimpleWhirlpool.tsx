import React from 'react';

interface WhirlpoolLayerProps {
  layerId: string;
  name: string;
  score: number;
  index: number;
  total: number;
  color: string;
}

function WhirlpoolLayer({ layerId, name, score, index, total, color }: WhirlpoolLayerProps) {
  // Calculate size based on layer index (outer layers are larger)
  const size = 75 - (index * (60 / total));
  const opacity = 0.4 + (score * 0.12); // Higher scores are more opaque
  
  return (
    <div
      className="absolute rounded-full flex items-center justify-center"
      style={{
        width: `${size}%`,
        height: `${size}%`,
        backgroundColor: color,
        opacity: opacity,
        zIndex: total - index,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      {index === 0 && (
        <div className="text-white text-sm font-medium">
          {name}
        </div>
      )}
    </div>
  );
}

interface SimpleWhirlpoolProps {
  layers: {
    id: string;
    name: string;
    score: number;
    color: string;
  }[];
  className?: string;
}

export default function SimpleWhirlpool({ layers, className = "" }: SimpleWhirlpoolProps) {
  return (
    <div 
      className={`relative aspect-square max-w-sm mx-auto ${className}`}
      style={{ height: '300px' }}
    >
      {layers.map((layer, index) => (
        <WhirlpoolLayer
          key={layer.id}
          layerId={layer.id}
          name={layer.name}
          score={layer.score}
          index={index}
          total={layers.length}
          color={layer.color}
        />
      ))}
    </div>
  );
}

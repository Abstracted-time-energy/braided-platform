import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Base river pattern */}
        <path
          d="M140 150 C140 82.5 202.5 20 270 20 C337.5 20 400 82.5 400 150"
          stroke="#64B5BA"
          strokeWidth="12"
          fill="none"
          className="pattern-stroke"
          opacity="0.9"
        />
        <path
          d="M140 150 C140 217.5 202.5 280 270 280 C337.5 280 400 217.5 400 150"
          stroke="#64B5BA"
          strokeWidth="12"
          fill="none"
          className="pattern-stroke"
          opacity="0.9"
        />

        {/* Braided pattern - middle layer */}
        <path
          d="M155 150 C155 90 210 35 270 35 C330 35 385 90 385 150 
             C385 210 330 265 270 265 C210 265 155 210 155 150"
          stroke="#C4A484"
          strokeWidth="10"
          fill="none"
          className="pattern-stroke"
          opacity="0.85"
        />

        {/* Inner flowing pattern */}
        <path
          d="M170 150 C170 97.5 217.5 50 270 50 C322.5 50 370 97.5 370 150
             C370 202.5 322.5 250 270 250 C217.5 250 170 202.5 170 150"
          stroke="#64B5BA"
          strokeWidth="8"
          fill="none"
          className="pattern-stroke"
          opacity="0.8"
        />

        {/* Text background box */}
        <rect
          x="85"
          y="135"
          width="375"
          height="60"
          fill="white"
          fillOpacity="0.95"
          rx="4"
        />
        
        {/* Unified text */}
        <text
          x="270"
          y="172"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-7xl"
          fill="#2D3B4D"
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '0.2em',
            fontWeight: '600'
          }}
        >
          BRAIDED
        </text>
      </svg>
      
      <style jsx>{`
        .pattern-stroke {
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>
    </div>
  );
} 
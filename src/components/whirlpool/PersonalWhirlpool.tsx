"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for layer data
interface WhirlpoolLayer {
  id: string;
  name: string;
  score: number;
  color: string;
  colorLight?: string;
  colorDark?: string;
  icon?: string;
  description?: string;
  insights?: string[];
  recommendations?: string[];
}

interface AssessmentData {
  biologicalFoundations: number;
  energyFlow: number;
  mentalLandscape: number;
  relationshipPatterns: number;
  reflectiveFunctioning: number;
  spiritualConnection: number;
  [key: string]: number;
}

interface PersonalWhirlpoolProps {
  assessmentData: AssessmentData;
  title?: string;
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
    light: lightenColor(baseColor, 30),
    dark: darkenColor(baseColor, 20)
  };
};

// Define default colors for each layer
const layerColors = {
  biologicalFoundations: "#8B5CF6", // purple
  energyFlow: "#EC4899",           // pink
  mentalLandscape: "#3B82F6",      // blue
  relationshipPatterns: "#F97316", // orange
  reflectiveFunctioning: "#10B981", // green
  spiritualConnection: "#8B5CF6"   // purple
};

// Layer name mapping
const layerNames = {
  biologicalFoundations: "Biological",
  energyFlow: "Energy",
  mentalLandscape: "Mental",
  relationshipPatterns: "Relational",
  reflectiveFunctioning: "Reflective",
  spiritualConnection: "Spiritual"
};

const PersonalWhirlpool: React.FC<PersonalWhirlpoolProps> = ({ 
  assessmentData, 
  title = "Your Whirlpool" 
}) => {
  const [selectedLayer, setSelectedLayer] = useState<WhirlpoolLayer | null>(null);
  const [processedLayers, setProcessedLayers] = useState<WhirlpoolLayer[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  
  // Process assessment data into layers
  useEffect(() => {
    const layers: WhirlpoolLayer[] = Object.entries(assessmentData).map(([key, score]) => {
      return {
        id: key,
        name: layerNames[key as keyof typeof layerNames] || key,
        score: score,
        color: layerColors[key as keyof typeof layerColors] || "#6B7280", // gray default
      };
    });
    
    // Process and sort layers
    const enhancedLayers = layers.map(layer => {
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
    
    // Sort layers by score (highest first to ensure proper stacking)
    const sortedLayers = [...enhancedLayers].sort((a, b) => b.score - a.score);
    setProcessedLayers(sortedLayers);
  }, [assessmentData]);

  // Generate insights based on score
  const generateInsights = (layer: WhirlpoolLayer) => {
    if (layer.insights) return layer.insights;
    
    const score = layer.score * 100; // Convert decimal to percentage
    const insights = [];
    
    if (score < 40) {
      insights.push(`Your ${layer.name} layer shows areas for growth`);
      insights.push(`Consider exploring practices that enhance your ${layer.name.toLowerCase()} awareness`);
    } else if (score < 70) {
      insights.push(`Your ${layer.name} layer is developing well`);
      insights.push(`Continue nurturing your ${layer.name.toLowerCase()} connection`);
    } else {
      insights.push(`Your ${layer.name} layer is flowing strongly`);
      insights.push(`Share your ${layer.name.toLowerCase()} wisdom with others`);
    }
    
    return insights;
  };

  // Generate recommendations based on score
  const generateRecommendations = (layer: WhirlpoolLayer) => {
    if (layer.recommendations) return layer.recommendations;
    
    const score = layer.score * 100; // Convert decimal to percentage
    const recommendations = [];
    
    if (score < 40) {
      recommendations.push(`Start with small, daily practices to strengthen your ${layer.name.toLowerCase()}`);
      recommendations.push(`Seek support or guidance in developing your ${layer.name.toLowerCase()} awareness`);
    } else if (score < 70) {
      recommendations.push(`Deepen your existing ${layer.name.toLowerCase()} practices`);
      recommendations.push(`Explore how your ${layer.name.toLowerCase()} connects with other layers`);
    } else {
      recommendations.push(`Share your ${layer.name.toLowerCase()} practices with others`);
      recommendations.push(`Help others develop their ${layer.name.toLowerCase()} awareness`);
    }
    
    return recommendations;
  };

  return (
    <div className="my-4">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      
      <div className="relative w-full aspect-square max-w-md mx-auto mb-6">
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-gray-50 rounded-full overflow-hidden">
          <motion.div 
            className="absolute inset-0" 
            style={{ 
              background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)` 
            }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Container for the whirlpool */}
        <div 
          className="relative w-full h-full rounded-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Render layers */}
          {processedLayers.map((layer, index) => {
            // Calculate size based on score (50% minimum to 100% maximum)
            const size = 50 + (layer.score * 50);
            
            return (
              <motion.div
                key={layer.id}
                className="absolute rounded-full border-2 cursor-pointer"
                style={{
                  borderColor: layer.colorDark || layer.color,
                  backgroundColor: `${layer.color}30`,
                  width: `${size}%`,
                  height: `${size}%`,
                  left: `${50 - size/2}%`,
                  top: `${50 - size/2}%`,
                  zIndex: processedLayers.length - index,
                }}
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: isHovered ? [0, layer.id.length % 2 === 0 ? 360 : -360] : 0
                }}
                transition={{
                  scale: { duration: 0.5 },
                  opacity: { duration: 0.5 },
                  rotate: { 
                    duration: 80 + (index * 10), 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedLayer(selectedLayer?.id === layer.id ? null : layer)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium" style={{ color: layer.colorDark || layer.color }}>
                    {layer.name.charAt(0)}
                  </span>
                </div>
              </motion.div>
            );
          })}
          
          {/* Ripple effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="absolute inset-0 rounded-full border border-blue-100/30"
                initial={{ scale: 0.8, opacity: 0.6 }}
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
      </div>
      
      {/* Quick insights about top layers */}
      {!selectedLayer && (
        <div className="mt-4 space-y-2">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {processedLayers.slice(0, 3).map(layer => (
              <li key={layer.id}>
                Your <span className="font-medium" style={{ color: layer.colorDark || layer.color }}>
                  {layer.name}
                </span> {layer.score > 0.7 ? 'layer shows strong flow' : layer.score > 0.5 ? 'layer is developing well' : 'layer may benefit from attention'}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Layer Details Panel */}
      <AnimatePresence>
        {selectedLayer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-md p-4 mt-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold" style={{ color: selectedLayer.colorDark || selectedLayer.color }}>
                {selectedLayer.name}
              </h3>
              <button
                onClick={() => setSelectedLayer(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    backgroundColor: selectedLayer.color,
                    width: `${selectedLayer.score * 100}%`
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Current Flow: {Math.round(selectedLayer.score * 100)}%
              </p>
            </div>
            
            {selectedLayer.description && (
              <p className="text-gray-600 mb-4 text-sm">{selectedLayer.description}</p>
            )}

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700 mb-1 text-sm">Insights</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  {generateInsights(selectedLayer).map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-1 text-sm">Recommendations</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  {generateRecommendations(selectedLayer).map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalWhirlpool; 
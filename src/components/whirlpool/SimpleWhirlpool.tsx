"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhirlpoolLayer {
  id: string;
  name: string;
  score: number;
  color: string;
  insights?: string[];
  recommendations?: string[];
}

interface SimpleWhirlpoolProps {
  layers: WhirlpoolLayer[];
  assessmentData?: Record<string, number>;
}

const SimpleWhirlpool: React.FC<SimpleWhirlpoolProps> = ({ layers, assessmentData }) => {
  const [selectedLayer, setSelectedLayer] = useState<WhirlpoolLayer | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the size of each layer based on score
  const getLayerSize = (score: number) => {
    return 100 + (score * 50); // Base size of 100px plus score percentage (max 150%)
  };

  // Generate insights based on assessment data
  const generateInsights = (layer: WhirlpoolLayer) => {
    if (!assessmentData) return layer.insights || [];
    
    const score = assessmentData[layer.id] || 0;
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

  // Generate recommendations based on assessment data
  const generateRecommendations = (layer: WhirlpoolLayer) => {
    if (!assessmentData) return layer.recommendations || [];
    
    const score = assessmentData[layer.id] || 0;
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
    <div className="relative">
      <div 
        className="relative w-full aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            className="absolute inset-0 rounded-full border-2 cursor-pointer"
            style={{
              borderColor: layer.color,
              backgroundColor: `${layer.color}20`,
              width: `${getLayerSize(layer.score)}%`,
              height: `${getLayerSize(layer.score)}%`,
              left: `${50 - getLayerSize(layer.score) / 2}%`,
              top: `${50 - getLayerSize(layer.score) / 2}%`,
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedLayer(layer)}
            animate={{
              rotate: isHovered ? 360 : 0,
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-medium" style={{ color: layer.color }}>
                {layer.name.charAt(0)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Layer Details Modal */}
      <AnimatePresence>
        {selectedLayer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-lg shadow-xl p-4 z-10"
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: selectedLayer.color }}>
              {selectedLayer.name}
            </h3>
            
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

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Insights</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {generateInsights(selectedLayer).map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-1">Recommendations</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {generateRecommendations(selectedLayer).map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setSelectedLayer(null)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimpleWhirlpool;

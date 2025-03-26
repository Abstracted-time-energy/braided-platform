"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from '@/components/ui/WaveDivider';

interface AssessmentResult {
  section: string;
  score: number;
  insights: string[];
}

interface SuggestionsPanelProps {
  assessmentResults: AssessmentResult[];
  activeTopic: string;
  onTopicSelect: (topic: string) => void;
}

export const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({
  assessmentResults,
  activeTopic,
  onTopicSelect
}) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full md:w-80 bg-white rounded-3xl shadow-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-wairua to-wairua-dark bg-clip-text text-transparent">
          Personalized Insights
        </h2>
        <div className="text-sm text-gray-500">
          Based on your assessment
        </div>
      </div>

      <WaveDivider className="my-6" />

      <div className="space-y-6">
        {assessmentResults.map((result, index) => (
          <motion.div
            key={result.section}
            variants={itemVariants}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{result.section}</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-wairua" />
                <span className="text-sm text-gray-500">
                  {Math.round(result.score * 100)}%
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              {result.insights.map((insight, insightIndex) => {
                const topic = `${result.section}: ${insight}`;
                return (
                  <button
                    key={insightIndex}
                    onClick={() => onTopicSelect(topic)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      activeTopic === topic
                        ? 'bg-wairua text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activeTopic === topic
                          ? 'bg-white/20'
                          : 'bg-wairua/10'
                      }`}>
                        <svg
                          className={`w-4 h-4 ${
                            activeTopic === topic
                              ? 'text-white'
                              : 'text-wairua'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">{insight}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}; 
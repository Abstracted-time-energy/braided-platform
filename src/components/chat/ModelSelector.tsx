"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIModel {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  type: 'general' | 'personal' | 'private';
  memory: 'session' | 'persistent' | 'none';
}

interface ModelSelectorProps {
  selectedModel: string;
  onSelect: (modelId: string) => void;
}

const AI_MODELS: AIModel[] = [
  {
    id: 'general',
    name: 'General Assistant',
    description: 'A versatile AI for general guidance and support',
    capabilities: ['General knowledge', 'Practical advice', 'Resource recommendations'],
    type: 'general',
    memory: 'session'
  },
  {
    id: 'personal',
    name: 'Personal Guide',
    description: 'An AI that remembers your preferences and history',
    capabilities: ['Personalized guidance', 'Progress tracking', 'Customized recommendations'],
    type: 'personal',
    memory: 'persistent'
  },
  {
    id: 'private',
    name: 'Private Counselor',
    description: 'A confidential AI for sensitive discussions',
    capabilities: ['Emotional support', 'Confidential guidance', 'Safe space'],
    type: 'private',
    memory: 'none'
  }
];

export const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedModelData = AI_MODELS.find(m => m.id === selectedModel);

  return (
    <div ref={selectorRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-wairua transition-colors"
      >
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium text-gray-900">
            {selectedModelData?.name || 'Select Model'}
          </span>
          <span className="text-xs text-gray-500">
            {selectedModelData?.type.charAt(0).toUpperCase() + selectedModelData?.type.slice(1)} • {selectedModelData?.memory.charAt(0).toUpperCase() + selectedModelData?.memory.slice(1)}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-80 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-2">
              {AI_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    onSelect(model.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-3 text-left rounded-lg transition-colors ${
                    selectedModel === model.id
                      ? 'bg-wairua/10 text-wairua'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium">{model.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{model.description}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                        {model.type}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                        {model.memory}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {model.capabilities.map((capability, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 
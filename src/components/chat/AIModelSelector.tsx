import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Define conversation types
interface ConversationType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Define AI model interface
interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  strengths: string[];
  bestFor: string[];
  icon: string;
}

// Conversation types data
const conversationTypes: ConversationType[] = [
  {
    id: 'general',
    name: 'General',
    description: 'For everyday questions and conversations about wellbeing, personal growth, and the whirlpool model.',
    icon: '🌊'
  },
  {
    id: 'personal',
    name: 'Personal',
    description: 'For deeper explorations of your whirlpool layers, patterns, and personalized practices.',
    icon: '🌀'
  },
  {
    id: 'private',
    name: 'Private',
    description: 'For sensitive topics with enhanced privacy - no data is stored or used for model training.',
    icon: '🔒'
  }
];

// Expanded list of AI models
const aiModels: AIModel[] = [
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3.7 Sonnet',
    provider: 'Anthropic',
    description: 'Latest version with enhanced reasoning and conversational abilities',
    strengths: [
      'Nuanced understanding',
      'Context awareness',
      'Conversational depth',
      'Ethical reasoning'
    ],
    bestFor: [
      'Therapy-like conversations',
      'Complex personal reflections',
      'Ethical dilemmas'
    ],
    icon: '🎭'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    description: 'Most advanced OpenAI model with deep understanding and complex reasoning',
    strengths: [
      'Complex problem-solving',
      'Detailed explanations',
      'Creative writing',
      'Technical analysis'
    ],
    bestFor: [
      'Deep personal insights',
      'Complex therapeutic concepts',
      'Detailed self-reflection'
    ],
    icon: '🧠'
  },
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    description: 'Advanced model with strong reasoning capabilities',
    strengths: [
      'Complex problem-solving',
      'Detailed explanations',
      'Creative writing',
      'Technical analysis'
    ],
    bestFor: [
      'Deep personal insights',
      'Complex therapeutic concepts',
      'Detailed self-reflection'
    ],
    icon: '🧠'
  },
  {
    id: 'gpt-3.5',
    name: 'GPT-3.5',
    provider: 'OpenAI',
    description: 'Balanced model with good performance and faster response times',
    strengths: [
      'Quick responses',
      'General conversation',
      'Basic analysis',
      'Creative tasks'
    ],
    bestFor: [
      'Casual exploration',
      'Quick insights',
      'General guidance'
    ],
    icon: '⚡'
  },
  {
    id: 'claude-instant',
    name: 'Claude Instant',
    provider: 'Anthropic',
    description: 'Faster version of Claude with good performance',
    strengths: [
      'Quick responses',
      'Conversational fluency',
      'Basic analysis',
      'Ethical considerations'
    ],
    bestFor: [
      'Casual conversations',
      'Quick advice',
      'General guidance'
    ],
    icon: '💬'
  },
  {
    id: 'grok-3',
    name: 'Grok 3',
    provider: 'xAI',
    description: 'Versatile model with a creative, direct approach',
    strengths: [
      'Creative problem-solving',
      'Straightforward explanations',
      'Wide knowledge base',
      'Novel perspectives'
    ],
    bestFor: [
      'Creative exploration',
      'Alternative viewpoints',
      'Unconventional approaches'
    ],
    icon: '🚀'
  },
  {
    id: 'llama-3',
    name: 'Llama 3',
    provider: 'Meta',
    description: 'Open model with strong general capabilities',
    strengths: [
      'Balanced responses',
      'Broad knowledge',
      'Factual accuracy',
      'Community support'
    ],
    bestFor: [
      'General questions',
      'Balanced perspectives',
      'Factual discussions'
    ],
    icon: '🦙'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    provider: 'DeepSeek AI',
    description: 'Specialized in deep reasoning and analytical tasks',
    strengths: [
      'Deep analysis',
      'Structured reasoning',
      'Complex pattern recognition',
      'Detailed explanations'
    ],
    bestFor: [
      'Complex pattern analysis',
      'Analytical breakdowns',
      'Systematic exploration'
    ],
    icon: '🔍'
  }
];

interface AIModelSelectorProps {
  onSelect: (modelId: string, conversationType: string) => void;
}

const AIModelSelector: React.FC<AIModelSelectorProps> = ({ onSelect }) => {
  const [conversationType, setConversationType] = useState<string>('general');
  const [selectedModel, setSelectedModel] = useState<string>('claude-3-sonnet');
  const [showModelDetails, setShowModelDetails] = useState(false);

  const selectedModelDetails = aiModels.find(m => m.id === selectedModel);
  const selectedConversationDetails = conversationTypes.find(t => t.id === conversationType);

  const handleStartChat = () => {
    onSelect(selectedModel, conversationType);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Conversation Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {conversationTypes.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button 
                  className="w-full"
                  onClick={() => setConversationType(type.id)}
                >
                  <Card
                    className={`transition-all duration-200 ${
                      conversationType === type.id
                        ? 'ring-2 ring-wairua shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{type.icon}</span>
                        <h4 className="font-medium text-gray-900">{type.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Select AI Model</h3>
          <div className="grid grid-cols-1 gap-4">
            {aiModels.map((model) => (
              <motion.div
                key={model.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <button 
                  className="w-full text-left"
                  onClick={() => {
                    setSelectedModel(model.id);
                    setShowModelDetails(true);
                  }}
                >
                  <Card
                    className={`transition-all duration-200 ${
                      selectedModel === model.id
                        ? 'ring-2 ring-wairua shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{model.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{model.name}</h4>
                            <p className="text-sm text-gray-500">{model.provider}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: selectedModel === model.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {selectedModel === model.id && showModelDetails && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 space-y-4"
                          >
                            <p className="text-sm text-gray-600">{model.description}</p>
                            
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Strengths</h5>
                              <div className="flex flex-wrap gap-2">
                                {model.strengths.map((strength, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-wairua/10 text-wairua-dark rounded-full text-xs"
                                  >
                                    {strength}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Best For</h5>
                              <div className="flex flex-wrap gap-2">
                                {model.bestFor.map((use, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                  >
                                    {use}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleStartChat}
          className="px-8 py-2 text-lg"
        >
          Start Conversation
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 12h15"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default AIModelSelector; 
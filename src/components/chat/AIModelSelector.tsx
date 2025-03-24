import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Define conversation types
interface ConversationType {
  id: string;
  name: string;
  description: string;
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
    description: 'For everyday questions and conversations about wellbeing, personal growth, and the whirlpool model.'
  },
  {
    id: 'personal',
    name: 'Personal',
    description: 'For deeper explorations of your whirlpool layers, patterns, and personalized practices.'
  },
  {
    id: 'private',
    name: 'Private',
    description: 'For sensitive topics with enhanced privacy - no data is stored or used for model training.'
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
  const [showTips, setShowTips] = useState(false);

  // Find the selected model object
  const selectedModelDetails = aiModels.find(m => m.id === selectedModel);
  const selectedConversationDetails = conversationTypes.find(t => t.id === conversationType);

  const handleStartChat = () => {
    onSelect(selectedModel, conversationType);
  };

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Start a Conversation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Choose Conversation Type</label>
            <div className="relative">
              <select 
                value={conversationType}
                onChange={(e) => setConversationType(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-md text-gray-700 border border-gray-300 focus:border-wairua focus:ring focus:ring-wairua appearance-none pr-10"
              >
                {conversationTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {selectedConversationDetails && (
              <p className="mt-2 text-sm text-gray-500">{selectedConversationDetails.description}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Choose AI Model</label>
            <div className="relative">
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-md text-gray-700 border border-gray-300 focus:border-wairua focus:ring focus:ring-wairua appearance-none pr-10"
              >
                {aiModels.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.icon} {model.name} ({model.provider})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {selectedModelDetails && (
              <p className="mt-2 text-sm text-gray-500">{selectedModelDetails.description}</p>
            )}
          </div>
          
          <div className="pt-2">
            <Button
              className="w-full"
              onClick={handleStartChat}
            >
              Start Chat
            </Button>
          </div>
          
          <div>
            <button
              onClick={() => setShowTips(!showTips)}
              className="text-sm text-wairua hover:text-wairua-dark transition-colors"
            >
              {showTips ? 'Hide tips' : 'How to get the most from your chat'}
            </button>
            
            {showTips && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200"
              >
                <h3 className="font-medium mb-2">Tips for effective conversations:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Be specific with your questions</li>
                  <li>Provide context about your situation</li>
                  <li>Ask for examples when discussing concepts</li>
                  <li>Don't hesitate to ask follow-up questions</li>
                  <li>Share your assessment results for personalized insights</li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIModelSelector; 
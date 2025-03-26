"use client";

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ModelSelector } from '@/components/chat/ModelSelector';
import { SuggestionsPanel } from '@/components/chat/SuggestionsPanel';
import WaveDivider from '@/components/ui/WaveDivider';

// Define interfaces
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  topic?: string;
}

interface AssessmentResult {
  section: string;
  score: number;
  insights: string[];
}

interface AIModel {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
}

// Sample AI Models (replace with actual models)
const AI_MODELS: AIModel[] = [
  {
    id: 'therapist',
    name: 'Therapeutic Guide',
    description: 'A supportive AI focused on emotional wellbeing and personal growth',
    capabilities: ['Emotional support', 'Personal growth guidance', 'Mindfulness practices']
  },
  {
    id: 'coach',
    name: 'Wellness Coach',
    description: 'An action-oriented AI focused on practical wellbeing strategies',
    capabilities: ['Goal setting', 'Action planning', 'Progress tracking']
  },
  {
    id: 'mentor',
    name: 'Spiritual Mentor',
    description: 'A contemplative AI focused on meaning and purpose',
    capabilities: ['Values exploration', 'Purpose discovery', 'Spiritual guidance']
  }
];

export default function ChatPage() {
  // State management
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResult[]>([]);
  const [activeTopic, setActiveTopic] = useState<string>('');

  // Load assessment results (replace with actual data fetching)
  useEffect(() => {
    // Simulated assessment results
    const results: AssessmentResult[] = [
      {
        section: 'Biological Foundations',
        score: 0.7,
        insights: ['Strong physical health habits', 'Could improve sleep quality']
      },
      {
        section: 'Energy Flow',
        score: 0.6,
        insights: ['Good energy management', 'Room for improvement in stress handling']
      },
      {
        section: 'Mental Landscape',
        score: 0.8,
        insights: ['Strong emotional awareness', 'Good coping strategies']
      }
    ];
    setAssessmentResults(results);
  }, []);

  // Handle model selection
  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    const model = AI_MODELS.find(m => m.id === modelId);
    if (model) {
      // Add welcome message with model capabilities
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: `Welcome! I'm your ${model.name}. I can help you with: ${model.capabilities.join(', ')}. What would you like to explore?`,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  // Handle sending messages
  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      topic: activeTopic
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm processing your message and will respond shortly...",
        sender: 'ai',
        timestamp: new Date(),
        topic: activeTopic
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-wairua to-wairua-dark bg-clip-text text-transparent mb-4">
              Your Personal Growth Journey
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with AI guides who understand your unique path and can help you navigate your personal development journey.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Suggestions Panel */}
            <div className="lg:w-1/4">
              <SuggestionsPanel
                assessmentResults={assessmentResults}
                activeTopic={activeTopic}
                onTopicSelect={setActiveTopic}
              />
            </div>

            {/* Chat Interface */}
            <div className="lg:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl p-6"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-wairua to-wairua-dark bg-clip-text text-transparent">
                      Chat Experience
                    </h2>
                    {activeTopic && (
                      <p className="text-sm text-gray-500 mt-1">
                        Current topic: {activeTopic}
                      </p>
                    )}
                  </div>
                  <ModelSelector
                    selectedModel={selectedModel}
                    onSelect={handleModelSelect}
                  />
                </div>

                <WaveDivider className="my-6" />

                {/* Chat Messages */}
                <div className="h-[60vh] overflow-y-auto mb-6 space-y-4">
                  <AnimatePresence initial={false}>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${message.sender === 'user' ? 'bg-wairua text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-4`}>
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          {message.topic && (
                            <span className="text-xs mt-2 block opacity-70">
                              Topic: {message.topic}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 rounded-2xl p-4">
                        <div className="flex space-x-2">
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-2 h-2 bg-wairua rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                            className="w-2 h-2 bg-wairua rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                            className="w-2 h-2 bg-wairua rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input Area */}
                <div className="flex gap-4">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Type your message..."
                    className="flex-grow p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-wairua resize-none"
                    rows={1}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-wairua text-white hover:bg-wairua-dark"
                  >
                    Send
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

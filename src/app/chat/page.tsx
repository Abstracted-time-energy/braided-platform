"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AIModelSelector from '@/components/chat/AIModelSelector';
import ChatInterface from '@/components/chat/ChatInterface';
import PersonalWhirlpool from '@/components/whirlpool/PersonalWhirlpool';

// Define the Message interface
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatPage() {
  // State for selected model and conversation type
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [conversationType, setConversationType] = useState<string>('');
  const [showChat, setShowChat] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  // Sample assessment data (replace with actual data from API/storage)
  const assessmentData = {
    biologicalFoundations: 0.7,
    energyFlow: 0.7,
    mentalLandscape: 0.7,
    relationshipPatterns: 0.7,
    reflectiveFunctioning: 0.7,
    spiritualConnection: 0.7
  };

  // Initial welcome message
  const getInitialMessages = (): Message[] => {
    if (chatMessages.length > 0) return chatMessages;
    
    return [
      {
        id: '1',
        content: `Welcome to ${selectedModel}! I'm here to help you explore your attachment style and personal growth journey. How can I assist you today?`,
        sender: 'ai',
        timestamp: new Date()
      }
    ];
  };

  const handleModelSelect = (model: string, conversationType: string) => {
    setSelectedModel(model);
    setConversationType(conversationType);
    setShowChat(true);
  };

  const handleBackToSelector = () => {
    setShowChat(false);
  };

  const handleMessagesUpdate = (messages: Message[]) => {
    setChatMessages(messages);
  };

  return (
    <MainLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        {!showChat ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Intelligent Insights</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with advanced AI models to explore your whirlpool, from where you are now to where you want to be.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <AIModelSelector onSelect={handleModelSelect} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 h-[80vh]">
            <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Your Whirlpool</h2>
                <button
                  onClick={handleBackToSelector}
                  className="text-sm text-wairua hover:text-wairua-dark transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Change Model
                </button>
              </div>
              <div className="flex-grow">
                <PersonalWhirlpool assessmentData={assessmentData} />
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white rounded-2xl p-6 flex flex-col h-full shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {selectedModel}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {conversationType.charAt(0).toUpperCase() + conversationType.slice(1)} Conversation
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Real-time Response
                </div>
              </div>
              <div className="flex-grow">
                <ChatInterface 
                  modelName={selectedModel} 
                  initialMessages={getInitialMessages()}
                  onMessagesUpdate={handleMessagesUpdate}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </MainLayout>
  );
}

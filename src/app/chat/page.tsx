import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import SimpleWhirlpool from '@/components/whirlpool/SimpleWhirlpool';

// Import whirlpool model
import whirlpoolModel from '@/content/whirlpool/model.json';

export default function ChatPage() {
  // Create sample whirlpool data
  const whirlpoolData = whirlpoolModel.layers.map(layer => ({
    id: layer.id,
    name: layer.name,
    score: Math.random() * 0.7 + 0.3, // Random score between 0.3 and 1.0
    color: layer.color
  }));
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - Whirlpool visualization */}
          <div className="lg:w-1/3">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Your Whirlpool</CardTitle>
              </CardHeader>
              <CardContent>
                <SimpleWhirlpool layers={whirlpoolData} />
                <div className="mt-4 space-y-2">
                  <p className="font-medium">Key Insights:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Your <span className="font-medium text-wairua-dark">Wairua/Spirit</span> layer shows strong flow</li>
                    <li>Your <span className="font-medium text-relationship-dark">Relationships</span> layer may benefit from attention</li>
                    <li>Consider exploring how your <span className="font-medium text-mind-dark">Mind</span> and <span className="font-medium text-body-dark">Body</span> layers interact</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right side - Chat interface */}
          <div className="lg:w-2/3">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Conversation</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto">
                <div className="space-y-4">
                  {/* AI message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-wairua flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">B</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                      <p>
                        Welcome to the Braided platform! I'm here to help you explore your Whirlpool of Thrive. 
                        Based on your assessment, I notice your Wairua/Spirit layer is flowing strongly, while your 
                        Relationships layer might benefit from some attention. What would you like to explore today?
                      </p>
                    </div>
                  </div>
                  
                  {/* User message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-wairua-dark rounded-lg p-4 max-w-[80%] text-white">
                      <p>
                        I'd like to learn more about how my relationships affect my overall wellbeing.
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-700 text-sm">Y</span>
                    </div>
                  </div>
                  
                  {/* AI message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-wairua flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">B</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                      <p>
                        Great question! Relationships are a key layer in your whirlpool that can deeply influence all other layers. 
                        When we have nurturing connections, they can enhance our energy, support our mental wellbeing, and even 
                        help regulate our nervous system.
                      </p>
                      <p className="mt-2">
                        What specific aspects of your relationships would you like to explore? For example, we could 
                        discuss communication patterns, boundaries, or how to strengthen your support network.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Chat input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wairua"
                  />
                  <Button>Send</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

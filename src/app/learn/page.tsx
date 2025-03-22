import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import InteractiveWhirlpool from '@/components/whirlpool/InteractiveWhirlpool';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// Hardcoded model concepts since we're avoiding JSON imports
const MODEL_CONCEPTS = {
  "flow": "The natural movement of energy, resources, and information between layers when blockages are removed.",
  "blockage": "Restriction or inhibition that prevents smooth flow between layers, often manifesting as distress or dysfunction.",
  "resonance": "How changes in one layer naturally affect and influence other layers, creating ripple effects throughout the whirlpool.",
  "integration": "The harmony that emerges when all layers are acknowledged and supported in their unique functions and interconnections."
};

export default function LearnPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Your Whirlpool
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            The Whirlpool of Thrivation is a holistic model of wellbeing that recognises the interconnected layers of our existence, from our core to our context and back again.
          </p>
          
          {/* Interactive Whirlpool Component */}
          <div className="relative mb-16">
            <InteractiveWhirlpool />
          </div>
          
          {/* Model Concepts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Key Concepts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(MODEL_CONCEPTS).map(([key, value]) => (
                <Card key={key}>
                  <CardHeader>
                    <CardTitle className="capitalize">{key}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
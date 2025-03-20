"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import InteractiveWhirlpool from '@/components/whirlpool/InteractiveWhirlpool';
import WaveDivider from '@/components/ui/WaveDivider';

// Import the whirlpool model data
import whirlpoolModel from '@/content/whirlpool/model.json';

export default function LearnPage() {
  return (
    <MainLayout>
      {/* Hero section with subtle background */}
      <div className="bg-gradient-to-b from-wairua-light/30 to-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-light mb-6 text-gray-800 leading-tight">
              Understanding the <span className="text-wairua-dark">Whirlpool</span> of Thrive
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {whirlpoolModel.description}
            </p>

            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                The Whirlpool of Thrive model views you as a dynamic system—a whirlpool in the river of life—with 
                interconnected layers from your spiritual core outward to your environmental context. 
                Explore each layer below to understand how they interact and influence your overall wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider color="#ffffff" />
      
      {/* Interactive Whirlpool Section - Now the Primary Focus */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                Explore Your Whirlpool
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click or hover over each layer to discover its meaning and reflection questions. 
                Notice how each layer connects with those around it, creating a unified system.
              </p>
            </div>
            
            <InteractiveWhirlpool />
            
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-8">
                The Whirlpool model invites you to observe where flow is restricted in your life and where it moves freely.
                By understanding these patterns, you can make small adjustments that ripple through your entire system.
              </p>
              
              <div className="rounded-lg bg-wairua-light/30 p-6 mb-10">
                <h3 className="text-xl font-montserrat font-light text-gray-800 mb-3">Key Concepts</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="p-4">
                    <h4 className="font-medium text-wairua-dark">Flow</h4>
                    <p className="text-sm text-gray-600">{whirlpoolModel.modelConcepts?.flow || "The natural movement of energy, resources, and information between layers."}</p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-wairua-dark">Blockage</h4>
                    <p className="text-sm text-gray-600">{whirlpoolModel.modelConcepts?.blockage || "Restriction that prevents smooth flow between layers, often manifesting as distress."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider color="#f9fafb" inverted={true} />
      
      {/* Call to Action */}
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-montserrat font-light text-gray-800 mb-6">
              Ready to Explore Your Own Whirlpool?
            </h2>
            <p className="text-gray-600 mb-8">
              Take the assessment to gain insights into your unique wellbeing patterns.
            </p>
            <Link href="/assessment">
              <Button size="lg" className="transform transition hover:translate-y-[-2px] hover:shadow-md">
                Begin Your Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <MainLayout>
      {/* Minimalist Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gray-50 opacity-60 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light mb-6 text-gray-800 leading-relaxed">
              The whirlpool as a reflection of your journey
            </h1>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
              A space for quiet contemplation of the interconnected layers that form your experience. 
              Not a solution, but an invitation to deeper understanding.
            </p>
            
            <div className="flex gap-8 items-center">
              <Link href="/learn">
                <Button variant="ghost" size="default">
                  Explore the model
                </Button>
              </Link>
              <span className="text-gray-400">or</span>
              <Link href="/assessment" className="text-gray-600 hover:text-gray-800 transition-colors">
                begin your reflection
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subtle divider */}
      <div className="h-px w-full max-w-md mx-auto bg-gray-200"></div>
      
      {/* Concept Introduction - Simple and thoughtful */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-prose mx-auto">
            <p className="text-gray-600 mb-8 leading-relaxed">
              The whirlpool metaphor emerges from the understanding that we are not static beings, 
              but dynamic processes in constant flow and interaction with our surroundings.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              From our deepest spiritual center to our physical environment, each layer influences and is 
              influenced by the others. Neither separate nor identical, but interconnected facets of a 
              whole experience.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              This space offers tools for observation and reflection—not to fix or optimize, but to
              witness with compassion the patterns that shape your experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Minimal footer CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-6 italic font-light">
            "The quieter you become, the more you can hear."
          </p>
          <Link href="/signup">
            <Button variant="outline" size="default" className="border-gray-300 text-gray-700">
              Begin
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
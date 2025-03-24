import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import InteractiveWhirlpool from '@/components/whirlpool/InteractiveWhirlpool';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import WaveDivider from '@/components/ui/WaveDivider';

// Refined model concepts focusing on internal dynamics and external interactions
const MODEL_CONCEPTS = {
  "internal": {
    title: "Internal Dynamics",
    subtitle: "Flow & Integration",
    description: "The natural movement and harmony within your individual whirlpool",
    concepts: [
      {
        title: "Flow",
        description: "The ease with which energy and information move through your system. When flow is optimal, there's a natural rhythm to your experience, like a river finding its path.",
        icon: "🌊"
      },
      {
        title: "Integration",
        description: "The process of bringing different aspects of yourself into harmony. When well-integrated, different parts of your experience work together rather than against each other.",
        icon: "🎯"
      }
    ]
  },
  "external": {
    title: "External Interactions",
    subtitle: "Coherence & Blockages",
    description: "How your whirlpool interacts with and is influenced by others",
    concepts: [
      {
        title: "Coherence",
        description: "The quality of interaction between whirlpools. Coherent interactions create constructive patterns, while dissonance leads to destructive interference patterns.",
        icon: "🔄"
      },
      {
        title: "Blockages",
        description: "Unconscious patterns or material that disrupt flow and create destructive interactions. Understanding these helps transform resistance into potential for growth.",
        icon: "🪨"
      }
    ]
  }
};

const SYSTEMIC_FACTORS = [
  {
    title: "Family & Community",
    description: "Family dynamics, cultural practices, and community support systems shape our patterns from early life.",
    icon: "👥"
  },
  {
    title: "Social & Economic",
    description: "Factors like employment, social deprivation, and poverty create powerful currents that influence our whirlpool patterns.",
    icon: "🏘️"
  },
  {
    title: "Power & Systems",
    description: "Systemic forces like racism, colonization, and power dynamics create deep, lasting impacts on individual and collective patterns.",
    icon: "⚖️"
  }
];

export default function LearnPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              Understanding Your <span className="text-brand-primary">Whirlpool</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              The Whirlpool of Thrivation reveals two fundamental aspects of wellbeing:
              how energy flows within us, and how we interact with the world around us.
            </p>
          </div>
        </div>
        <WaveDivider />
      </section>
      
      {/* Interactive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Interactive Whirlpool Component */}
            <div className="relative mb-20">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none"></div>
              <InteractiveWhirlpool />
            </div>
            
            {/* Model Concepts Section */}
            <div className="relative space-y-16">
              {Object.entries(MODEL_CONCEPTS).map(([key, section]) => (
                <div key={key} className="relative">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-light mb-3 text-gray-800">
                      {section.title}
                    </h2>
                    <p className="text-xl text-brand-primary font-medium mb-4">
                      {section.subtitle}
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {section.description}
                    </p>
                  </div>
                  
                  <div className="grid gap-8 md:grid-cols-2">
                    {section.concepts.map((concept, index) => (
                      <Card 
                        key={index} 
                        className={`transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 ${
                          key === 'internal' ? 'border-t-[#64B5BA]' : 'border-t-[#C4A484]'
                        }`}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3 text-xl font-medium text-gray-800">
                            <span className="text-2xl">{concept.icon}</span>
                            {concept.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">
                            {concept.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Systemic Factors Section */}
            <div className="relative mt-24 pt-16 border-t border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-3 text-gray-800">
                  The Broader Context
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Our whirlpools exist within larger currents of family, community, and societal systems. 
                  While these forces significantly shape our patterns, understanding our internal dynamics 
                  helps us navigate and respond to them more effectively.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {SYSTEMIC_FACTORS.map((factor, index) => (
                  <Card 
                    key={index}
                    className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-[#2D3B4D]"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl font-medium text-gray-800">
                        <span className="text-2xl">{factor.icon}</span>
                        {factor.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {factor.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 max-w-3xl mx-auto text-center">
                <p className="text-gray-600 italic">
                  While these systemic factors powerfully influence our patterns, 
                  focusing on our internal dynamics and immediate environment 
                  allows us to work with what's within our sphere of influence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <WaveDivider inverted />
        <div className="container mx-auto px-4 pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-light mb-6 text-gray-800">
              Take Time to Reflect on Your Whirlpool
            </h2>
            <p className="text-gray-600 mb-8">
              Work through our guided exploration of the different layers 
              and discover how these patterns manifest in your life.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="/assessment" 
                className="px-8 py-3 bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 transition-colors"
              >
                Begin Guided Exploration
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
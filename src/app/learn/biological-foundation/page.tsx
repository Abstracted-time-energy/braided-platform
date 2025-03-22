"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import WaveDivider from '@/components/ui/WaveDivider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Define the biological foundations
const BIOLOGICAL_FOUNDATIONS = [
  {
    id: "movement",
    title: "Movement",
    subtitle: "The Dynamic Current",
    description: "Movement is not merely an activity but a fundamental biological necessity that shapes the very structure of your whirlpool. Regular physical activity creates powerful cascades that resonate throughout your entire system.",
    benefits: [
      "Mitochondrial biogenesis - creating new cellular powerhouses",
      "Myokine signaling - muscles communicating with organs",
      "Neurogenesis and plasticity - strengthening brain connections"
    ],
    metaphor: "Just as a whirlpool requires continuous water flow to maintain its form, your body needs regular movement to maintain optimal energy flow."
  },
  {
    id: "nutrition",
    title: "Nourishment",
    subtitle: "The Substrate of Energy",
    description: "The food you consume provides the raw materials from which your body generates energy and rebuilds itself daily. Through the lens of the whirlpool, nutrition isn't simply fuel—it's the very substance that forms your physical existence.",
    benefits: [
      "Mitochondrial function - directly impacts energy production efficiency",
      "Cellular signaling - nutrients act as messengers between cells",
      "Microbiome interaction - gut organisms transform food into bioactive compounds"
    ],
    metaphor: "When your nutritional intake aligns with your biological needs, it creates smooth, efficient energy flow throughout your whirlpool."
  },
  {
    id: "sleep",
    title: "Restoration",
    subtitle: "The Rhythmic Reset",
    description: "Your sleep/wake cycle represents a fundamental rhythm that orchestrates countless biological processes, allowing your system to alternate between activity and recovery—the expansion and contraction of your whirlpool.",
    benefits: [
      "Glymphatic clearance - removing metabolic waste from your brain",
      "Mitochondrial renewal - repairing cellular energy systems",
      "Hormonal orchestration - coordinating metabolic and emotional regulation"
    ],
    metaphor: "When your sleep patterns align with your biological rhythms, they create a powerful restorative current throughout your being."
  }
];

// Define the bioenergetic concepts
const BIOENERGETIC_CONCEPTS = [
  {
    title: "Bioelectric Signaling",
    description: "Beyond biochemistry, cells communicate through bioelectric signals—patterns of ion flow and voltage gradients that coordinate development, healing, and function. Like the currents within a whirlpool, these signals create patterns that maintain the integrity of the whole."
  },
  {
    title: "Mitochondrial Networks",
    description: "Rather than isolated energy producers, mitochondria form dynamic networks that respond to environmental cues, communicate between cells, and influence psychological processes. These networks serve as biological sensors that translate environmental experiences into cellular responses."
  },
  {
    title: "Energetic Coherence",
    description: "When your foundational biological processes are aligned, they create coherent energy patterns throughout your system—a smoothly flowing whirlpool. When misaligned, they create turbulence that manifests as fatigue, inflammation, mood disturbances, and eventually disease."
  }
];

// Define the deeper exploration topics
const DEEPER_EXPLORATIONS = [
  {
    title: "Mitochondrial Health",
    description: "The cellular foundation of thriving",
    comingSoon: true
  },
  {
    title: "Bioelectricity",
    description: "The invisible current of life",
    comingSoon: true
  },
  {
    title: "Chronobiology",
    description: "Living in rhythm with your biological clocks",
    comingSoon: true
  },
  {
    title: "Nutritional Signaling",
    description: "How food speaks to your genes",
    comingSoon: true
  },
  {
    title: "Movement as Medicine",
    description: "The science of exercise benefits",
    comingSoon: true
  }
];

export default function BiologicalFoundationsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-wairua-light/30 to-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-light mb-6 text-gray-800 leading-tight">
              Biological <span className="text-wairua-dark">Foundations</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore how the fundamental biological processes of movement, nourishment, and restoration
              create the energy that powers your whirlpool of thriving.
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider color="#ffffff" />
      
      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-6 text-center">
              The Energy That Powers Your Flow
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Just as a whirlpool depends on the continuous flow of water to maintain its form and vitality, 
              your body relies on fundamental biological processes to sustain the energy that powers your existence. 
              These foundational elements—movement, nourishment, and restoration—form the innermost currents of your 
              whirlpool, influencing every layer above them.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              When these core processes flow harmoniously, they create a strong, resilient foundation that supports 
              your entire being. When they become disrupted or imbalanced, the effects ripple outward, affecting your 
              emotions, thoughts, relationships, and your capacity to thrive.
            </p>
          </div>
          
          {/* Biological Foundations Cards */}
          <div className="space-y-12 mb-16">
            {BIOLOGICAL_FOUNDATIONS.map((foundation, index) => (
              <div key={foundation.id} className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image side */}
                <div className="md:w-2/5 bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[Image: {foundation.title} visualization]</p>
                </div>
                
                {/* Content side */}
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-montserrat font-light text-gray-800 mb-2">
                    {foundation.title}: <span className="text-wairua-dark">{foundation.subtitle}</span>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {foundation.description}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-wairua-dark mb-2">Key Biological Effects:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {foundation.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="italic text-gray-700 border-l-4 border-wairua-light pl-4 py-1">
                    {foundation.metaphor}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Integrated Perspective Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-6 text-center">
              The Integrated Perspective: Bioenergetic Flow
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At the deepest level, exercise, nutrition, and sleep can be understood through the framework of 
              bioenergentics—the study of energy flow in living systems. Dr. Michael Levin's pioneering work 
              on bioelectricity and Dr. Martin Picard's research on mitochondrial networks offer profound 
              insights into how energy shapes our biological existence:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {BIOENERGETIC_CONCEPTS.map((concept, index) => (
                <Card key={index} className="bg-gray-50 border-none">
                  <CardHeader>
                    <CardTitle className="text-wairua-dark text-xl font-montserrat font-light">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{concept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Practical Applications Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-6 text-center">
              Cultivating Your Whirlpool's Flow
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Understanding these biological foundations empowers you to make choices that enhance your whirlpool's 
              energy flow. Here are practical approaches to optimize each foundation:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-wairua-dark mb-3">Movement Practices</h3>
                <p className="text-gray-600 mb-4">
                  Incorporate varied movement patterns to stimulate different aspects of mitochondrial function and myokine signaling.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Cardiovascular exercise</li>
                  <li>Resistance training</li>
                  <li>Flexibility work</li>
                  <li>Everyday natural movement</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-wairua-dark mb-3">Nutritional Wisdom</h3>
                <p className="text-gray-600 mb-4">
                  Focus on foods that support mitochondrial health while limiting those that create oxidative stress.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Colorful plant foods rich in polyphenols</li>
                  <li>Omega-3 fatty acids</li>
                  <li>B vitamins and minerals</li>
                  <li>Limiting processed foods and excess sugar</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-wairua-dark mb-3">Sleep Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Honor your circadian rhythms by creating consistent patterns that signal your system to transition.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Consistent sleep/wake times</li>
                  <li>Limited blue light exposure evening</li>
                  <li>Creating a sleep sanctuary</li>
                  <li>Pre-sleep rituals</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Coming Soon / Deeper Exploration */}
          <div>
            <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-6 text-center">
              Explore Deeper
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
              Ready to dive deeper into the biological foundations of your whirlpool? 
              Stay tuned for our detailed guides on these fascinating topics:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {DEEPER_EXPLORATIONS.map((topic, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                  <h3 className="font-medium text-wairua-dark mb-2">{topic.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{topic.description}</p>
                  {topic.comingSoon && (
                    <span className="inline-block px-3 py-1 bg-wairua-light/30 text-wairua-dark text-xs rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
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
              Continue Your Exploration
            </h2>
            <p className="text-gray-600 mb-8">
              Discover how these biological foundations connect to your emotional and social experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/learn/emotional-literacy">
                <Button variant="default">
                  Explore Emotional Literacy
                </Button>
              </Link>
              <Link href="/assessment">
                <Button variant="outline">
                  Begin Your Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
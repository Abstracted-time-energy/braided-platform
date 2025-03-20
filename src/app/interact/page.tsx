"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import WaveDivider from '@/components/ui/WaveDivider';
import EmotionalInteraction from '@/components/whirlpool/EmotionalInteraction';


// Define local types and data since imports aren't working
// Just while you fix the export issue
type EmotionId = 'seeking' | 'care' | 'play' | 'fear' | 'rage' | 'grief' | 'lust';
type RegulationSystem = 'Threat System' | 'Drive System' | 'Soothing System';

// Color mapping for emotional states
const emotionColors: Record<EmotionId, string> = {
  seeking: "#F59E0B", // Amber
  care: "#8B5CF6", // Purple
  play: "#3B82F6", // Blue
  fear: "#10B981", // Emerald
  rage: "#EF4444", // Red
  grief: "#6B7280", // Gray
  lust: "#EC4899", // Pink
};

// The names and descriptions for emotional states
const emotionDetails: Record<EmotionId, {name: string, description: string}> = {
  seeking: {
    name: "SEEKING / Curiosity",
    description: "Motivated exploration, anticipation, and desire for resources and possibilities"
  },
  care: {
    name: "CARE / Compassion",
    description: "Nurturing, empathic state focused on the wellbeing and needs of others"
  },
  play: {
    name: "PLAY / Joy",
    description: "Joyful, social engagement that fosters bonding, learning, and creativity"
  },
  fear: {
    name: "FEAR / Anxiety",
    description: "Defensive state focused on detecting and avoiding potential threats"
  },
  rage: {
    name: "RAGE / Anger",
    description: "Frustrated, irritated state activated when goals are blocked or boundaries violated"
  },
  grief: {
    name: "GRIEF / Distress",
    description: "Disconnected, sorrowful state related to separation, loss, or abandonment"
  },
  lust: {
    name: "LUST / Desire",
    description: "Sexual desire and attraction that motivates reproductive and intimate behavior"
  }
};

interface InteractionScenario {
  id: string;
  name: string;
  emotion1: EmotionId;
  emotion2: EmotionId;
  pattern: string;
  description: string;
  mentalizationInsight: string;
}

// Define interaction scenarios
const interactionScenarios: InteractionScenario[] = [
  {
    id: "rage-care",
    name: "Anger Meets Compassion",
    emotion1: "rage",
    emotion2: "care",
    pattern: "resonant",
    description: "When anger is met with compassion, the soothing presence can help regulate and transform defensive anger.",
    mentalizationInsight: "The caring person sees beyond the anger to the hurt beneath, responding to the underlying vulnerability rather than the defensive display."
  },
  {
    id: "mutual-care",
    name: "Compassionate Connection",
    emotion1: "care",
    emotion2: "care",
    pattern: "harmony",
    description: "When both people are in caring, compassionate states, they create a resonant, nurturing environment that enhances well-being for both.",
    mentalizationInsight: "Both individuals are attuned to each other's emotional needs, creating a secure, supportive connection."
  },
  {
    id: "playful-learning",
    name: "Playful Exploration",
    emotion1: "play",
    emotion2: "seeking",
    pattern: "creative",
    description: "PLAY and SEEKING systems working together create an optimal state for learning, creativity and growth.",
    mentalizationInsight: "Each person recognizes and supports the other's joy in exploration, creating a safe space for discovery."
  },
  {
    id: "threat-defense",
    name: "Conflict Escalation",
    emotion1: "rage",
    emotion2: "fear", 
    pattern: "destructive",
    description: "When RAGE meets FEAR, defensive reactions amplify each other, creating a rapidly escalating cycle of attack and defense.",
    mentalizationInsight: "Neither person can recognize the vulnerable emotions beneath the defensive behaviors, intensifying the threat response."
  },
  {
    id: "grief-care",
    name: "Compassionate Support",
    emotion1: "grief",
    emotion2: "care",
    pattern: "resonant",
    description: "When CARE meets GRIEF, the soothing presence can help regulate the distress of separation or loss.",
    mentalizationInsight: "The caring person recognizes and validates the grief experience, offering presence without trying to 'fix' the pain."
  },
  {
    id: "drive-dismissal",
    name: "Misaligned Connection",
    emotion1: "seeking",
    emotion2: "play",
    pattern: "dissonant",
    description: "When SEEKING encounters PLAY, but with different goals, one person's enthusiasm may seem dismissive of the other's needs.",
    mentalizationInsight: "Each person misinterprets the other's state, assuming shared goals when they actually have different intentions."
  },
  {
    id: "intimacy-mismatch",
    name: "Intimacy Mismatch",
    emotion1: "lust",
    emotion2: "fear",
    pattern: "dissonant",
    description: "When LUST meets FEAR, one person's approach activates the other's threat system, creating disconnection.",
    mentalizationInsight: "A failure to recognize and respect the other's boundaries and emotional state leads to misattunement and distress."
  }
];

// Mapping of emotions to their regulation systems
const emotionToSystem: Record<EmotionId, RegulationSystem> = {
  seeking: "Drive System",
  care: "Soothing System",
  play: "Soothing System",
  fear: "Threat System",
  rage: "Threat System",
  grief: "Threat System",
  lust: "Drive System"
};

export default function InteractPage() {
  // State for selected interaction
  const [selectedInteraction, setSelectedInteraction] = useState<InteractionScenario>(interactionScenarios[0]);

  return (
    <MainLayout>
      {/* Hero section */}
      <div className="bg-gradient-to-b from-wairua-light/30 to-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-light mb-6 text-gray-800 leading-tight">
              Emotional <span className="text-wairua-dark">Interactions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore how our emotional states create patterns of interaction that either enhance 
              connection or create disconnection in our relationships.
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider color="#ffffff" />
      
      {/* Theoretical Framework First */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                Understanding Emotional Communication
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our emotional states radiate outward and interact with others,
                creating patterns of connection or disconnection.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-16">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-wairua-dark mb-2">Primary Emotional Systems</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Jaak Panksepp identified seven primary emotional systems that all mammals share:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 pl-4">
                    {(Object.entries(emotionDetails) as [EmotionId, {name: string, description: string}][]).map(([id, emotion]) => (
                      <li key={id} className="flex items-center">
                        <span 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{backgroundColor: emotionColors[id]}}
                        ></span>
                        <span className="font-medium">{emotion.name.split('/')[0].trim()}:</span>
                        <span className="ml-1">{emotion.name.split('/')[1].trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-wairua-dark mb-2">Emotion Regulation Systems</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Paul Gilbert's Compassion Focused Therapy identifies three key systems:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                    <li><span className="font-medium">Threat System:</span> Protective responses (FEAR, RAGE, PANIC/GRIEF)</li>
                    <li><span className="font-medium">Drive System:</span> Achievement and resource seeking (SEEKING, LUST)</li>
                    <li><span className="font-medium">Soothing System:</span> Connection and contentment (CARE, PLAY)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    Balance between these systems creates emotional wellbeing and healthy relationships.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-wairua-dark mb-2">Mentalization</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Mentalization is our ability to understand mental states in ourselves and others. It has four dimensions:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                    <li><span className="font-medium">Self-focused:</span> Understanding your own mind</li>
                    <li><span className="font-medium">Other-focused:</span> Understanding others' minds</li>
                    <li><span className="font-medium">Implicit:</span> Automatic, intuitive understanding</li>
                    <li><span className="font-medium">Explicit:</span> Conscious, deliberate reflection</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    Strong mentalization skills help us navigate emotional interactions effectively.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Emotional Interaction Patterns */}
            <div className="mb-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                  Explore Emotional Interaction Patterns
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Select different interaction patterns to see how primary emotional systems 
                  communicate and influence each other.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {interactionScenarios.map(scenario => (
                  <button
                    key={scenario.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedInteraction.id === scenario.id 
                        ? 'bg-wairua-dark text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                    onClick={() => setSelectedInteraction(scenario)}
                  >
                    {scenario.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Visualization with explanatory panel side by side */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              {/* Left: Visualization */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <EmotionalInteraction 
                  scenarioId={selectedInteraction.id}
                />
              </div>
              
              {/* Right: Explanation */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col">
                  <h3 className="text-xl font-medium mb-2">{selectedInteraction.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedInteraction.description}</p>
                  
                  <div className="grid grid-cols-1 gap-4 my-4">
                    {selectedInteraction.emotion1 && selectedInteraction.emotion2 && (
                      <>
                        <div className="bg-white p-4 rounded-md shadow-sm" 
                             style={{borderLeft: `4px solid ${emotionColors[selectedInteraction.emotion1]}`}}>
                          <h4 className="font-medium" style={{color: emotionColors[selectedInteraction.emotion1]}}>
                            {emotionDetails[selectedInteraction.emotion1]?.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-2">
                            {emotionDetails[selectedInteraction.emotion1]?.description}
                          </p>
                          <div className="flex space-x-2">
                            <div className="text-xs inline-block px-2 py-1 bg-wairua-light/30 rounded">
                              {emotionToSystem[selectedInteraction.emotion1]}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm"
                             style={{borderLeft: `4px solid ${emotionColors[selectedInteraction.emotion2]}`}}>
                          <h4 className="font-medium" style={{color: emotionColors[selectedInteraction.emotion2]}}>
                            {emotionDetails[selectedInteraction.emotion2]?.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-2">
                            {emotionDetails[selectedInteraction.emotion2]?.description}
                          </p>
                          <div className="flex space-x-2">
                            <div className="text-xs inline-block px-2 py-1 bg-wairua-light/30 rounded">
                              {emotionToSystem[selectedInteraction.emotion2]}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Mentalization Insight */}
                  <div className="mt-auto">
                    <div className="p-4 bg-white rounded-md border-l-4 border-wairua-dark">
                      <h4 className="font-medium text-gray-700 mb-1">Mentalization Insight</h4>
                      <p className="text-sm text-gray-600">{selectedInteraction.mentalizationInsight}</p>
                    </div>
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
              Practicing Emotional Awareness
            </h2>
            <p className="text-gray-600 mb-8">
              When interactions become challenging, try these reflective practices:
            </p>
            <div className="space-y-4 text-left max-w-lg mx-auto">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-wairua-dark">1. Identify Your Emotional System</h3>
                <p className="text-sm text-gray-600">
                  "Which of my primary emotional systems is active right now? Is my threat, drive, or soothing system dominant?"
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-wairua-dark">2. Mentalize the Other Person</h3>
                <p className="text-sm text-gray-600">
                  "What emotional system might be active for them? What needs or fears might be driving their behavior?"
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-wairua-dark">3. Notice the Interaction Pattern</h3>
                <p className="text-sm text-gray-600">
                  "How are our emotional states influencing each other? What pattern is emerging between us?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import WaveDivider from '@/components/ui/WaveDivider';
import EmotionalInteraction from '@/components/whirlpool/EmotionalInteraction';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Define local types and data since imports aren't working
// Just while you fix the export issue
type EmotionId = 'seeking' | 'care' | 'play' | 'fear' | 'rage' | 'grief' | 'lust';
type RegulationSystem = 'Threat System' | 'Drive System' | 'Soothing System';

// Color mapping for emotional states with enhanced accessibility
const emotionColors: Record<EmotionId, string> = {
  seeking: "#F59E0B", // Amber
  care: "#8B5CF6",    // Purple
  play: "#3B82F6",    // Blue
  fear: "#10B981",    // Emerald
  rage: "#EF4444",    // Red
  grief: "#6B7280",   // Gray
  lust: "#EC4899"     // Pink
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
    description: "When anger is met with compassion, the soothing presence can help regulate and transform defensive anger. This mirrors the therapeutic relationship where a client's rage is met with the therapist's empathic understanding.",
    mentalizationInsight: "The caring person sees beyond the anger to the hurt beneath, responding to the underlying vulnerability rather than the defensive display. This reflects the core principle of mentalization-based therapy where we look beyond surface emotions to understand the deeper emotional needs."
  },
  {
    id: "mutual-care",
    name: "Compassionate Connection",
    emotion1: "care",
    emotion2: "care",
    pattern: "harmony",
    description: "When both people are in caring, compassionate states, they create a resonant, nurturing environment that enhances well-being for both. This represents the ideal therapeutic alliance and secure attachment patterns.",
    mentalizationInsight: "Both individuals are attuned to each other's emotional needs, creating a secure, supportive connection. This mirrors the 'safe haven' and 'secure base' functions described in attachment theory."
  },
  {
    id: "playful-learning",
    name: "Playful Exploration",
    emotion1: "play",
    emotion2: "seeking",
    pattern: "creative",
    description: "PLAY and SEEKING systems working together create an optimal state for learning, creativity and growth. This combination represents the ideal state for therapeutic exploration and personal development.",
    mentalizationInsight: "Each person recognizes and supports the other's joy in exploration, creating a safe space for discovery. This reflects the importance of play in both child development and adult learning."
  },
  {
    id: "threat-defense",
    name: "Conflict Escalation",
    emotion1: "rage",
    emotion2: "fear", 
    pattern: "destructive",
    description: "When RAGE meets FEAR, defensive reactions amplify each other, creating a rapidly escalating cycle of attack and defense. This pattern often emerges in trauma responses and attachment wounds.",
    mentalizationInsight: "Neither person can recognize the vulnerable emotions beneath the defensive behaviors, intensifying the threat response. This illustrates how trauma can impair mentalization capacity."
  },
  {
    id: "grief-care",
    name: "Compassionate Support",
    emotion1: "grief",
    emotion2: "care",
    pattern: "resonant",
    description: "When CARE meets GRIEF, the soothing presence can help regulate the distress of separation or loss. This represents the healing power of empathic attunement in processing grief.",
    mentalizationInsight: "The caring person recognizes and validates the grief experience, offering presence without trying to 'fix' the pain. This demonstrates the importance of mentalization in supporting emotional processing."
  },
  {
    id: "drive-dismissal",
    name: "Misaligned Connection",
    emotion1: "seeking",
    emotion2: "play",
    pattern: "dissonant",
    description: "When SEEKING's focused drive for achievement meets PLAY's need for exploration and connection, one person's goal-oriented approach may feel dismissive of the other's need for relational engagement. This often occurs in work-life balance conflicts or when achievement needs override relational needs.",
    mentalizationInsight: "Each person misinterprets the other's state, assuming shared goals when they actually have different intentions. This reflects how our drive system can sometimes override our social engagement system, leading to relational disconnection."
  },
  {
    id: "intimacy-mismatch",
    name: "Intimacy Mismatch",
    emotion1: "lust",
    emotion2: "fear",
    pattern: "dissonant",
    description: "When LUST meets FEAR, one person's approach activates the other's threat system, creating disconnection. This pattern often emerges in attachment trauma or when past experiences of intimacy have been associated with threat.",
    mentalizationInsight: "A failure to recognize and respect the other's boundaries and emotional state leads to misattunement and distress. This illustrates how trauma can affect our ability to mentalize in intimate relationships."
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
  const [selectedInteraction, setSelectedInteraction] = useState<InteractionScenario>(interactionScenarios[0]);
  const [hoveredEmotion, setHoveredEmotion] = useState<EmotionId | null>(null);
  const [isInsightExpanded, setIsInsightExpanded] = useState(false);

  return (
    <MainLayout>
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-b from-wairua-light/30 to-white pt-20 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-montserrat font-light mb-8 text-gray-800 leading-tight"
              {...fadeInUp}
            >
              Emotional <span className="text-wairua-dark">Literacy</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              {...fadeInUp}
            >
              Explore how our emotional states create patterns of interaction that either enhance 
              connection or create disconnection in our relationships.
            </motion.p>
          </div>
        </div>
      </motion.div>
      
      <WaveDivider />
      
      {/* Theoretical Framework */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div 
              className="mb-12 text-center"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-montserrat font-light text-gray-800 mb-6">
                Understanding Emotional Communication
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our emotional states radiate outward and interact with others,
                creating patterns of connection or disconnection.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg mb-12"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Primary Emotional Systems */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-wairua-dark mb-4">Primary Emotional Systems</h4>
                  <div className="grid gap-3">
                    {(Object.entries(emotionDetails) as [EmotionId, {name: string, description: string}][]).map(([id, emotion]) => (
                      <motion.div
                        key={id}
                        className="group relative"
                        onMouseEnter={() => setHoveredEmotion(id)}
                        onMouseLeave={() => setHoveredEmotion(null)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div 
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            hoveredEmotion === id 
                              ? 'bg-white shadow-md' 
                              : 'bg-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: emotionColors[id] }}
                            />
                            <div>
                              <span className="font-medium">{emotion.name.split('/')[0].trim()}</span>
                              <span className="text-gray-600 ml-2">{emotion.name.split('/')[1].trim()}</span>
                            </div>
                          </div>
                          {hoveredEmotion === id && (
                            <motion.p 
                              className="text-sm text-gray-600 mt-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.2 }}
                            >
                              {emotion.description}
                            </motion.p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Emotion Regulation Systems */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-wairua-dark mb-4">Emotion Regulation Systems</h4>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Threat System",
                        description: "Protective responses (FEAR, RAGE, PANIC/GRIEF)",
                        color: "from-red-50 to-white"
                      },
                      {
                        name: "Drive System",
                        description: "Achievement and resource seeking (SEEKING, LUST)",
                        color: "from-amber-50 to-white"
                      },
                      {
                        name: "Soothing System",
                        description: "Connection and contentment (CARE, PLAY)",
                        color: "from-blue-50 to-white"
                      }
                    ].map((system, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 rounded-lg bg-gradient-to-r ${system.color} shadow-sm`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h5 className="font-medium text-gray-800 mb-1">{system.name}</h5>
                        <p className="text-sm text-gray-600">{system.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Mentalisation */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-wairua-dark mb-4">Mentalisation</h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Self-focused",
                        description: "Understanding your own mind",
                        icon: "🧠"
                      },
                      {
                        title: "Other-focused",
                        description: "Understanding others' minds",
                        icon: "👥"
                      },
                      {
                        title: "Implicit",
                        description: "Automatic, intuitive understanding",
                        icon: "⚡"
                      },
                      {
                        title: "Explicit",
                        description: "Conscious, deliberate reflection",
                        icon: "💭"
                      }
                    ].map((aspect, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-2xl">{aspect.icon}</span>
                        <div>
                          <h5 className="font-medium text-gray-800">{aspect.title}</h5>
                          <p className="text-sm text-gray-600">{aspect.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Emotional Interaction Patterns */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-montserrat font-light text-gray-800 mb-6">
                  Explore Emotional Interaction Patterns
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Select different interaction patterns to see how primary emotional systems 
                  communicate and influence each other.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {interactionScenarios.map(scenario => (
                  <motion.button
                    key={scenario.id}
                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300
                      ${selectedInteraction.id === scenario.id 
                        ? 'bg-wairua-dark text-white shadow-lg scale-105' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:scale-105'}`}
                    onClick={() => setSelectedInteraction(scenario)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {scenario.name}
                  </motion.button>
                ))}
              </div>

              {/* Large Visualization */}
              <motion.div 
                className="w-full bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg mb-12"
                variants={fadeInUp}
              >
                <div className="aspect-[16/9] w-full">
                  <EmotionalInteraction 
                    scenarioId={selectedInteraction.id}
                  />
                </div>
              </motion.div>

              {/* Explanation Panel */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-12"
                variants={fadeInUp}
              >
                {/* Left: Interaction Pattern Description */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{selectedInteraction.name}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{selectedInteraction.description}</p>
                  </div>
                </div>

                {/* Right: Emotion Details */}
                <div className="space-y-6">
                  {selectedInteraction.emotion1 && selectedInteraction.emotion2 && (
                    <>
                      <motion.div 
                        className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm"
                        style={{borderLeft: `4px solid ${emotionColors[selectedInteraction.emotion1]}`}}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="text-xl font-medium mb-2" style={{color: emotionColors[selectedInteraction.emotion1]}}>
                          {emotionDetails[selectedInteraction.emotion1]?.name}
                        </h4>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {emotionDetails[selectedInteraction.emotion1]?.description}
                        </p>
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {emotionToSystem[selectedInteraction.emotion1]}
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm"
                        style={{borderLeft: `4px solid ${emotionColors[selectedInteraction.emotion2]}`}}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="text-xl font-medium mb-2" style={{color: emotionColors[selectedInteraction.emotion2]}}>
                          {emotionDetails[selectedInteraction.emotion2]?.name}
                        </h4>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {emotionDetails[selectedInteraction.emotion2]?.description}
                        </p>
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {emotionToSystem[selectedInteraction.emotion2]}
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Collapsible Mentalization Insight */}
              <motion.div 
                className="w-full bg-gradient-to-br from-wairua-light/10 to-white rounded-xl shadow-sm border-l-4 border-wairua-dark overflow-hidden"
                variants={fadeInUp}
              >
                <div 
                  className="p-4 cursor-pointer flex items-center justify-between"
                  onClick={() => setIsInsightExpanded(!isInsightExpanded)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💭</span>
                    <h4 className="text-xl font-medium text-gray-800">Mentalisation Insight</h4>
                  </div>
                  <motion.div
                    animate={{ rotate: isInsightExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isInsightExpanded ? "auto" : 0,
                    opacity: isInsightExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {selectedInteraction.mentalizationInsight}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <WaveDivider inverted />
      
      {/* Reflective Practices */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-montserrat font-light text-gray-800 mb-6">
                Practicing Emotional Awareness
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                When interactions become challenging, try these reflective practices:
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1. Identify Your Emotional System",
                  question: "Which of my primary emotional systems is active right now? Is my threat, drive, or soothing system dominant?",
                  icon: "🎯"
                },
                {
                  title: "2. Mentalise the Other Person",
                  question: "What emotional system might be active for them? What needs or fears might be driving their behavior?",
                  icon: "🤝"
                },
                {
                  title: "3. Notice the Interaction Pattern",
                  question: "How are our emotional states influencing each other? What pattern is emerging between us?",
                  icon: "🔄"
                }
              ].map((practice, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="h-full bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className="text-4xl mb-4">{practice.icon}</div>
                    <h3 className="text-xl font-medium text-wairua-dark mb-4">{practice.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {practice.question}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-wairua-light/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-6"
              variants={fadeInUp}
            >
              Ready to Explore Your Patterns?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Take a moment to reflect on your own emotional patterns. Our assessment can help you understand your unique emotional landscape and how it shapes your relationships.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a 
                href="/assessment"
                className="inline-block px-8 py-4 bg-wairua-dark text-white rounded-xl text-lg font-medium hover:bg-wairua-dark/90 transition-colors duration-200"
              >
                Begin Your Assessment
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
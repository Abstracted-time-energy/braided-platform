"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import WaveDivider from '@/components/ui/WaveDivider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
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

// Define the biological foundations
const BIOLOGICAL_FOUNDATIONS = [
  {
    id: "movement",
    title: "Movement",
    subtitle: "Dynamic Patterns",
    description: "Movement is a fundamental biological necessity that influences your overall wellbeing. Regular physical activity creates beneficial effects that extend throughout your entire system.",
    benefits: [
      "Mitochondrial biogenesis - forming new cellular energy centers",
      "Myokine signaling - communication pathways between muscles and organs",
      "Neurogenesis and plasticity - developing neural connections"
    ],
    metaphor: "Regular movement helps maintain optimal energy flow throughout the body, similar to how flowing water maintains natural patterns.",
    color: "from-wairua-light to-white",
    icon: "🌊"
  },
  {
    id: "nutrition",
    title: "Nourishment",
    subtitle: "Essential Elements",
    description: "The food you consume provides both the energy and the building blocks your body uses daily. Good nutrition isn't simply fuel—it's the foundation of physical wellbeing.",
    benefits: [
      "Mitochondrial function - supports efficient energy production",
      "Cellular signaling - nutrients serve as messengers between cells",
      "Microbiome interaction - gut organisms transform food into bioactive compounds"
    ],
    metaphor: "When your nutritional intake aligns with your biological needs, it supports efficient energy patterns throughout the body.",
    color: "from-wairua-light/20 to-white",
    icon: "🌱"
  },
  {
    id: "sleep",
    title: "Restoration",
    subtitle: "Rhythmic Recovery",
    description: "Your sleep/wake cycle orchestrates numerous biological processes, allowing your system to balance between activity and recovery—essential phases for wellbeing.",
    benefits: [
      "Glymphatic clearance - removing metabolic waste from the brain",
      "Cellular renewal - repairing energy systems",
      "Hormonal balance - coordinating metabolic and emotional regulation"
    ],
    metaphor: "When sleep patterns align with your biological rhythms, they support natural restorative processes.",
    color: "from-wairua-dark/10 to-white",
    icon: "🌙"
  }
];
// Define the bioenergetic concepts
const BIOENERGETIC_CONCEPTS = [
  {
    title: "Bioelectric Signaling",
    description: "Beyond biochemistry, cells communicate through bioelectric signals—patterns of ion flow and voltage gradients that coordinate development, healing, and function. These signals help maintain the integrity of biological systems."
  },
  {
    title: "Mitochondrial Networks",
    description: "Rather than isolated energy producers, mitochondria form networks that respond to environmental cues, communicate between cells, and influence psychological processes. These networks translate environmental experiences into cellular responses."
  },
  {
    title: "Energetic Coherence",
    description: "When foundational biological processes are aligned, they create more coherent patterns throughout your system. When misaligned, they can contribute to fatigue, inflammation, mood disturbances, and potentially illness."
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
              Biological <span className="text-wairua-dark">Foundations</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              {...fadeInUp}
            >
              Explore how the fundamental biological processes of movement, nourishment, and restoration
              create the energy for well-being.
            </motion.p>
          </div>
        </div>
      </motion.div>
      
      <WaveDivider />
      
      {/* Introduction Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8 text-center"
              variants={fadeInUp}
            >
              The Foundations of Health
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Your body relies on fundamental biological processes to sustain energy and wellbeing.
              These foundational elements—movement, nourishment, and restoration—form the basis
              of physical health, influencing many aspects of your experience.
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              When these core processes function well together, they create a resilient foundation that supports 
              overall wellbeing. When disrupted or imbalanced, the effects can influence your emotions, 
              thoughts, relationships, and general vitality.
            </motion.p>
          </motion.div>

          {/* Biological Foundations Cards */}
          <div className="space-y-24 mb-24">
            {BIOLOGICAL_FOUNDATIONS.map((foundation, index) => (
              <motion.div 
                key={foundation.id}
                className={`flex flex-col md:flex-row gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                {/* Image/Visual side */}
                <motion.div 
                  className={`md:w-2/5 rounded-2xl min-h-[400px] flex items-center justify-center bg-gradient-to-br ${foundation.color} p-8 shadow-lg`}
                  variants={fadeInUp}
                >
                  <span className="text-8xl">{foundation.icon}</span>
                </motion.div>
                
                {/* Content side */}
                <motion.div 
                  className="md:w-3/5"
                  variants={fadeInUp}
                >
                  <h3 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                    {foundation.title} <span className="text-wairua-dark">/ {foundation.subtitle}</span>
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {foundation.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-6 shadow-sm">
                    <h4 className="font-medium text-wairua-dark mb-4 text-lg">Key Biological Effects:</h4>
                    <ul className="space-y-3 text-gray-600">
                      {foundation.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-wairua-dark mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="italic text-gray-700 border-l-4 border-wairua-light pl-6 py-2 text-lg">
                    {foundation.metaphor}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Integrated Perspective Section */}
          <motion.div 
            className="mb-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8 text-center"
              variants={fadeInUp}
            >
              The Integrated Perspective: Bioenergetic Flow
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-center"
              variants={fadeInUp}
            >
              At the deepest level, exercise, nutrition, and sleep can be understood through the framework of 
              bioenergentics—the study of energy flow in living systems.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {BIOENERGETIC_CONCEPTS.map((concept, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="bg-gradient-to-br from-gray-50 to-white border-none shadow-lg h-full">
                    <CardHeader>
                      <CardTitle className="text-wairua-dark text-2xl font-montserrat font-light">
                        {concept.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {concept.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Practical Applications Section */}
          <motion.div 
            className="mb-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8 text-center"
              variants={fadeInUp}
            >
              Cultivating Energy
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-center"
              variants={fadeInUp}
            >
              Understanding these biological foundations empowers you to make choices that support your wellbeing. 
              Here are practical approaches to consider for each foundation:
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Movement Practices",
                  description: "Incorporate varied movement patterns to stimulate different aspects of mitochondrial function and myokine signaling.",
                  items: ["Cardiovascular exercise", "Resistance training", "Flexibility work", "Everyday natural movement"],
                  icon: "🌊"
                },
                {
                  title: "Nutritional Wisdom",
                  description: "Focus on foods that support mitochondrial health while limiting those that create oxidative stress.",
                  items: ["Colorful plant foods rich in polyphenols", "Omega-3 fatty acids", "B vitamins and minerals", "Limiting processed foods and excess sugar"],
                  icon: "🌱"
                },
                {
                  title: "Sleep Optimization",
                  description: "Honor your circadian rhythms by creating consistent patterns that signal your system to transition.",
                  items: ["Consistent sleep/wake times", "Limited blue light exposure evening", "Creating a sleep sanctuary", "Pre-sleep rituals"],
                  icon: "🌙"
                }
              ].map((practice, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="text-4xl mb-4">{practice.icon}</div>
                    <h3 className="text-2xl font-medium text-wairua-dark mb-4">{practice.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {practice.description}
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      {practice.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-wairua-dark mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Coming Soon / Deeper Exploration */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8 text-center"
              variants={fadeInUp}
            >
              Explore Deeper
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-center"
              variants={fadeInUp}
            >
              Ready to dive deeper into the biological foundations of your whirlpool? 
              Stay tuned for our detailed guides on these fascinating topics:
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {DEEPER_EXPLORATIONS.map((topic, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 text-center transform transition-transform duration-300 group-hover:-translate-y-1 shadow-lg">
                    <h3 className="text-xl font-medium text-wairua-dark mb-3">{topic.title}</h3>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    {topic.comingSoon && (
                      <span className="inline-block px-4 py-2 bg-wairua-light/20 text-wairua-dark text-sm rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <WaveDivider inverted />
      
      {/* Call to Action */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-3xl font-montserrat font-light text-gray-800 mb-6"
              variants={fadeInUp}
            >
              Continue Your Exploration
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Discover how these biological foundations connect to your emotional and social experience.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              variants={fadeInUp}
            >
              <Link href="/learn/emotional-literacy">
                <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                  Explore Emotional Literacy
                </Button>
              </Link>
              <Link href="/assessment">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Begin Your Assessment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Home() {
  // Client-side state
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <MainLayout>
      {/* Clean Hero Section with Simplified Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with simplified gradient */}
        <div className="absolute inset-0 -z-20">
          <img 
            src="/images/river.jpg" 
            alt="Flowing river with rocks" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/80 -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {isMounted ? (
              <>
                {/* Clean heading with minimal animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-light mb-10 text-white leading-tight">
                    <span className="block mb-2">The</span> 
                    <span className="block text-blue-200 font-normal mb-2">whirlpool</span>
                    <span className="block">as a reflection of your journey</span>
                  </h1>
                </motion.div>
                
                {/* Concise and clear description */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="space-y-8 mb-14"
                >
                  <p className="text-xl md:text-2xl text-blue-50/90 leading-relaxed font-light">
                    A space for contemplating the interconnected layers that form your experience.
                  </p>
                </motion.div>

                {/* Clear and simple CTA */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link href="/learn">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className="bg-white/10 text-white hover:bg-white/20 border border-white/30 px-8 py-4 text-lg w-full sm:w-auto"
                    >
                      Explore the model
                    </Button>
                  </Link>
                  <Link href="/assessment">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg w-full sm:w-auto"
                    >
                      Begin your reflection
                    </Button>
                  </Link>
                </motion.div>
              </>
            ) : (
              // Static version for initial load
              <>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-light mb-10 text-white leading-tight">
                  <span className="block mb-2">The</span> 
                  <span className="block text-blue-200 font-normal mb-2">whirlpool</span>
                  <span className="block">as a reflection of your journey</span>
                </h1>
                <div className="space-y-8 mb-14">
                  <p className="text-xl md:text-2xl text-blue-50/90 leading-relaxed font-light">
                    A space for contemplating the interconnected layers that form your experience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/learn">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className="bg-white/10 text-white hover:bg-white/20 border border-white/30 px-8 py-4 text-lg w-full sm:w-auto"
                    >
                      Explore the model
                    </Button>
                  </Link>
                  <Link href="/assessment">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg w-full sm:w-auto"
                    >
                      Begin your reflection
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Simple wave divider */}
      <div className="relative bg-white h-16 -mt-8">
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="rgba(17, 24, 39, 0.8)"></path>
        </svg>
      </div>
      
      {/* Enhanced Concept Introduction with cleaner animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section intro with visual separator */}
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  The Braided Rivers of Life
                </h2>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
              </motion.div>
            </div>
            
            <div className="prose prose-lg max-w-5xl mx-auto space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-gray-700 text-xl leading-loose">
                  Imagine a vast riverscape where countless rivers intertwine, forming intricate braided patterns. Each river represents unique subcultures, cultures, ethnicities, and countries. Within these rivers, multiple whirlpools make up whanau and communities which connect to form larger pools of towns and cities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-gray-700 text-xl leading-loose">
                  Nestled within these communities, individual whirlpools emerge. At the core of each whirlpool lies a centre of intelligence and energy that shapes the individual's experience and interaction with the world around them. This core is the product of a long and complex moment to moment journey, tracing back to the origins of the universe.
                </p>
              </motion.div>
            </div>

            {/* Featured metaphor image - simplified without quote overlay */}
            <motion.div 
              className="my-16 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/braidedriver.jpg" 
                alt="Braided river with intricate patterns" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 italic mt-4 text-center">
                The Braided Rivers of Life — A visual metaphor for our interconnected journey through time and space
              </p>
            </motion.div>

            {/* Content blocks with cleaner design */}
            <div className="prose prose-lg max-w-5xl mx-auto space-y-16">
              {/* Content section 1 - Origins */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="p-8 border-l-3 border-blue-200 bg-blue-50/50 rounded-r-lg space-y-6"
              >
                <h3 className="text-2xl text-gray-800 mb-6 font-light">Origins & Evolution</h3>
                <p className="text-gray-700 text-lg leading-loose">
                  Just as rivers have evolved over time, flowing from the top of mountains, shaped by the forces of nature, so too have the whirlpools been formed by the material evolution of the world. From the Big Bang to the emergence of life on Earth, from the development of genetic diversity to the rise of human civilizations, each whirlpool carries within it the legacy of this history.
                </p>
                <p className="text-gray-700 text-lg leading-loose">
                  The journey of each whirlpool is shaped not only by its own unique experiences but also by
                  the countless interactions and relationships of its ancestors. The current whirlpools are the product of the genetic, cultural, and environmental influences that have been passed down through generations, the memory of all that has been before, forming the bedrock upon which their individual identities are built. We are a weave in the continuous flow of information passed down throughout time. 
                </p>
              </motion.div>
              
              {/* Content section 2 - Interconnectedness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="p-8 border-r-3 border-teal-200 bg-teal-50/50 rounded-l-lg space-y-6"
              >
                <h3 className="text-2xl text-gray-800 mb-6 font-light">The Interconnected Exchange</h3>
                <p className="text-gray-700 text-lg leading-loose">
                  As the whirlpools navigate the braided rivers of life, they engage in a constant exchange of energy and information with their surroundings. They are shaped by the people, communities, cultures and environments they encounter, while also contributing their own unique perspectives and experiences to the larger riverscape.
                </p>
                <p className="text-gray-700 text-lg leading-loose">
                  Whirlpools are impacted by their environment and have impacts on their environments. This reciprocal exchange highlights a deep interconnection, as each whirlpool is both a product of and a contributor to the world around it. The whirlpools are not separate, isolated entities but rather part of a larger, interdependent web of relationships that spans across time and space.
                </p>
              </motion.div>
              
              {/* Final content section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="mt-8 space-y-8"
              >
                <p className="text-gray-700 text-xl leading-loose">
                  By recognising this interconnectedness, we can develop a deeper appreciation for the ways in which our individual journeys are woven into the larger tapestry of life. We can acknowledge the countless influences that have shaped us; from the physical forces that set the universe in motion to the genetic flow of information through time, to the experiences, memories and relationships that have moulded our personal identities.
                </p>
                <p className="text-gray-700 text-xl leading-loose">
                  This understanding empowers us to embrace our roles as active participants in the ongoing evolution of the braided rivers of life. By engaging mindfully and compassionately with others, we contribute to the health and vitality of the larger riverscape, fostering more harmonious, coherent and connected individuals, relationships, and communities.
                </p>
              </motion.div>
            </div>
            
            {/* Visual feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Self-Discovery</h3>
                <p className="text-gray-600">Explore your own whirlpool and understand the forces that have shaped your journey.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 bg-teal-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Connections</h3>
                <p className="text-gray-600">Understand how your whirlpool interacts with others in the vast river of life.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Growth</h3>
                <p className="text-gray-600">Develop strategies for navigating life's currents with mindfulness and purpose.</p>
              </motion.div>
            </div>
            
            {/* Video Explainer Section - Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-24 mb-12 text-center"
            >
              <h2 className="text-3xl font-light text-gray-800 mb-4">Understand the Concept</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Watch our brief explainer video to better understand how the Braided Rivers model can help you navigate your journey.
              </p>
              
              {/* Video placeholder */}
              <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Video Explainer Coming Soon</p>
                  <p className="text-gray-500 text-sm mt-2">This visualization will help illustrate the whirlpool concept</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced footer CTA with simplified design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-10 border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              Ready to explore your own whirlpool?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Begin your journey of self-discovery and connection. Understand your place in the braided rivers of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-none px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300"
                >
                  Begin Your Journey
                </Button>
              </Link>
              <Link href="/learn">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-4 text-lg rounded-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
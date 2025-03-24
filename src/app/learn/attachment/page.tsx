"use client";  // This ensures the component only renders on the client

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import WaveDivider from '@/components/ui/WaveDivider';
import AttachmentInteraction from '@/components/whirlpool/AttachmentInteraction';

export default function AttachmentPage() {
  return (
    <MainLayout>
      {/* Hero section */}
      <div className="bg-gradient-to-b from-wairua-light/30 to-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-light mb-8 text-gray-800 leading-tight">
              The <span className="text-wairua-dark">Patterns</span> of Connection
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover how your earliest relationships shape the way you connect with others today. Like the gentle currents of a river, attachment patterns flow through every interaction.
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider color="#ffffff" />
      
      {/* Attachment Theory Introduction */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-montserrat font-light text-gray-800 mb-6">
                The Foundation of Human Connection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our earliest experiences of connection shape how we relate to others throughout our lives. These patterns, formed through our interactions, continue to influence our relationships in subtle and meaningful ways.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm mb-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-medium text-wairua-dark mb-4">Our First Language of Love</h4>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Connection is our first language, a powerful bond that shapes our emotional landscape. Through this bond, we learn:
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Emotional Safety</span>
                        <p className="text-sm mt-1">Learning to trust in the presence of others</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Self-Regulation</span>
                        <p className="text-sm mt-1">Managing emotions through connection</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Relational Maps</span>
                        <p className="text-sm mt-1">Understanding how relationships work</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Self-Worth</span>
                        <p className="text-sm mt-1">Knowing our value in relationships</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-wairua-dark mb-4">The Blueprint of Connection</h4>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Our early experiences create internal maps that guide how we navigate relationships:
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Self-Image</span>
                        <p className="text-sm mt-1">How we see ourselves in relationships</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Trust Patterns</span>
                        <p className="text-sm mt-1">Our expectations of others</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Emotional Expression</span>
                        <p className="text-sm mt-1">How we share our feelings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wairua-dark mr-3">•</span>
                      <div>
                        <span className="font-medium">Connection Style</span>
                        <p className="text-sm mt-1">Our approach to relationships</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-6 italic">
                    These patterns, like the currents beneath the surface, shape our relationships in ways we often don't notice.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Secure Attachment Section */}
            <div className="mb-24">
              <div className="mb-12">
                <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                  Secure Attachment: The Foundation of Trust
                </h2>
                <div className="w-24 h-1 bg-wairua-dark rounded mb-6"></div>
                <p className="text-xl text-gray-600">
                  A foundation of trust and safety that supports growth and exploration.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Visualization */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <AttachmentInteraction scenarioId="secure-connection" />
                </div>
                
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-medium text-wairua-dark mb-6">The Dance of Security</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-600 leading-relaxed">
                      In secure connection, one presence creates a <span className="font-medium text-wairua-dark">safe haven</span> for emotional comfort and a <span className="font-medium text-wairua-dark">secure base</span> for exploration. This balance allows for:
                    </p>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Free Expression</span>
                          <p className="text-sm mt-1">Knowing feelings are welcome and understood</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Trust in Connection</span>
                          <p className="text-sm mt-1">Believing in the reliability of others</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Balanced Relating</span>
                          <p className="text-sm mt-1">Finding harmony between closeness and independence</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Like a gentle whirlpool, secure connection maintains its center while flowing naturally with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Anxious Attachment Section */}
            <div className="mb-24">
              <div className="mb-12">
                <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                  Anxious Attachment: The Search for Reassurance
                </h2>
                <div className="w-24 h-1 bg-wairua-dark rounded mb-6"></div>
                <p className="text-xl text-gray-600">
                  A pattern of seeking connection while fearing its loss.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-medium text-wairua-dark mb-6">The Search for Reassurance</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-600 leading-relaxed">
                      When responses are inconsistent, one may develop a heightened awareness of connection, seeking reassurance through intensified emotional signals.
                    </p>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Emotional Intensity</span>
                          <p className="text-sm mt-1">Strong feelings that seek validation</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Connection Seeking</span>
                          <p className="text-sm mt-1">A deep need for closeness and reassurance</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Fear of Loss</span>
                          <p className="text-sm mt-1">Worry about abandonment or rejection</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Like a whirlpool reaching outward, this pattern extends its energy in search of connection, sometimes losing its center in the process.
                    </p>
                  </div>
                </div>
                
                {/* Visualization */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <AttachmentInteraction scenarioId="anxious-attachment" />
                </div>
              </div>
            </div>
            
            {/* Avoidant Attachment Section */}
            <div className="mb-24">
              <div className="mb-12">
                <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                  Avoidant Attachment: The Protection of Distance
                </h2>
                <div className="w-24 h-1 bg-wairua-dark rounded mb-6"></div>
                <p className="text-xl text-gray-600">
                  A pattern of maintaining distance while longing for connection.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Visualization */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <AttachmentInteraction scenarioId="avoidant-attachment" />
                </div>
                
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-medium text-wairua-dark mb-6">The Protection of Distance</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-600 leading-relaxed">
                      When emotional needs aren't consistently met, one may learn to maintain distance and develop self-reliance as a protective strategy.
                    </p>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Emotional Independence</span>
                          <p className="text-sm mt-1">Valuing self-sufficiency over connection</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Distance Management</span>
                          <p className="text-sm mt-1">Maintaining emotional boundaries</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Intimacy Avoidance</span>
                          <p className="text-sm mt-1">Difficulty with emotional closeness</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Like a contained whirlpool, this pattern maintains strong boundaries but may miss the nourishment of deeper connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Disorganized Attachment Section */}
            <div className="mb-24">
              <div className="mb-12">
                <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                  Disorganized Attachment: The Conflict of Connection
                </h2>
                <div className="w-24 h-1 bg-wairua-dark rounded mb-6"></div>
                <p className="text-xl text-gray-600">
                  A pattern of seeking and fearing connection simultaneously.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-medium text-wairua-dark mb-6">The Conflict of Connection</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-600 leading-relaxed">
                      When connection feels both needed and frightening, it creates conflicting impulses to approach and withdraw.
                    </p>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Mixed Signals</span>
                          <p className="text-sm mt-1">Conflicting desires for closeness and distance</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Emotional Chaos</span>
                          <p className="text-sm mt-1">Difficulty regulating intense feelings</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wairua-dark mr-3">•</span>
                        <div>
                          <span className="font-medium">Identity Confusion</span>
                          <p className="text-sm mt-1">Uncertainty about self and relationships</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Like a turbulent whirlpool, this pattern shows unpredictable patterns of connection and withdrawal.
                    </p>
                  </div>
                </div>
                
                {/* Visualization */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <AttachmentInteraction scenarioId="disorganized-attachment" />
                </div>
              </div>
            </div>
            
            {/* Growing Through Connection Section */}
            <div className="mb-24">
              <div className="mb-12">
                <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                  Growing Through Connection: The Journey of Understanding
                </h2>
                <div className="w-24 h-1 bg-wairua-dark rounded mb-6"></div>
                <p className="text-xl text-gray-600">
                  Understanding our patterns is the first step toward growth and change.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                <AttachmentInteraction scenarioId="healing-attachment" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Earned Security</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Through awareness and supportive relationships, we can develop new patterns of connection, regardless of earlier experiences.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Healing Connections</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Relationships with understanding others can help reshape our patterns of connection over time.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Self-Compassion</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Learning to respond to our own needs with kindness creates a secure internal foundation.
                  </p>
                </div>
              </div>

              {/* Assessment Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl font-montserrat font-light text-gray-800 mb-6">
                  Ready to Explore Your Patterns?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Take a gentle journey of self-discovery to understand your own patterns of connection.
                </p>
                <div className="text-center mt-12">
                  <a 
                    href="/assessment" 
                    className="inline-flex items-center px-8 py-4 bg-wairua-dark text-white rounded-full text-lg font-medium hover:bg-wairua-dark/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Begin Your Journey
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <WaveDivider color="#f9fafb" inverted={true} />
      
      {/* Call to Action */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-8 text-center">
              Begin Your Journey of Understanding
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Take a moment to reflect on your own patterns of connection.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium text-wairua-dark mb-4">Notice Your Patterns</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  "When you feel distressed, do you find yourself reaching out to others, withdrawing, or feeling uncertain about what you need? How do these patterns show up in your relationships?"
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium text-wairua-dark mb-4">Explore Your Comfort Zone</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  "What happens when others get too close or when you worry they might not be available? How do you manage these moments of connection and distance?"
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium text-wairua-dark mb-4">Choose Growth</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  "How might understanding your patterns help you respond to yourself and others with more compassion and clarity? What would it feel like to explore this further?"
                </p>
              </div>
            </div>

            {/* Assessment Call to Action */}
            <div className="text-center mt-12">
              <a 
                href="/assessment" 
                className="inline-flex items-center px-8 py-4 bg-wairua-dark text-white rounded-full text-lg font-medium hover:bg-wairua-dark/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Begin Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
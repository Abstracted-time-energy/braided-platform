"use client";  // This ensures the component only renders on the client

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import WaveDivider from '@/components/ui/WaveDivider';
import AttachmentInteraction from '@/components/whirlpool/AttachmentInteraction';

export default function AttachmentPage() {
  return (
    <MainLayout>
      {/* Hero section */}
      <div className="bg-gradient-to-b from-wairua-light/30 to-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-light mb-6 text-gray-800 leading-tight">
              Attachment <span className="text-wairua-dark">Theory</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore how our early relationships shape lifelong patterns of connection. Like whirlpools in a river, our attachment styles influence how we interact with others.
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
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-montserrat font-light text-gray-800 mb-4">
                Understanding Attachment Patterns
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Attachment theory, developed by John Bowlby and Mary Ainsworth, describes how early relationships with caregivers shape our emotional connections throughout life.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-wairua-dark mb-2">Attachment as a Survival System</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Attachment is a powerful emotional bond that connects a child to their caregiver, ensuring protection and survival. It's a critical evolutionary adaptation that shapes our:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                    <li><span className="font-medium">Emotional regulation</span> - Learning to manage feelings through co-regulation</li>
                    <li><span className="font-medium">Sense of safety</span> - Developing confidence to explore the world</li>
                    <li><span className="font-medium">Interpersonal templates</span> - Building internal models of relationships</li>
                    <li><span className="font-medium">Perception of self</span> - Forming a sense of self-worth and efficacy</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-wairua-dark mb-2">Internal Working Models</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Early attachment experiences create mental representations or "maps" that guide how we:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                    <li><span className="font-medium">View ourselves</span> - As worthy of care or undeserving</li>
                    <li><span className="font-medium">Perceive others</span> - As reliable or unreliable</li>
                    <li><span className="font-medium">Process emotions</span> - By expressing, suppressing, or becoming overwhelmed</li>
                    <li><span className="font-medium">Approach relationships</span> - With trust, anxiety, avoidance, or fear</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    These working models, like the deeper currents in our whirlpools, often operate outside of conscious awareness but powerfully influence our connections.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Secure Attachment Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-light text-gray-800 mb-3">
                  Secure Attachment
                </h2>
                <div className="w-20 h-1 bg-wairua-dark rounded mb-4"></div>
                <p className="text-gray-600">
                  When caregivers consistently respond with sensitivity and warmth, children develop a secure attachment style.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Visualization */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <AttachmentInteraction scenarioId="secure-parent-child" />
                </div>
                
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Characteristics of Secure Attachment</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      In secure attachment, caregivers provide a <span className="font-medium">secure base</span> from which children can explore the world, and a <span className="font-medium">safe haven</span> to return to when threatened or distressed.
                    </p>
                    <p className="text-sm text-gray-600">
                      Securely attached individuals tend to have balanced emotional expression, trust in relationships, resilience during stress, and comfort with both intimacy and autonomy.
                    </p>
                    <p className="text-sm text-gray-600">
                      Like harmonious whirlpools, secure individuals maintain their core while flowing easily in and out of connection with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Anxious Attachment Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-light text-gray-800 mb-3">
                  Anxious/Preoccupied Attachment
                </h2>
                <div className="w-20 h-1 bg-wairua-dark rounded mb-4"></div>
                <p className="text-gray-600">
                  When caregiving is inconsistent or unpredictable, children may develop an anxious attachment style.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Characteristics of Anxious Attachment</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Anxiously attached individuals often experience heightened emotional reactivity, fear of abandonment, and a strong desire for closeness that can sometimes overwhelm others.
                    </p>
                    <p className="text-sm text-gray-600">
                      They may be hypervigilant to signs of rejection, show excessive reassurance-seeking, and experience intense distress when separated from loved ones.
                    </p>
                    <p className="text-sm text-gray-600">
                      As whirlpools, they may extend far beyond their center with rapid, turbulent energy, constantly seeking connection but sometimes destabilizing themselves in the process.
                    </p>
                  </div>
                </div>
                
                {/* Visualization */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <AttachmentInteraction scenarioId="anxious-attachment" />
                </div>
              </div>
            </div>
            
            {/* Avoidant Attachment Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-light text-gray-800 mb-3">
                  Avoidant/Dismissive Attachment
                </h2>
                <div className="w-20 h-1 bg-wairua-dark rounded mb-4"></div>
                <p className="text-gray-600">
                  When caregivers are consistently emotionally unavailable or rejecting, children often develop an avoidant attachment style.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Visualization */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <AttachmentInteraction scenarioId="avoidant-attachment" />
                </div>
                
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Characteristics of Avoidant Attachment</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Avoidantly attached individuals often appear self-sufficient and emotionally independent, valuing autonomy over connection. They may minimize emotional expression and maintain emotional distance in relationships.
                    </p>
                    <p className="text-sm text-gray-600">
                      They typically show discomfort with intimacy, difficulty asking for help, and a tendency to withdraw during conflict or emotional situations.
                    </p>
                    <p className="text-sm text-gray-600">
                      As whirlpools, they maintain tight boundaries with minimal energy extending outward, focused primarily on their core but potentially missing the nourishment of deeper connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Disorganized Attachment Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-light text-gray-800 mb-3">
                  Disorganized/Fearful Attachment
                </h2>
                <div className="w-20 h-1 bg-wairua-dark rounded mb-4"></div>
                <p className="text-gray-600">
                  When caregivers are frightening or frightened themselves, children may develop a disorganized attachment style.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-wairua-dark mb-4">Characteristics of Disorganized Attachment</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Disorganized attachment often develops in response to trauma, abuse, or caregivers who themselves are struggling with unresolved trauma or loss.
                    </p>
                    <p className="text-sm text-gray-600">
                      These individuals may experience conflicting impulses to both approach and avoid connection, leading to unpredictable relationship patterns, difficulties regulating emotions, and confusion about identity.
                    </p>
                    <p className="text-sm text-gray-600">
                      As whirlpools, they may show erratic energy patterns – sometimes surging toward connection, sometimes retreating, with unstable boundaries and chaotic interactions.
                    </p>
                  </div>
                </div>
                
                {/* Visualization */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <AttachmentInteraction scenarioId="disorganized-attachment" />
                </div>
              </div>
            </div>
            
            {/* Healing Attachment Wounds */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-light text-gray-800 mb-3">
                  Healing Attachment Wounds
                </h2>
                <div className="w-20 h-1 bg-wairua-dark rounded mb-4"></div>
                <p className="text-gray-600">
                  While early attachment patterns influence our relationships, they can be healed and transformed through conscious awareness and new experiences of secure connection.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                <AttachmentInteraction scenarioId="healing-attachment" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-wairua-dark mb-2">Earned Security</h3>
                  <p className="text-sm text-gray-600">
                    Through reflection, therapy, and healing relationships, individuals can develop "earned secure attachment" – moving toward security despite insecure beginnings.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-wairua-dark mb-2">Secure Relationships</h3>
                  <p className="text-sm text-gray-600">
                    Relationships with partners, friends, therapists, and mentors who provide consistent, attuned responses can help reshape attachment patterns over time.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-wairua-dark mb-2">Self-Compassion</h3>
                  <p className="text-sm text-gray-600">
                    Learning to respond to our own needs with kindness and understanding can help develop a secure internal base that isn't dependent on others.
                  </p>
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
              Reflect on Your Attachment Style
            </h2>
            <p className="text-gray-600 mb-8">
              Understanding your attachment style can help you navigate relationships more effectively.
            </p>
            <div className="space-y-4 text-left max-w-lg mx-auto">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-wairua-dark">1. Notice Patterns in Relationships</h3>
                <p className="text-sm text-gray-600">
                  "How do I typically respond when I feel distressed? Do I reach out, withdraw, or feel confused about what I need?"
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-wairua-dark">2. Observe Your Comfort with Closeness and Distance</h3>
                <p className="text-sm text-gray-600">
                  "Do I feel uncomfortable when others get too close? Or do I worry they won't be available when I need them?"
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-wairua-dark">3. Practice Secure Behaviors</h3>
                <p className="text-sm text-gray-600">
                  "How might I respond to myself and others with more consistency, attunement, and compassion?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
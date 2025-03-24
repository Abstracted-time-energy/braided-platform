import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <MainLayout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img 
            src="/images/river.jpg" 
            alt="Flowing river with rocks" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light mb-8 text-white leading-tight">
              The whirlpool as a reflection of your journey
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-100 leading-relaxed font-light">
                A space for contemplating the interconnected layers that form your experience.
              </p>
              <p className="text-xl text-gray-100 leading-relaxed font-light">
                Not a solution, but an invitation to deeper understanding.
              </p>
            </div>

            <div className="mt-12 flex gap-8 items-center">
              <Link href="/learn">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/20 border-2 border-white/30">
                  Explore the model
                </Button>
              </Link>
              <span className="text-gray-300">or</span>
              <Link href="/assessment" className="text-gray-100 hover:text-white transition-colors text-lg underline-offset-4 hover:underline">
                Begin your reflection
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Refined divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Enhanced Concept Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto space-y-6">
              <p className="text-gray-700 text-xl leading-relaxed">
                Imagine a vast riverscape where countless rivers intertwine, forming intricate braided patterns. Each river represents unique subcultures, cultures, ethnicities, and countries. Within these rivers, multiple whirlpools make up whanau and communities which connect to form larger pools of towns and cities.
              </p>
              
              <p className="text-gray-700 text-xl leading-relaxed">
                Nestled within these communities, individual whirlpools emerge. At the core of each whirlpool lies a centre of intelligence and energy that shapes the individual's experience and interaction with the world around them. This core is the product of a long and complex moment to moment journey, tracing back to the origins of the universe.
              </p>
            </div>

            {/* Featured metaphor image */}
            <div className="my-16">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/braidedriver.jpg" 
                  alt="Braided river with intricate patterns" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 italic mt-4 text-center">
                The Braided Rivers of Life - A visual metaphor for our interconnected journey through time and space
              </p>
            </div>

            <div className="prose prose-lg mx-auto space-y-8">
              <p className="text-gray-700 text-xl leading-relaxed">
                Just as rivers have evolved over time, flowing from the top of mountains, shaped by the forces of nature, so too have the whirlpools been formed by the material evolution of the world. From the Big Bang to the emergence of life on Earth, from the development of genetic diversity to the rise of human civilizations, each whirlpool carries within it the legacy of this history.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed">
                The journey of each whirlpool is shaped not only by its own unique experiences but also by
                the countless interactions and relationships of its ancestors. The current whirlpools are the product of the genetic, cultural, and environmental influences that have been passed down through generations, the memory of all that has been before, forming the bedrock upon which their individual identities are built. We are a weave in the continuous flow of information passed down throughout time. 
              </p>

              <p className="text-gray-700 text-xl leading-relaxed">
                As the whirlpools navigate the braided rivers of life, they engage in a constant exchange of energy and information with their surroundings. They are shaped by the people, communities, cultures and environments they encounter, while also contributing their own unique perspectives and experiences to the larger riverscape.
              </p>
              
              <p className="text-gray-700 text-xl leading-relaxed">
                Whirlpools are impacted by their environment and have impacts on their environments. This reciprocal exchange highlights a deep interconnection, as each whirlpool is both a product of and a contributor to the world around it. The whirlpools are not separate, isolated entities but rather part of a larger, interdependent web of relationships that spans across time and space.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed">
                By recognising this interconnectedness, we can develop a deeper appreciation for the ways in which our individual journeys are woven into the larger tapestry of life. We can acknowledge the countless influences that have shaped us; from the physical forces that set the universe in motion to the genetic flow of information through time, to the experiences, memories and relationships that have moulded our personal identities.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed">
                This understanding empowers us to embrace our roles as active participants in the ongoing evolution of the braided rivers of life. By engaging mindfully and compassionately with others, we contribute to the health and vitality of the larger riverscape, fostering more harmonious, coherent and connected individuals, relationships, and communities.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed">
                Exploring the "Braided Rivers of Life" invites us to recognise the interconnectedness of our existence and to wonder curiously at the unique journey that each whirlpool represents. By bringing awareness to the countless relationships that have brought us to this moment, we can cultivate a deeper sense of purpose, meaning, and connection as we navigate the complex and ever-changing riverscape of life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced footer CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 font-light">
              Ready to explore your own whirlpool?
            </p>
            <Link href="/signup">
              <Button variant="outline" size="lg" className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50">
                Begin Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
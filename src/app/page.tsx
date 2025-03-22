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
            <br />
            <div className="space-y-2">
  <p className="text-lg text-gray-600 leading-relaxed font-light">
    A space for contemplating the interconnected layers that form your experience.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed font-light">
    Not a solution, but an invitation to deeper understanding. </p>
</div>

<br />
<br />

            <div className="flex gap-12 items-center">
              <Link href="/learn">
                <Button variant="ghost" size="default">
                  Explore the model
                </Button>
              </Link>
              <span className="text-gray-400">or</span>
              <Link href="/assessment" className="text-gray-600 hover:text-gray-800 transition-colors">
                Begin your reflection
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
            Imagine a vast riverscape where countless rivers intertwine, forming intricate braided patterns. Each river represents unique subcultures, cultures, ethnicities, and countries. Within these rivers, multiple whirlpools make up whanau and communities which connect to form larger pools of towns and cities. Nestled within these communities, individual whirlpools emerge. At the core of each whirlpool lies a centre of intelligence and energy that shapes the individual's experience and interaction with the world around them. This core is the product of a long and complex moment to moment journey, tracing back to the origins of the universe.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
            Just as rivers have evolved over time, flowing from the top of mountains, shaped by the forces of nature, so too have the whirlpools been formed by the material evolution of the world. From the Big Bang to the emergence of life on Earth, from the development of genetic diversity to the rise of human civilizations, each whirlpool carries within it the legacy of this history.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
            The journey of each whirlpool is shaped not only by its own unique experiences but also by
the countless interactions and relationships of its ancestors. The current whirlpools are the product of the genetic, cultural, and environmental influences that have been passed down through generations, the memory of all that has been before, forming the bedrock upon which their individual identities are built. We are a weave in the continuous flow of information passed down throughout time. 
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
            As the whirlpools navigate the braided rivers of life, they engage in a constant exchange of energy and information with their surroundings. They are shaped by the people, communities, cultures and environments they encounter, while also contributing their own unique perspectives and experiences to the larger riverscape.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
            Whirlpools are impacted by their environment and have impacts on their environments. This reciprocal exchange highlights a deep interconnection, as each whirlpool is both a product of and a contributor to the world around it. The whirlpools are not separate, isolated entities but rather part of a larger, interdependent web of relationships that spans across time and space.
            </p>

            <p className="text-gray-600 leading-relaxed">
            By recognising this interconnectedness, we can develop a deeper appreciation for the ways in which our individual journeys are woven into the larger tapestry of life. We can acknowledge the countless influences that have shaped us; from the physical forces that set the universe in motion to the genetic flow of information through time, to the experiences, memories and relationships that have moulded our personal identities.
            </p>
<br />
            <p className="text-gray-600 leading-relaxed">
            This understanding empowers us to embrace our roles as active participants in the ongoing evolution of the braided rivers of life. By engaging mindfully and compassionately with others, we contribute to the health and vitality of the larger riverscape, fostering more harmonious, coherent and connected individuals, relationships, and communities.
            </p>
<br />
            <p className="text-gray-600 leading-relaxed">
            Exploring the "Braided Rivers of Life" invites us to recognise the interconnectedness of our existence and to wonder curiously at the unique journey that each whirlpool represents. By bringing awareness to the countless relationships that have brought us to this moment, we can cultivate a deeper sense of purpose, meaning, and connection as we navigate the complex and ever-changing riverscape of life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Minimal footer CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-6 italic font-light">
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
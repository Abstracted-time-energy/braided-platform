import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-wairua-light/50 to-white -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-wairua-light to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 font-montserrat leading-tight">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-wairua-dark to-mauri-dark">Whirlpool</span> of Thrive
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Begin a journey of self-discovery through the Whirlpool of Thrive model—a holistic approach to wellbeing that honors the interconnected layers of your existence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn">
                <Button size="xl">
                  Learn the Model
                </Button>
              </Link>
              <Link href="/assessment">
                <Button variant="outline" size="xl">
                  Start Assessment
                </Button>
              </Link>
            </div>
            
            {/* Decorative waves */}
            <div className="mt-16 relative h-24 overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="relative block w-full h-24" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
            Explore the Layers of Your Whirlpool
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-wairua-light rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-wairua to-wairua-dark flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Discover Your Whirlpool</h3>
              <p className="text-gray-600">Map the current state of your wellbeing across eight interconnected layers.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-mauri-light rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-mauri to-mauri-dark flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Explore With AI</h3>
              <p className="text-gray-600">Engage in meaningful conversations about your wellbeing journey.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-mind-light rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-mind to-mind-dark flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Identify Blockages</h3>
              <p className="text-gray-600">Discover what might be restricting flow in your whirlpool.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-nervous-light rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-nervous to-nervous-dark flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Begin Your Journey</h3>
              <p className="text-gray-600">Take the first steps toward greater flow and thriving.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial section placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-montserrat">
            What Others Are Saying
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 italic mb-6">
              "The Whirlpool of Thrive model has given me a new perspective on my wellbeing. I've discovered connections between different areas of my life that I never realized before."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-wairua flex items-center justify-center text-white font-bold mr-4">
                J
              </div>
              <div>
                <p className="font-bold">Jamie Davis</p>
                <p className="text-sm text-gray-500">Wellbeing Explorer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-wairua-dark to-mauri-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward understanding your whirlpool and enhancing your wellbeing.
          </p>
          <Link href="/signup">
            <Button size="xl" variant="secondary" className="bg-white text-wairua-dark hover:bg-gray-100">
              Join Braided Today
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
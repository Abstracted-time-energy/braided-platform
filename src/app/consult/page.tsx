"use client";

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import WaveDivider from '@/components/ui/WaveDivider';

interface Professional {
  id: string;
  name: string;
  title: string;
  specialty: 'psychology' | 'psychiatry' | 'nutrition' | 'fitness' | 'mindfulness';
  description: string;
  areasOfFocus: string[];
  availableFor: string[];
  image: string;
}

const professionals: Professional[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Clinical Psychologist',
    specialty: 'psychology',
    description: 'Specializes in attachment-based therapy and emotional regulation.',
    areasOfFocus: ['Anxiety', 'Depression', 'Relationship Issues', 'Trauma Recovery'],
    availableFor: ['Online Sessions', 'In-person Consultations', 'Workshops'],
    image: '/images/professionals/sarah-chen.jpg'
  },
  {
    id: '2',
    name: 'Michael Thompson',
    title: 'Registered Dietitian',
    specialty: 'nutrition',
    description: 'Helps clients develop balanced nutrition plans that support mental and physical well-being.',
    areasOfFocus: ['Intuitive Eating', 'Meal Planning', 'Nutrition for Mental Health', 'Food Relationships'],
    availableFor: ['Online Consultations', 'Meal Plan Development', 'Group Sessions'],
    image: '/images/professionals/michael-thompson.jpg'
  },
  {
    id: '3',
    name: 'Dr. Lisa Rodriguez',
    title: 'Psychiatrist',
    specialty: 'psychiatry',
    description: 'Integrates medication management with holistic approaches to mental health care.',
    areasOfFocus: ['Medication Review', 'Anxiety Disorders', 'Depression', 'ADHD Management'],
    availableFor: ['Medication Consultations', 'Telehealth Appointments', 'Collaborative Care'],
    image: '/images/professionals/lisa-rodriguez.jpg'
  },
  {
    id: '4',
    name: 'James Wilson',
    title: 'Mindfulness Coach',
    specialty: 'mindfulness',
    description: 'Guides clients in developing mindfulness practices that reduce stress and increase self-awareness.',
    areasOfFocus: ['Meditation', 'Stress Reduction', 'Present-Moment Awareness', 'Emotional Regulation'],
    availableFor: ['Group Classes', 'Individual Sessions', 'Corporate Programs'],
    image: '/images/professionals/james-wilson.jpg'
  }
];

// The actual ConsultPage content
function ConsultContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedConcern, setSelectedConcern] = useState<string>('');

  const concerns = [
    'Anxiety & Stress',
    'Depression',
    'Relationship Issues',
    'Nutrition & Diet',
    'Sleep Problems',
    'Mindfulness & Meditation',
    'Medication Consultation',
    'Personal Growth'
  ];

  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = 
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.areasOfFocus.some(area => area.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSpecialty = !selectedSpecialty || professional.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <MainLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">Connect with the Braided Network</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the right professional to support your unique needs and personal growth journey.
            </p>
          </div>

          {/* Hero Wave Divider */}
          <WaveDivider />

          <div className="bg-white rounded-xl shadow p-6 mb-10">
            <h2 className="text-xl font-medium text-gray-800 mb-4">What are you looking for help with?</h2>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {concerns.map(concern => (
                <button
                  key={concern}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedConcern === concern 
                      ? 'bg-wairua text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setSelectedConcern(concern === selectedConcern ? '' : concern);
                    setSearchQuery(concern === selectedConcern ? '' : concern);
                  }}
                >
                  {concern}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search by name, specialty, or concern..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wairua focus:border-transparent"
                />
              </div>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wairua focus:border-transparent min-w-[180px]"
              >
                <option value="">All Specialties</option>
                <option value="psychology">Psychology</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="nutrition">Nutrition</option>
                <option value="fitness">Fitness</option>
                <option value="mindfulness">Mindfulness</option>
              </select>
            </div>
          </div>

          {/* Filter to Results Wave Divider */}
          <WaveDivider inverted={true} />

          <h3 className="text-xl font-medium text-gray-800 mb-6">
            {filteredProfessionals.length} Professional{filteredProfessionals.length !== 1 ? 's' : ''} Available
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((professional) => (
              <motion.div
                key={professional.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{professional.name}</h3>
                      <p className="text-wairua font-medium">{professional.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{professional.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Areas of Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      {professional.areasOfFocus.map(area => (
                        <span key={area} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-2 bg-wairua hover:bg-wairua-dark text-white rounded-lg transition-colors">
                    Request Consultation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProfessionals.length === 0 && (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No matching professionals found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all available professionals.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialty('');
                  setSelectedConcern('');
                }}
                className="px-4 py-2 bg-wairua text-white rounded-lg hover:bg-wairua-dark transition-colors"
              >
                View All Professionals
              </button>
            </div>
          )}
          
          {/* Results to Support Wave Divider */}
          <WaveDivider />
          
          <div className="mt-6 bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Can't find what you're looking for?</h3>
            <p className="text-gray-600 mb-4">
              We have a diverse network of professionals ready to help. Contact us for a personalized recommendation.
            </p>
            <button className="px-4 py-2 border border-wairua text-wairua hover:bg-wairua hover:text-white rounded-lg transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

// Client-side only wrapper component
export default function ConsultPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    // Return an empty placeholder during server-side rendering
    return <div className="min-h-screen"></div>;
  }
  
  return <ConsultContent />;
} 
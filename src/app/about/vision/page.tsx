"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';

export default function VisionPage() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/90"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-light text-white mb-6"
              >
                Transforming Mental Health Care in Aotearoa
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-blue-100 font-light"
              >
                An Integrated Approach to Psychedelic-Enhanced Therapies
              </motion.p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8">The Challenge</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Mental health services in Aotearoa New Zealand face a crisis. Current interventions are insufficient, 
                  people are suffering, and our mental health system struggles with:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                  <li>Staff shortages and burnout</li>
                  <li>Limited treatment options for complex conditions</li>
                  <li>Disconnection from community and holistic approaches</li>
                  <li>High costs of treatment-resistant conditions</li>
                  <li>Lack of innovation, lack of risk taking, slow change processes within DHB's</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Braided envisions a world where people thrive through deep connection to themselves, 
                  their communities, and their environment. We aim to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                  <li>Build a culture-evolving platform for community well-being with evidence-based innovation</li>
                  <li>Foster authentic healing and resilience within supportive communities</li>
                  <li>Create accessible pathways to transformative mental health care</li>
                  <li>Establish a new model where treatment, research, and education are braided together</li>
                  <li>Develop an operating system for the new mental health clinic: leveraging AI, technology, and biometric data</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8">Our Approach</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Braided will operate as a Registered Charitable Trust with three integrated divisions:
                </p>
                
                <div className="space-y-8">
                  {/* Treatment Services */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Treatment Services</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Comprehensive assessment and personalised care plans</li>
                      <li>Psychedelic-assisted psychotherapy with established protocols</li>
                      <li>Integration support and community connection</li>
                      <li>Family/community involvement and group programs</li>
                      <li>Quality assurance and continuous improvement cycles</li>
                    </ul>
                  </div>

                  {/* Research & Development */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Research & Development</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Clinical research on psychedelic therapies for conditions including addiction, PTSD, depression, and end-of-life care</li>
                      <li>Treatment protocol optimisation for Aotearoa's cultural context</li>
                      <li>Biomarker research and outcome tracking</li>
                      <li>Academic publications and knowledge translation</li>
                      <li>Policy recommendations and stakeholder engagement</li>
                    </ul>
                  </div>

                  {/* Education & Access */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Education & Access</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Development of Aotearoa-specific therapist training programs</li>
                      <li>Clinical supervision and apprenticeship opportunities</li>
                      <li>Public education and community engagement</li>
                      <li>Insurance model ("Braided Care") to improve affordability</li>
                      <li>Scholarship fund and sliding scale options</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why This Matters & Unique Value */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Why This Matters Now */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-light text-gray-900 mb-8">Why This Matters Now</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4">
                    <li><strong>Evidence is compelling:</strong> Clinical research shows efficacy of psychedelic-assisted therapies for treatment-resistant conditions.</li>
                    <li><strong>Existing systems are unprepared:</strong> Current healthcare structures lack the framework, funding, and expertise to implement these promising treatments.</li>
                    <li><strong>Community need is growing:</strong> Mental health challenges continue to rise, with increasing demand for effective alternatives.</li>
                    <li><strong>Unique opportunity:</strong> Aotearoa can develop culturally responsive models that respect Te Tiriti principles and integrate indigenous wisdom with clinical innovation.</li>
                  </ul>
                </motion.div>

                {/* Our Unique Value */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-light text-gray-900 mb-8">Our Unique Value</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4">
                    <li><strong>Integration of services:</strong> Weaving treatment, research, and training into one cohesive model</li>
                    <li><strong>Community-centered approach:</strong> Building healing environments that foster connection</li>
                    <li><strong>Sustainable funding model:</strong> Diversified revenue streams including memberships, grants, and partnerships</li>
                    <li><strong>Data-driven quality:</strong> Rigorous outcome tracking and continuous improvement</li>
                    <li><strong>Cultural responsiveness:</strong> Honoring Te Tiriti principles and working alongside Māori</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 
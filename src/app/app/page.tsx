"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import WaveDivider from '@/components/ui/WaveDivider';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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

const features = [
  {
    title: "Bio",
    subtitle: "Track Your Vital Signs",
    description: "Connect your favorite health devices (Oura, Garmin, Apple Health) to track sleep, heart rate, activity, and more. Get personalized insights and recommendations.",
    icon: "🌊",
    color: "from-wairua-light to-white",
    metrics: [
      { label: "Sleep Quality", value: "86%" },
      { label: "HRV", value: "42ms" },
      { label: "Activity Score", value: "92" }
    ]
  },
  {
    title: "Psycho",
    subtitle: "Mental Health Journey",
    description: "Track your psychological patterns, engage in therapeutic exercises, and monitor your emotional well-being with evidence-based tools and assessments.",
    icon: "🧠",
    color: "from-wairua-dark/10 to-white",
    metrics: [
      { label: "Mood Trend", value: "Positive" },
      { label: "Stress Level", value: "Low" },
      { label: "Engagement", value: "High" }
    ]
  },
  {
    title: "Social",
    subtitle: "Connect & Share",
    description: "Build your trusted circle, share your journey, and receive support from friends, family, and practitioners. All while maintaining your privacy.",
    icon: "🤝",
    color: "from-wairua-light/20 to-white",
    metrics: [
      { label: "Connections", value: "12" },
      { label: "Support Score", value: "88" },
      { label: "Engagement", value: "Active" }
    ]
  },
  {
    title: "Spirit",
    subtitle: "Mindfulness & Growth",
    description: "Access guided meditations, breathing exercises, and spiritual practices. Track your mindfulness journey and integrate it with your daily life.",
    icon: "✨",
    color: "from-wairua-dark/10 to-white",
    metrics: [
      { label: "Practice Streak", value: "8 days" },
      { label: "Total Hours", value: "42" },
      { label: "Consistency", value: "92%" }
    ]
  }
];

const integrations = [
  {
    name: "Oura Ring",
    description: "Track sleep, heart rate, and activity",
    icon: "💍"
  },
  {
    name: "Garmin",
    description: "Monitor workouts and daily activity",
    icon: "⌚"
  },
  {
    name: "Apple Health",
    description: "Comprehensive health data integration",
    icon: "🍎"
  },
  {
    name: "Bitcoin Lightning",
    description: "Seamless payments and rewards",
    icon: "⚡"
  }
];

export default function AppPage() {
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
              The <span className="text-wairua-dark">Braided</span> App
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              {...fadeInUp}
            >
              Track your well-being journey, connect with your support network, and earn rewards
              through Bitcoin Lightning integration.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...fadeInUp}
            >
              <Button className="bg-wairua hover:bg-wairua-dark text-white px-8 py-3">
                Download App
              </Button>
              <Button className="border border-wairua text-wairua hover:bg-wairua hover:text-white px-8 py-3">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <WaveDivider />

      {/* Features Section */}
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
              Your Integrated Well-being Platform
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 leading-relaxed text-center"
              variants={fadeInUp}
            >
              Track, connect, and grow with a platform that understands the interconnected nature
              of your well-being journey.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className={`rounded-2xl overflow-hidden bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  <div className="p-8">
                    <div className="text-6xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-wairua-dark font-medium mb-4">{feature.subtitle}</p>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {feature.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-xl font-semibold text-gray-800">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Integrations Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8 text-center"
              variants={fadeInUp}
            >
              Seamless Integrations
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration) => (
                <motion.div
                  key={integration.name}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{integration.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-gray-600">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <WaveDivider inverted={true} />

      {/* Bitcoin Lightning Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8"
              variants={fadeInUp}
            >
              Earn While You Grow
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Connect your Bitcoin Lightning wallet to earn rewards for your well-being achievements
              and share them with your support network.
            </motion.p>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Lightning-Fast Rewards
              </h3>
              <p className="text-gray-600 mb-8">
                Earn sats for completing daily tasks, maintaining streaks, and supporting others
                in their journey.
              </p>
              <Button className="bg-wairua hover:bg-wairua-dark text-white px-8 py-3">
                Connect Lightning Wallet
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl font-montserrat font-light text-gray-800 mb-8"
              variants={fadeInUp}
            >
              Ready to Begin Your Journey?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Download the Braided App today and start tracking your well-being journey
              with a supportive community.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button className="bg-wairua hover:bg-wairua-dark text-white px-8 py-3">
                Download Now
              </Button>
              <Button className="border border-wairua text-wairua hover:bg-wairua hover:text-white px-8 py-3">
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
} 
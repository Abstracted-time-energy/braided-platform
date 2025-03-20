import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function AttachmentPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Attachment Theory</h1>
        <p className="mb-8">
          Attachment theory explores how our early relationships shape our connections throughout life.
        </p>
        
        {/* Placeholder for interactive content */}
        <div className="bg-blue-50 p-8 rounded-lg text-center mb-8">
          <p>Interactive attachment visualization coming soon</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-blue-600">Secure Attachment</h2>
            <p>
              A healthy bond where the child feels safe to explore while knowing the caregiver provides a secure base.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-red-600">Anxious Attachment</h2>
            <p>
              An insecure pattern where the child becomes preoccupied with the caregiver's availability.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-green-600">Avoidant Attachment</h2>
            <p>
              An insecure pattern where the child learns to suppress attachment needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-purple-600">Disorganized Attachment</h2>
            <p>
              A complex pattern that develops when the caregiver is both a source of fear and safety.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
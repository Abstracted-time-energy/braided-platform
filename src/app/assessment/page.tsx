import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Import assessment questions
import assessmentData from '@/content/assessment/questions.json';

export default function AssessmentPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Whirlpool Assessment
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {assessmentData.description}
          </p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{assessmentData.instructions}</p>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            {assessmentData.questions.map((question) => (
              <Card key={question.id}>
                <CardContent className="pt-6">
                  <p className="mb-4">{question.text}</p>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Not at all true</span>
                    <span className="text-sm text-gray-500">Very true</span>
                  </div>
                  <div className="flex justify-between gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        className="w-full h-12 rounded-md border-2 border-gray-300 hover:border-wairua hover:bg-wairua-light transition-colors"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link href="/chat">
              <Button size="lg">
                Complete Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

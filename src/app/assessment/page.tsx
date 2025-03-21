import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Import assessment questions
import assessmentData from '@/content/assessment/questions.json';

export default function AssessmentPage() {
  // Organized questions by dimension categories
  const attachmentDimensions = [
    { id: 'anxiety', text: 'I often worry that people I care about don\'t really care for me or won\'t stay in my life.', category: 'Attachment', label: 'Anxiety' },
    { id: 'avoidance', text: 'I prefer not to depend on others, and I\'m uncomfortable when others depend on me.', category: 'Attachment', label: 'Avoidance' },
    { id: 'security', text: 'I find it relatively easy to get close to others and am comfortable giving and receiving support.', category: 'Attachment', label: 'Security' },
    { id: 'trust', text: 'I generally believe that people I\'m close to will be there for me when I need them.', category: 'Attachment', label: 'Trust' },
    { id: 'comfort', text: 'I feel comfortable sharing my private thoughts and feelings with those close to me.', category: 'Attachment', label: 'Comfort with intimacy' },
    { id: 'independence', text: 'I value both close connections and my own independence equally.', category: 'Attachment', label: 'Independence vs. dependency balance' },
  ];

  const reflectiveDimensions = [
    { id: 'self-awareness', text: 'I can usually recognize and name my emotions as they arise.', category: 'Reflective Functioning', label: 'Self-awareness' },
    { id: 'other-awareness', text: 'I\'m often curious about why others behave the way they do and consider their perspectives.', category: 'Reflective Functioning', label: 'Other-awareness' },
    { id: 'non-defensiveness', text: 'When I feel upset with someone, I can usually consider my own role in the situation.', category: 'Reflective Functioning', label: 'Non-defensiveness' },
    { id: 'emotional-complexity', text: 'I understand that people (including myself) can have contradictory feelings about the same situation.', category: 'Reflective Functioning', label: 'Emotional complexity' },
    { id: 'intergenerational', text: 'I can see how some of my relationship patterns are influenced by my early life experiences.', category: 'Reflective Functioning', label: 'Intergenerational awareness' },
    { id: 'narrative', text: 'When I tell stories about important relationships, they make logical sense and contain appropriate detail.', category: 'Reflective Functioning', label: 'Narrative coherence' },
  ];

  // Combine original questions with new dimension questions
  const allQuestions = [
    ...(assessmentData.questions || []),
    ...attachmentDimensions,
    ...reflectiveDimensions
  ];

  // Function to render rating scale buttons
  const renderRatingScale = () => {
    return (
      <>
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
      </>
    );
  };

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
          
          {/* Attachment Dimensions Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Attachment Dimensions</h2>
            <div className="space-y-6">
              {attachmentDimensions.map((question) => (
                <Card key={question.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium text-gray-600">{question.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{question.text}</p>
                    {renderRatingScale()}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Reflective Functioning Dimensions Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Reflective Functioning Dimensions</h2>
            <div className="space-y-6">
              {reflectiveDimensions.map((question) => (
                <Card key={question.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium text-gray-600">{question.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{question.text}</p>
                    {renderRatingScale()}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Original Assessment Questions (if needed) */}
          {assessmentData.questions && assessmentData.questions.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Additional Questions</h2>
              <div className="space-y-6">
                {assessmentData.questions.map((question) => (
                  <Card key={question.id}>
                    <CardContent className="pt-6">
                      <p className="mb-4">{question.text}</p>
                      {renderRatingScale()}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
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
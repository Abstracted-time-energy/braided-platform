"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import WaveDivider from '@/components/ui/WaveDivider';

// Define TypeScript interfaces for our data structure
interface AssessmentQuestion {
  id: string;
  section: string;
  subsection?: string;
  layer: string;
  text: string;
  type: 'scale' | 'text' | 'choice';
}

interface AssessmentSection {
  id: string;
  title: string;
  description: string;
}

interface AssessmentData {
  title: string;
  description: string;
  instructions: string;
  sections: AssessmentSection[];
  questions: AssessmentQuestion[];
}

// Define subsection title mapping
const subsectionTitles: Record<string, string> = {
  'movement': 'Movement',
  'nutrition': 'Nourishment',
  'restoration': 'Restoration',
  'integration': 'Integration'
};

export default function AssessmentPage() {
  // This is our assessment data (would normally be imported from JSON)
  const assessmentData: AssessmentData = {
    "title": "Whirlpool Assessment",
    "description": "This assessment will help you map your current whirlpool state across all layers of wellbeing.",
    "instructions": "For each statement, indicate how true it is for you on a scale from 1 (Not at all true) to 5 (Very true).",
    "sections": [
  {
    "id": "biological",
    "title": "Biological Foundations",
    "description": "The fundamental physical practices that support your whirlpool's energy flow."
  },
  {
    "id": "mauri",
    "title": "Energy Flow",
    "description": "Your vital life force and how it's maintained and expressed."
  },
  {
    "id": "mind",
    "title": "Mental Landscape",
    "description": "Your thought patterns, self-relationship, and cognitive flexibility."
  },
  {
    "id": "attachment",
    "title": "Relationship Patterns",
    "description": "Your patterns of connection, communication, and security in close relationships."
  },
  {
    "id": "reflective",
    "title": "Reflective Functioning",
    "description": "Your ability to understand your own and others' mental states, emotions, and behaviors."
  },
  {
    "id": "wairua",
    "title": "Spiritual Connection",
    "description": "Your connection to meaning, purpose, and something larger than yourself."
  }
]
    ,"questions": [
      // Questions remain the same as before
      {
        "id": "wairua_1",
        "section": "wairua",
        "layer": "wairua",
        "text": "I have a clear sense of meaning and purpose in my life",
        "type": "scale"
      },
      {
        "id": "wairua_2",
        "section": "wairua",
        "layer": "wairua",
        "text": "I feel connected to something larger than myself",
        "type": "scale"
      },
      {
        "id": "wairua_3",
        "section": "wairua",
        "layer": "wairua",
        "text": "I live according to my core values",
        "type": "scale"
      },
      {
        "id": "mauri_1",
        "section": "mauri",
        "layer": "mauri",
        "text": "I have sufficient energy for the activities that matter to me",
        "type": "scale"
      },
      {
        "id": "mauri_2",
        "section": "mauri",
        "layer": "mauri",
        "text": "I engage in activities that energize and revitalize me",
        "type": "scale"
      },
      {
        "id": "mauri_3",
        "section": "mauri",
        "layer": "mauri",
        "text": "I can identify what drains my energy and manage it effectively",
        "type": "scale"
      },
      {
        "id": "movement_1",
        "section": "biological",
        "subsection": "movement",
        "layer": "body",
        "text": "I engage in intentional physical activity (exercise, walking, movement practices) for at least 30 minutes most days",
        "type": "scale"
      },
      {
        "id": "movement_2",
        "section": "biological",
        "subsection": "movement",
        "layer": "body",
        "text": "I incorporate different types of movement in my routine (strength, cardiovascular, flexibility)",
        "type": "scale"
      },
      {
        "id": "movement_3",
        "section": "biological",
        "subsection": "movement",
        "layer": "body",
        "text": "I genuinely enjoy the forms of movement I engage in rather than viewing them as obligations",
        "type": "scale"
      },
      {
        "id": "nutrition_1",
        "section": "biological",
        "subsection": "nutrition",
        "layer": "body",
        "text": "I eat a variety of whole, unprocessed foods (vegetables, fruits, proteins, healthy fats) most days",
        "type": "scale"
      },
      {
        "id": "nutrition_2",
        "section": "biological",
        "subsection": "nutrition",
        "layer": "body",
        "text": "I have a positive relationship with food, eating mindfully and without guilt",
        "type": "scale"
      },
      {
        "id": "nutrition_3",
        "section": "biological",
        "subsection": "nutrition",
        "layer": "body",
        "text": "I notice how different foods affect my energy, mood, and mental clarity",
        "type": "scale"
      },
      {
        "id": "sleep_1",
        "section": "biological",
        "subsection": "restoration",
        "layer": "body",
        "text": "I consistently get 7-9 hours of quality sleep most nights",
        "type": "scale"
      },
      {
        "id": "sleep_2",
        "section": "biological",
        "subsection": "restoration",
        "layer": "body",
        "text": "I maintain regular sleep and wake times that align with my natural rhythms",
        "type": "scale"
      },
      {
        "id": "sleep_3",
        "section": "biological",
        "subsection": "restoration",
        "layer": "body",
        "text": "I have effective practices for rest and recovery when feeling depleted (beyond sleep)",
        "type": "scale"
      },
      {
        "id": "bio_integration_1",
        "section": "biological",
        "subsection": "integration",
        "layer": "body",
        "text": "I recognize the connection between my physical practices and my emotional wellbeing",
        "type": "scale"
      },
      {
        "id": "mind_1",
        "section": "mind",
        "layer": "mind",
        "text": "I can recognize and work with difficult thoughts and emotions",
        "type": "scale"
      },
      {
        "id": "mind_2",
        "section": "mind",
        "layer": "mind",
        "text": "I have a generally positive relationship with myself",
        "type": "scale"
      },
      {
        "id": "mind_3",
        "section": "mind",
        "layer": "mind",
        "text": "I can adapt my thinking when faced with new situations",
        "type": "scale"
      },
      {
        "id": "reflective_1",
        "section": "reflective",
        "layer": "social",
        "text": "I can identify and name my emotions as they arise",
        "type": "scale"
      },
      {
        "id": "reflective_2",
        "section": "reflective",
        "layer": "social",
        "text": "I understand how my thoughts and feelings influence my behavior",
        "type": "scale"
      },
      {
        "id": "reflective_3",
        "section": "reflective",
        "layer": "social",
        "text": "I can recognize when others' perspectives differ from my own",
        "type": "scale"
      },
      {
        "id": "reflective_4",
        "section": "reflective",
        "layer": "social",
        "text": "I'm able to consider what might be happening in another person's mind",
        "type": "scale"
      },
      {
        "id": "attachment_1",
        "section": "attachment",
        "layer": "social",
        "text": "I find it relatively easy to get close to others",
        "type": "scale"
      },
      {
        "id": "attachment_2",
        "section": "attachment",
        "layer": "social",
        "text": "I can communicate my needs clearly in close relationships",
        "type": "scale"
      },
      {
        "id": "attachment_3",
        "section": "attachment",
        "layer": "social",
        "text": "I trust that important people in my life will be there when I need them",
        "type": "scale"
      },
      {
        "id": "attachment_4",
        "section": "attachment",
        "layer": "social",
        "text": "I can maintain a sense of self-worth even during relationship difficulties",
        "type": "scale"
      }
    ]
  };

  const [responses, setResponses] = useState<Record<string, number>>({});
  const [currentSection, setCurrentSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const sections = assessmentData.sections;
  
  // Group questions by section
  const questionsBySection: Record<string, AssessmentQuestion[]> = {};
  assessmentData.questions.forEach(question => {
    if (!questionsBySection[question.section]) {
      questionsBySection[question.section] = [];
    }
    questionsBySection[question.section].push(question);
  });
  
  // Further group biological questions by subsection
  const bioQuestionsBySubsection: Record<string, AssessmentQuestion[]> = {};
  if (questionsBySection.biological) {
    questionsBySection.biological.forEach(question => {
      if (question.subsection) {
        if (!bioQuestionsBySubsection[question.subsection]) {
          bioQuestionsBySubsection[question.subsection] = [];
        }
        bioQuestionsBySubsection[question.subsection].push(question);
      }
    });
  }
  
  const handleResponse = (questionId: string, value: number): void => {
    setResponses({
      ...responses,
      [questionId]: value
    });
  };
  
  const handleNext = (): void => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else {
      setSubmitted(true);
      // In a real app, you would submit the responses to a backend here
    }
  };
  
  const handlePrevious = (): void => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const renderScale = (question: AssessmentQuestion): React.ReactNode => {
    return (
      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-xs text-gray-500">Not at all true</span>
          <span className="text-xs text-gray-500">Very true</span>
        </div>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleResponse(question.id, value)}
              className={`w-full py-2 rounded-md transition-colors ${
                responses[question.id] === value
                  ? 'bg-wairua-dark text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  const renderQuestionCard = (question: AssessmentQuestion): React.ReactNode => {
    return (
      <Card key={question.id} className="mb-6">
        <CardContent className="pt-6">
          <p className="text-gray-800 mb-4">{question.text}</p>
          {question.type === 'scale' && renderScale(question)}
        </CardContent>
      </Card>
    );
  };
  
  const renderBiologicalSection = (): React.ReactNode => {
    return (
      <>
        {Object.keys(bioQuestionsBySubsection).map((subsection) => (
          <div key={subsection} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {subsectionTitles[subsection] || subsection}
            </h3>
            
            {subsection !== 'integration' && (
              <p className="text-gray-600 mb-6">
                {subsection === 'movement' && "Your physical activity patterns create the dynamic currents in your whirlpool."}
                {subsection === 'nutrition' && "The quality of nourishment you consume forms the substrate from which your energy flows."}
                {subsection === 'restoration' && "Your sleep and rest practices allow for the rhythmic reset of your entire system."}
              </p>
            )}
            
            {bioQuestionsBySubsection[subsection].map(question => renderQuestionCard(question))}
          </div>
        ))}
      </>
    );
  };
  
  const renderCurrentSection = (): React.ReactNode => {
    const section = sections[currentSection];
    
    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
        <p className="text-gray-600 mb-8">{section.description}</p>
        
        {section.id === 'biological' ? (
          renderBiologicalSection()
        ) : (
          <>
            {questionsBySection[section.id]?.map(question => renderQuestionCard(question))}
          </>
        )}
        
        <div className="flex justify-between mt-8">
          <Button 
            onClick={handlePrevious} 
            variant="outline"
            disabled={currentSection === 0}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentSection < sections.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </div>
      </div>
    );
  };
  
  const renderResults = (): React.ReactNode => {
    // Calculate section scores
    const sectionScores: Record<string, number> = {};
    
    Object.keys(questionsBySection).forEach(sectionId => {
      const questions = questionsBySection[sectionId];
      let total = 0;
      let count = 0;
      
      questions.forEach(question => {
        if (responses[question.id]) {
          total += responses[question.id];
          count++;
        }
      });
      
      sectionScores[sectionId] = count > 0 ? Math.round((total / (count * 5)) * 100) : 0;
    });
    
    // Calculate biological subsection scores
    const bioSubsectionScores: Record<string, number> = {};
    
    if (bioQuestionsBySubsection) {
      Object.keys(bioQuestionsBySubsection).forEach(subsection => {
        const questions = bioQuestionsBySubsection[subsection];
        let total = 0;
        let count = 0;
        
        questions.forEach(question => {
          if (responses[question.id]) {
            total += responses[question.id];
            count++;
          }
        });
        
        bioSubsectionScores[subsection] = count > 0 ? Math.round((total / (count * 5)) * 100) : 0;
      });
    }
    
    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Whirlpool Assessment Results</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map(section => (
            <Card key={section.id}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-wairua-dark h-2.5 rounded-full" 
                      style={{ width: `${sectionScores[section.id]}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-right font-medium">{sectionScores[section.id]}%</p>
                
                {section.id === 'biological' && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-700 mb-3">Detailed Biological Foundations</h4>
                    {Object.keys(bioSubsectionScores).filter(s => s !== 'integration').map(subsection => (
                      <div key={subsection} className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{(subsectionTitles[subsection] || subsection).split('(')[0]}</span>
                          <span>{bioSubsectionScores[subsection]}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${
                              subsection === 'movement' ? 'bg-blue-500' :
                              subsection === 'nutrition' ? 'bg-green-500' :
                              'bg-purple-500'
                            }`}
                            style={{ width: `${bioSubsectionScores[subsection]}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-6">
            Your results reflect your current self-assessment across the layers of your whirlpool.
            Remember, this is a reflection point, not a judgment.
          </p>
          <Button onClick={() => window.location.reload()}>Take Assessment Again</Button>
        </div>
      </div>
    );
  };
  
  // Function to get section display name for progress bar
  const getSectionDisplayName = (section: AssessmentSection): string => {
    switch(section.id) {
      case 'wairua': return 'Spirit';
      case 'mauri': return 'Energy';
      case 'biological': return 'Body';
      case 'mind': return 'Mind';
      case 'reflective': return 'Awareness';
      case 'attachment': return 'Relations';
      default: return section.title;
    }
  };
  
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-wairua-light/30 to-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-light mb-6 text-gray-800">
              {assessmentData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {assessmentData.description}
            </p>
          </div>
        </div>
      </div>
      
      <WaveDivider color="#ffffff" />
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <>
                <div className="mb-8">
                  {/* Improved progress indicator */}
                  <div className="flex justify-between mb-2 px-2">
                    {sections.map((section, index) => (
                      <div 
                        key={section.id}
                        className={`text-xs font-medium text-center ${
                          index === currentSection ? 'text-wairua-dark' : 'text-gray-400'
                        }`}
                        style={{ width: `${100 / sections.length}%` }}
                      >
                        {getSectionDisplayName(section)}
                      </div>
                    ))}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-wairua-dark h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 italic">
                    {assessmentData.instructions}
                  </p>
                </div>
                
                {renderCurrentSection()}
              </>
            ) : (
              renderResults()
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
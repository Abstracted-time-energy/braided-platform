import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Import the whirlpool model data
import whirlpoolModel from '@/content/whirlpool/model.json';

export default function LearnPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Understanding the Whirlpool of Thrive
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            {whirlpoolModel.description}
          </p>
          
          <div className="space-y-8">
            {whirlpoolModel.layers.map((layer) => (
              <div key={layer.id}>
                <Card>
                <CardHeader className="text-white" style={{backgroundColor: layer.color}}>
                    <CardTitle className="text-white">{layer.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{layer.description}</p>
                    <div className="space-y-2">
                      <p className="font-medium">Reflection Questions:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {layer.prompts.map((prompt, i) => (
                          <li key={i}>{prompt}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/assessment">
              <Button size="lg">
                Begin Your Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
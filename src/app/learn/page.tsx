import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import InteractiveWhirlpool from '@/components/whirlpool/InteractiveWhirlpool';
import whirlpoolData from '@/content/whirlpool/model.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function LearnPage() {
  // Update the order property for layers after Genetics
  const updatedLayers = whirlpoolData.layers.map(layer => {
    // For the new Genetics layer (assuming it's already in the model.json)
    if (layer.id === 'genetics') {
      return {
        ...layer,
        order: 3, // Set order to 3 (after Energy)
      };
    }
    
    // For layers that should come after Genetics
    if (layer.id !== 'wairua' && layer.id !== 'mauri' && layer.id !== 'genetics') {
      return {
        ...layer,
        order: layer.order + 1, // Increment order for all other layers
      };
    }
    
    // Keep wairua and mauri layers as they are
    return layer;
  });

  const sortedLayers = [...updatedLayers].sort((a, b) => a.order - b.order);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {whirlpoolData.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            {whirlpoolData.description}
          </p>
          
          <div className="relative mb-16">
            <InteractiveWhirlpool />
          </div>
          
          <div className="grid gap-8 mb-16">
            <h2 className="text-3xl font-semibold mb-4">The Layers of Wellbeing</h2>
            
            {sortedLayers.map((layer) => (
              <Card key={layer.id} className="overflow-hidden">
                <div 
                  className="h-2" 
                  style={{ backgroundColor: layer.color }}
                ></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {/* Use dynamic icon rendering without lucide-react direct import */}
                    <span className={`text-${layer.id}-500`}>
                      {/* Icon will be handled by CSS classes */}
                    </span>
                    <CardTitle>{layer.name}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {layer.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Reflection Questions:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {layer.reflectionPrompts.map((prompt, i) => (
                      <li key={i}>{prompt}</li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Blockage Indications:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {layer.blockageIndications.map((indication, i) => (
                          <li key={i}>{indication}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Flow States:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {layer.flowStates.map((state, i) => (
                          <li key={i}>{state}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Key Concepts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(whirlpoolData.modelConcepts).map(([key, value]) => (
                <Card key={key}>
                  <CardHeader>
                    <CardTitle className="capitalize">{key}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
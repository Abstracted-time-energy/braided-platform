// components/whirlpool/AttachmentInteraction.tsx
"use client";  // Make sure this is at the very top of the file

import React, { useEffect, useRef, useState } from 'react';
import { attachmentScenarios, getAttachmentInteractionColor, attachmentStates } from '@/lib/attachment-whirlpools';
import { motion } from 'framer-motion';

interface AttachmentInteractionProps {
  scenarioId: string;
}

const AttachmentInteraction: React.FC<AttachmentInteractionProps> = ({ scenarioId }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  
  // Find the scenario based on ID
  const scenario = attachmentScenarios.find(s => s.id === scenarioId);
  
  if (!scenario) {
    return <div className="p-4 text-red-500">Scenario not found: {scenarioId}</div>;
  }
  
  const parentState = attachmentStates[scenario.parent];
  const childState = attachmentStates[scenario.child];
  const interactionColor = getAttachmentInteractionColor(scenario.parent, scenario.child, scenario.pattern);
  
  // Get pulse rate values
  const getAnimationSpeed = (pulseRate: string): number => {
    switch (pulseRate) {
      case 'slow': return 0.5;
      case 'medium': return 1;
      case 'rapid': return 1.5;
      case 'erratic': return Math.random() * 2 + 0.5; // Random between 0.5 and 2.5
      default: return 1;
    }
  };
  
  // Get reach values
  const getReachDistance = (reach: string): number => {
    switch (reach) {
      case 'short': return 0.2;
      case 'medium': return 0.4;
      case 'long': return 0.6;
      case 'far': return 0.8;
      case 'variable': return Math.random() * 0.6 + 0.2; // Random between 0.2 and 0.8
      default: return 0.4;
    }
  };
  
  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          setDimensions({ width, height });
        }
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    let time = 0;
    
    const draw = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Center points
      const parentX = canvas.width * 0.3;
      const parentY = canvas.height * 0.5;
      const childX = canvas.width * 0.7;
      const childY = canvas.height * 0.5;
      
      // Draw parent whirlpool
      drawWhirlpool(
        ctx, 
        parentX, 
        parentY, 
        parentState.color, 
        time * getAnimationSpeed(parentState.pulseRate), 
        getReachDistance(parentState.reach)
      );
      
      // Draw child whirlpool
      drawWhirlpool(
        ctx, 
        childX, 
        childY, 
        childState.color, 
        time * getAnimationSpeed(childState.pulseRate), 
        getReachDistance(childState.reach)
      );
      
      // Draw connection between whirlpools based on interaction pattern
      drawConnection(
        ctx, 
        parentX, 
        parentY, 
        childX, 
        childY, 
        interactionColor, 
        time, 
        scenario.pattern
      );
      
      // Add labels
      ctx.fillStyle = '#4B5563';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Caregiver', parentX, parentY - 60);
      ctx.fillText('Child', childX, childY - 60);
      
      // Add attachment symbols
      ctx.font = '24px sans-serif';
      ctx.fillText(parentState.symbol, parentX, parentY - 30);
      ctx.fillText(childState.symbol, childX, childY - 30);
      
      time += 0.02;
      animationRef.current = requestAnimationFrame(draw);
    };
    
    animationRef.current = requestAnimationFrame(draw);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, scenario, parentState, childState, interactionColor]);
  
  // Draw a whirlpool
  const drawWhirlpool = (
    ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    color: string, 
    time: number, 
    reachFactor: number
  ) => {
    const size = Math.min(dimensions.width, dimensions.height) * 0.2;
    
    // Draw base circle
    ctx.beginPath();
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.globalAlpha = 1;
    
    // Draw spiral arms
    const arms = 3;
    const maxRadius = size * reachFactor * 3;
    
    for (let arm = 0; arm < arms; arm++) {
      const armOffset = (Math.PI * 2 / arms) * arm + time;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      
      for (let r = 0; r < maxRadius; r += 2) {
        const angle = r * 0.05 + armOffset;
        const xPos = x + Math.cos(angle) * r;
        const yPos = y + Math.sin(angle) * r;
        
        ctx.lineTo(xPos, yPos);
      }
      
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  };
  
  // Draw connection between whirlpools
  const drawConnection = (
    ctx: CanvasRenderingContext2D, 
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    color: string, 
    time: number, 
    pattern: string
  ) => {
    ctx.beginPath();
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    switch (pattern) {
      case 'harmony':
        // Smooth wave
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(
          midX, y1 - Math.sin(time) * 30,
          midX, y2 + Math.sin(time) * 30,
          x2, y2
        );
        break;
      
      case 'creative':
        // Spiraling connection
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(
          midX + Math.sin(time * 2) * 40, midY - 40,
          midX - Math.sin(time * 2) * 40, midY + 40,
          x2, y2
        );
        break;
      
      case 'resonant':
        // Harmonious oscillation
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(
          x1 + distance * 0.2, y1 + Math.sin(time * 1.5) * 25,
          x2 - distance * 0.2, y2 + Math.sin(time * 1.5 + Math.PI) * 25,
          x2, y2
        );
        break;
      
      case 'dissonant':
        // Jagged, unpredictable connection
        ctx.moveTo(x1, y1);
        const segments = 5;
        for (let i = 1; i <= segments; i++) {
          const t = i / segments;
          const xPos = x1 + (x2 - x1) * t;
          const yPos = y1 + (y2 - y1) * t;
          const offset = Math.sin(time * 3 + i) * 20;
          ctx.lineTo(xPos, yPos + offset * (i % 2 ? 1 : -1));
        }
        break;
      
      case 'fearful':
        // Broken, hesitant connection
        ctx.moveTo(x1, y1);
        for (let i = 0; i < distance; i += 20) {
          const t = i / distance;
          const xPos = x1 + (x2 - x1) * t;
          const yPos = y1 + (y2 - y1) * t;
          
          if (i % 40 < 20) {
            ctx.lineTo(xPos, yPos);
          } else {
            ctx.moveTo(xPos, yPos);
          }
        }
        ctx.lineTo(x2, y2);
        break;
      
      case 'destructive':
        // Chaotic, disorganized connection
        ctx.moveTo(x1, y1);
        const chaoticPoints = 8;
        let lastX = x1;
        let lastY = y1;
        
        for (let i = 1; i <= chaoticPoints; i++) {
          const progress = i / (chaoticPoints + 1);
          const xBase = x1 + (x2 - x1) * progress;
          const yBase = y1 + (y2 - y1) * progress;
          
          // Add chaotic offsets
          const xOffset = Math.sin(time * 2 + i * 5) * 30;
          const yOffset = Math.cos(time * 3 + i * 7) * 30;
          
          const xPos = xBase + xOffset;
          const yPos = yBase + yOffset;
          
          ctx.lineTo(xPos, yPos);
          lastX = xPos;
          lastY = yPos;
        }
        
        ctx.lineTo(x2, y2);
        break;
      
      default:
        // Simple line
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    }
    
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.7;
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.globalAlpha = 1;
  };
  
  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={hovering ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-2 right-2 bg-white bg-opacity-90 p-2 rounded-md text-xs text-gray-600 max-w-[200px]"
      >
        <p>{scenario.insight}</p>
      </motion.div>
      
      <div className="mt-4">
        <h4 className="font-medium text-sm text-wairua-dark">{scenario.name}</h4>
        <p className="text-xs text-gray-600 mt-1">{scenario.description}</p>
      </div>
    </div>
  );
};

export default AttachmentInteraction;
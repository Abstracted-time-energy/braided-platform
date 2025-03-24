"use client";

// @/lib/attachment-whirlpools.ts
import { PatternId, blendColors } from '@/lib/emotionData';

// Define custom types for attachment patterns
export type PulseRate = 'slow' | 'medium' | 'rapid' | 'fast' | 'erratic';
export type EmotionalReach = 'short' | 'medium' | 'long' | 'far' | 'variable';

// Define attachment-specific types
export type AttachmentId = 'secure' | 'anxious' | 'avoidant' | 'disorganized' | 'healing';

// Attachment state interface
export interface AttachmentState {
  name: string;
  color: string;
  pulseRate: PulseRate;
  reach: EmotionalReach;
  description: string;
  symbol: string;
}

// Attachment interaction interface
export interface AttachmentScenario {
  id: string;
  name: string;
  parent: AttachmentId;
  child: AttachmentId;
  pattern: PatternId;
  description: string;
  insight: string;
}

// Define the attachment states
export const attachmentStates: Record<AttachmentId, AttachmentState> = {
  secure: {
    name: "Secure",
    color: "#8B5CF6", // Purple
    pulseRate: "medium",
    reach: "medium",
    description: "A balanced presence that provides safety and support for growth",
    symbol: "❤️"
  },
  anxious: {
    name: "Anxious/Preoccupied",
    color: "#10B981", // Emerald
    pulseRate: "rapid",
    reach: "far",
    description: "A heightened awareness of connection, seeking consistent responses",
    symbol: "⚠️"
  },
  avoidant: {
    name: "Avoidant/Dismissive",
    color: "#6B7280", // Gray
    pulseRate: "slow",
    reach: "short",
    description: "A protective stance that maintains emotional distance",
    symbol: "🔄"
  },
  disorganized: {
    name: "Disorganized/Fearful",
    color: "#EF4444", // Red
    pulseRate: "erratic",
    reach: "variable",
    description: "A complex pattern of seeking and fearing connection",
    symbol: "⚡"
  },
  healing: {
    name: "Healing",
    color: "#3B82F6", // Blue
    pulseRate: "medium",
    reach: "medium",
    description: "A growing capacity for secure connection through understanding",
    symbol: "✨"
  }
};

// Predefined attachment interaction scenarios
export const attachmentScenarios: AttachmentScenario[] = [
  {
    id: "secure-connection",
    name: "Secure Connection",
    parent: "secure",
    child: "secure",
    pattern: "harmony",
    description: "When one presence consistently offers warmth and understanding, it creates a foundation for growth and exploration. The other feels safe to explore while knowing they can return to this secure base.",
    insight: "The attuned presence creates a rhythmic dance of connection and exploration, allowing for the development of trust and confidence."
  },
  {
    id: "anxious-attachment",
    name: "Anxious/Preoccupied Pattern",
    parent: "avoidant",
    child: "anxious",
    pattern: "dissonant",
    description: "When responses are inconsistent, one may develop heightened awareness of connection, seeking reassurance through intensified emotional signals.",
    insight: "The heightened awareness of potential disconnection leads to intensified emotional responses, as trust in consistent support remains uncertain."
  },
  {
    id: "avoidant-attachment",
    name: "Avoidant/Dismissive Pattern",
    parent: "avoidant",
    child: "avoidant",
    pattern: "fearful",
    description: "When emotional needs aren't consistently met, one may learn to maintain distance and develop self-reliance as a protective strategy.",
    insight: "The protective stance of emotional distance may appear as independence, while masking underlying needs for connection."
  },
  {
    id: "disorganized-attachment",
    name: "Disorganized/Fearful Pattern",
    parent: "disorganized",
    child: "disorganized",
    pattern: "destructive",
    description: "When connection feels both needed and frightening, it creates conflicting impulses to approach and withdraw.",
    insight: "The presence of both longing and fear creates a complex dance of seeking and avoiding connection."
  },
  {
    id: "healing-attachment",
    name: "Growing Through Connection",
    parent: "secure",
    child: "healing",
    pattern: "resonant",
    description: "Through understanding and supportive relationships, one can develop new patterns of connection, regardless of earlier experiences.",
    insight: "Consistent attunement helps regulate emotional states and gradually reshape patterns of connection, allowing for new ways of relating to emerge."
  }
];

// Helper function to get an appropriate symbol for each attachment style
export function getAttachmentSymbol(attachment: AttachmentId): string {
  return attachmentStates[attachment]?.symbol || "•";
}

// Helper function to get interaction color
export const getAttachmentInteractionColor = (parent: AttachmentId, child: AttachmentId, pattern: PatternId): string => {
  const parentColor = attachmentStates[parent]?.color || "#888888";
  const childColor = attachmentStates[child]?.color || "#888888";
  
  // Similar to emotionData.ts
  switch (pattern) {
    case "harmony":
      return blendColors(parentColor, childColor, 0.5);
    case "creative":
      return blendColors(parentColor, childColor, 0.7);
    case "resonant":
      return blendColors(parentColor, childColor, 0.6);
    case "dissonant":
      return childColor; // Child's emotional color dominates in anxious attachment
    case "fearful":
      return parentColor; // Parent's emotional color dominates in avoidant attachment 
    case "destructive":
      return blendColors(parentColor, "#000000", 0.3); // Darker blend for disorganized
    default:
      return blendColors(parentColor, childColor, 0.5);
  }
};
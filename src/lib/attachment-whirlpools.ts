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
    description: "Consistent, responsive caregiving that provides a secure base for exploration",
    symbol: "❤️"
  },
  anxious: {
    name: "Anxious/Preoccupied",
    color: "#10B981", // Emerald
    pulseRate: "rapid",
    reach: "far",
    description: "Amplified attachment behaviors seeking inconsistent responses from caregivers",
    symbol: "⚠️"
  },
  avoidant: {
    name: "Avoidant/Dismissive",
    color: "#6B7280", // Gray
    pulseRate: "slow",
    reach: "short",
    description: "Suppressed attachment needs in response to emotionally unavailable caregiving",
    symbol: "🔄"
  },
  disorganized: {
    name: "Disorganized/Fearful",
    color: "#EF4444", // Red
    pulseRate: "erratic",
    reach: "variable",
    description: "Conflicting approach/avoid patterns due to frightening or unpredictable caregiving",
    symbol: "⚡"
  },
  healing: {
    name: "Healing",
    color: "#3B82F6", // Blue
    pulseRate: "medium",
    reach: "medium",
    description: "Developing earned security through therapeutic relationships and self-understanding",
    symbol: "✨"
  }
};

// Predefined attachment interaction scenarios
export const attachmentScenarios: AttachmentScenario[] = [
  {
    id: "secure-parent-child",
    name: "Secure Attachment",
    parent: "secure",
    child: "secure",
    pattern: "harmony",
    description: "When a caregiver consistently responds with sensitivity and warmth, their child develops a secure attachment style. The child feels safe to explore while knowing they can return to their secure base.",
    insight: "The caregiver's attunement to the child's needs creates a rhythmic dance of connection and exploration, allowing the child to develop confidence and trust."
  },
  {
    id: "anxious-attachment",
    name: "Anxious/Preoccupied Attachment",
    parent: "avoidant", // Emotionally inconsistent parent
    child: "anxious",
    pattern: "dissonant",
    description: "When caregiving is inconsistent or unpredictable, children may develop an anxious attachment style with heightened emotional signals to maintain connection.",
    insight: "The child's hypervigilance to potential abandonment leads to intensified emotional responses, as they never learn to trust that their needs will be consistently met."
  },
  {
    id: "avoidant-attachment",
    name: "Avoidant/Dismissive Attachment",
    parent: "avoidant",
    child: "avoidant",
    pattern: "fearful",
    description: "When caregivers are consistently emotionally unavailable, children learn to suppress their attachment needs and develop excessive self-reliance.",
    insight: "The child learns that emotional needs won't be addressed, creating a pattern of emotional suppression that appears as independence but masks underlying vulnerability."
  },
  {
    id: "disorganized-attachment",
    name: "Disorganized/Fearful Attachment",
    parent: "disorganized",
    child: "disorganized",
    pattern: "destructive",
    description: "When caregivers are frightening or frightened themselves, children develop conflicting impulses to both approach and avoid connection.",
    insight: "The child faces an unresolvable dilemma: the person they need for safety is also a source of fear, creating chaotic, unpredictable patterns of connection."
  },
  {
    id: "healing-attachment",
    name: "Healing Attachment",
    parent: "secure",
    child: "healing",
    pattern: "resonant",
    description: "Through therapeutic relationships and self-understanding, individuals can develop 'earned security' despite insecure beginnings.",
    insight: "Consistent attunement from a secure figure helps regulate emotional states and gradually reshape internal working models, allowing new patterns of connection to emerge."
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
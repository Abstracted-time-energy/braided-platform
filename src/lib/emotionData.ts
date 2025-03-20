// lib/emotionData.ts
// Shared data file for emotion definitions and interaction scenarios

// Type definitions
export type EmotionId = 'seeking' | 'care' | 'play' | 'fear' | 'rage' | 'grief' | 'lust';
export type PatternId = 'harmony' | 'creative' | 'resonant' | 'dissonant' | 'fearful' | 'destructive';
export type PulseRate = 'rapid' | 'fast' | 'medium' | 'slow';
export type EmotionalReach = 'far' | 'medium' | 'short';
export type AnimationStyle = 'smooth' | 'playful' | 'pulsing' | 'jarring' | 'retreating' | 'chaotic';
export type FlowDirection = 'leftToRight' | 'rightToLeft' | 'bidirectional' | 'chaotic';
export type RegulationSystem = 'Threat System' | 'Drive System' | 'Soothing System';

// Emotion state interface
export interface EmotionalState {
  name: string;
  color: string;
  pulseRate: PulseRate;
  reach: EmotionalReach;
  description: string;
  system: RegulationSystem;
}

// Interaction pattern interface
export interface InteractionPattern {
  name: string;
  description: string;
  blendMode: string;
  animationStyle: AnimationStyle;
}

// Interaction scenario interface
export interface InteractionScenario {
  id: string;
  name: string;
  emotion1: EmotionId;
  emotion2: EmotionId;
  pattern: PatternId;
  description: string;
  mentalizationInsight: string;
}

// Define the emotional states with meaningful properties
export const emotionalStates: Record<EmotionId, EmotionalState> = {
  seeking: {
    name: "SEEKING / Curiosity",
    color: "#F59E0B", // Amber
    pulseRate: "medium", // How quickly the emotion pulses/changes
    reach: "far", // How far the emotional influence extends
    description: "Motivated exploration, anticipation, and desire for resources and possibilities",
    system: "Drive System"
  },
  care: {
    name: "CARE / Compassion",
    color: "#8B5CF6", // Purple
    pulseRate: "slow",
    reach: "medium",
    description: "Nurturing, empathic state focused on the wellbeing and needs of others",
    system: "Soothing System"
  },
  play: {
    name: "PLAY / Joy",
    color: "#3B82F6", // Blue
    pulseRate: "fast",
    reach: "medium",
    description: "Joyful, social engagement that fosters bonding, learning, and creativity",
    system: "Soothing System"
  },
  fear: {
    name: "FEAR / Anxiety",
    color: "#10B981", // Emerald
    pulseRate: "rapid",
    reach: "short",
    description: "Defensive state focused on detecting and avoiding potential threats",
    system: "Threat System"
  },
  rage: {
    name: "RAGE / Anger",
    color: "#EF4444", // Red
    pulseRate: "rapid",
    reach: "medium",
    description: "Frustrated, irritated state activated when goals are blocked or boundaries violated",
    system: "Threat System"
  },
  grief: {
    name: "GRIEF / Distress",
    color: "#6B7280", // Gray
    pulseRate: "slow",
    reach: "short",
    description: "Disconnected, sorrowful state related to separation, loss, or abandonment",
    system: "Threat System"
  },
  lust: {
    name: "LUST / Desire",
    color: "#EC4899", // Pink
    pulseRate: "medium",
    reach: "short",
    description: "Sexual desire and attraction that motivates reproductive and intimate behavior",
    system: "Drive System"
  }
};

// Define interaction patterns with meaningful properties
export const interactionPatterns: Record<PatternId, InteractionPattern> = {
  harmony: {
    name: "Harmony",
    description: "Emotions resonate and amplify each other positively",
    blendMode: "multiply", // How colors blend
    animationStyle: "smooth" // The nature of the animation
  },
  creative: {
    name: "Creative Connection",
    description: "Emotions inspire and stimulate each other",
    blendMode: "screen",
    animationStyle: "playful"
  },
  resonant: {
    name: "Resonance",
    description: "Emotions align and reinforce each other",
    blendMode: "overlay",
    animationStyle: "pulsing"
  },
  dissonant: {
    name: "Dissonance",
    description: "Emotions create tension and miscommunication",
    blendMode: "difference",
    animationStyle: "jarring"
  },
  fearful: {
    name: "Fearful Response",
    description: "One emotion retreats from the other's intensity",
    blendMode: "color-burn",
    animationStyle: "retreating"
  },
  destructive: {
    name: "Destructive Clash",
    description: "Emotions intensify each other negatively",
    blendMode: "hard-light",
    animationStyle: "chaotic"
  }
};

// Predefined interaction scenarios
export const interactionScenarios: InteractionScenario[] = [
  {
    id: "rage-care",
    name: "Anger Meets Compassion",
    emotion1: "rage",
    emotion2: "care",
    pattern: "resonant",
    description: "When RAGE meets CARE, the soothing presence can help regulate and transform defensive anger.",
    mentalizationInsight: "The caring person sees beyond the anger to the hurt beneath, responding to the underlying vulnerability rather than the defensive display."
  },
  {
    id: "mutual-care",
    name: "Compassionate Connection",
    emotion1: "care",
    emotion2: "care",
    pattern: "harmony",
    description: "When both people are in caring, compassionate states, they create a resonant, nurturing environment that enhances well-being for both.",
    mentalizationInsight: "Both individuals are attuned to each other's emotional needs, creating a secure, supportive connection."
  },
  {
    id: "playful-learning",
    name: "Playful Exploration",
    emotion1: "play",
    emotion2: "seeking",
    pattern: "creative",
    description: "PLAY and SEEKING systems working together create an optimal state for learning, creativity and growth.",
    mentalizationInsight: "Each person recognizes and supports the other's joy in exploration, creating a safe space for discovery."
  },
  {
    id: "threat-defense",
    name: "Conflict Escalation",
    emotion1: "rage",
    emotion2: "fear", 
    pattern: "destructive",
    description: "When RAGE meets FEAR, defensive reactions amplify each other, creating a rapidly escalating cycle of attack and defense.",
    mentalizationInsight: "Neither person can recognize the vulnerable emotions beneath the defensive behaviors, intensifying the threat response."
  },
  {
    id: "grief-care",
    name: "Compassionate Support",
    emotion1: "grief",
    emotion2: "care",
    pattern: "resonant",
    description: "When CARE meets GRIEF, the soothing presence can help regulate the distress of separation or loss.",
    mentalizationInsight: "The caring person recognizes and validates the grief experience, offering presence without trying to 'fix' the pain."
  },
  {
    id: "drive-dismissal",
    name: "Misaligned Connection",
    emotion1: "seeking",
    emotion2: "play",
    pattern: "dissonant",
    description: "When SEEKING encounters PLAY, but with different goals, one person's enthusiasm may seem dismissive of the other's needs.",
    mentalizationInsight: "Each person misinterprets the other's state, assuming shared goals when they actually have different intentions."
  },
  {
    id: "intimacy-mismatch",
    name: "Intimacy Mismatch",
    emotion1: "lust",
    emotion2: "fear",
    pattern: "dissonant",
    description: "When LUST meets FEAR, one person's approach activates the other's threat system, creating disconnection.",
    mentalizationInsight: "A failure to recognize and respect the other's boundaries and emotional state leads to misattunement and distress."
  }
];

// Helper function to get an appropriate symbol for each emotion
export function getEmotionSymbol(emotion: EmotionId): string {
  switch(emotion) {
    case "seeking":
      return "🔍";
    case "care":
      return "❤️";
    case "play":
      return "✨";
    case "fear":
      return "⚠️";
    case "rage":
      return "🔥";
    case "grief":
      return "💧";
    case "lust":
      return "✨";
    default:
      return "•";
  }
}

// Function to blend two hex colors
export const blendColors = (color1: string, color2: string, ratio: number): string => {
  // Convert hex to RGB
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');
  
  // Parse the hex values
  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);
  
  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);
  
  // Blend the colors
  const r = Math.round(r1 * ratio + r2 * (1 - ratio));
  const g = Math.round(g1 * ratio + g2 * (1 - ratio));
  const b = Math.round(b1 * ratio + b2 * (1 - ratio));
  
  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Helper functions for interactions

// Helper function to get interaction color
export const getInteractionColor = (emotion1: EmotionId, emotion2: EmotionId, pattern: PatternId): string => {
  const baseColor1 = emotionalStates[emotion1]?.color || "#888888";
  const baseColor2 = emotionalStates[emotion2]?.color || "#888888";
  
  // Simple color blending based on pattern
  switch (pattern) {
    case "harmony":
      return blendColors(baseColor1, baseColor2, 0.5);
    case "creative":
      return blendColors(baseColor1, baseColor2, 0.7);
    case "resonant":
      return blendColors(baseColor1, baseColor2, 0.6);
    case "dissonant":
      // For dissonant, use the more dominant color
      return baseColor1 === "#EF4444" || baseColor1 === "#10B981" ? baseColor1 : baseColor2;
    case "fearful":
      return baseColor2; // The response color dominates
    case "destructive":
      // Create a harsh blend for destructive
      return blendColors(baseColor1, "#000000", 0.3);
    default:
      return blendColors(baseColor1, baseColor2, 0.5);
  }
};

// Simplified objects for the InteractPage if needed
export const emotionColors: Record<EmotionId, string> = {
  seeking: "#F59E0B",
  care: "#8B5CF6",
  play: "#3B82F6",
  fear: "#10B981",
  rage: "#EF4444",
  grief: "#6B7280",
  lust: "#EC4899"
};

export const emotionDetails: Record<EmotionId, {name: string, description: string}> = {
  seeking: {
    name: emotionalStates.seeking.name,
    description: emotionalStates.seeking.description
  },
  care: {
    name: emotionalStates.care.name,
    description: emotionalStates.care.description
  },
  play: {
    name: emotionalStates.play.name,
    description: emotionalStates.play.description
  },
  fear: {
    name: emotionalStates.fear.name,
    description: emotionalStates.fear.description
  },
  rage: {
    name: emotionalStates.rage.name,
    description: emotionalStates.rage.description
  },
  grief: {
    name: emotionalStates.grief.name,
    description: emotionalStates.grief.description
  },
  lust: {
    name: emotionalStates.lust.name,
    description: emotionalStates.lust.description
  }
};
import { WhirlpoolState, WhirlpoolLayer, EnergyLevel, InteractionType } from '@/types/whirlpool';
import whirlpoolModel from '@/content/whirlpool/model.json';

// Find layer by ID from the model
export const getLayerById = (id: WhirlpoolLayer) => {
  return whirlpoolModel.layers.find(layer => layer.id === id);
};

// Generate default whirlpool data
export const generateWhirlpoolData = (preset: 'default' | 'balanced' | 'high' | 'low' | 'erratic'): WhirlpoolState => {
  switch (preset) {
    case 'balanced':
      return {
        energyLevel: 'balanced',
        dominantLayer: 'wairua',
        blockages: []
      };
    case 'high':
      return {
        energyLevel: 'high',
        dominantLayer: 'mind',
        blockages: []
      };
    case 'low':
      return {
        energyLevel: 'low',
        dominantLayer: 'body',
        blockages: ['mauri']
      };
    case 'erratic':
      return {
        energyLevel: 'erratic',
        dominantLayer: 'nervous',
        blockages: ['mind', 'relationship']
      };
    default:
      return {
        energyLevel: 'balanced',
        dominantLayer: 'mauri',
        blockages: []
      };
  }
};

// Get color for a specific layer
export const getLayerColor = (
  layerId: WhirlpoolLayer,
  energyLevel: EnergyLevel,
  isCenter: boolean
): string => {
  const layer = getLayerById(layerId);
  if (!layer) return '#cccccc';
  
  // Use base color from model
  const baseColor = layer.color;
  
  // Adjust color based on energy level
  switch (energyLevel) {
    case 'balanced':
      return baseColor;
    case 'high':
      return isCenter ? layer.colorLight : baseColor;
    case 'low':
      return isCenter ? layer.colorDark : baseColor;
    case 'erratic':
      return isCenter ? layer.colorLight : baseColor;
    default:
      return baseColor;
  }
};

// Get layer information
export const getLayerLabel = (layer: WhirlpoolLayer): string => {
  const layerData = getLayerById(layer);
  return layerData?.name || layer;
};

export const getLayerDescription = (layer: WhirlpoolLayer): string => {
  const layerData = getLayerById(layer);
  return layerData?.description || '';
};

// Get flow pattern based on energy level
export const getFlowPattern = (energyLevel: EnergyLevel): string => {
  switch (energyLevel) {
    case 'balanced':
      return 'balanced';
    case 'high':
      return 'high';
    case 'low':
      return 'low';
    case 'erratic':
      return 'erratic';
    default:
      return 'balanced';
  }
};

// Calculate interaction effects between two whirlpools
export const getInteractionEffects = (
  whirlpool1: WhirlpoolState, 
  whirlpool2: WhirlpoolState,
  strength: number
): {
  type: InteractionType;
  intensity: number;
  range: number;
  w1RotationSpeed: number;
  w2RotationSpeed: number;
  w1Scale: number;
  w2Scale: number;
} => {
  // Determine interaction type based on whirlpool states
  let type: InteractionType = 'neutral';
  
  // Both balanced - harmony
  if (whirlpool1.energyLevel === 'balanced' && whirlpool2.energyLevel === 'balanced') {
    type = 'harmony';
  }
  // Both high energy and same layer - resonant
  else if (
    whirlpool1.energyLevel === 'high' && 
    whirlpool2.energyLevel === 'high' &&
    whirlpool1.dominantLayer === whirlpool2.dominantLayer
  ) {
    type = 'resonant';
  }
  // Both high energy but different layers - creative
  else if (
    whirlpool1.energyLevel === 'high' && 
    whirlpool2.energyLevel === 'high' &&
    whirlpool1.dominantLayer !== whirlpool2.dominantLayer
  ) {
    type = 'creative';
  }
  // One erratic and one low - fearful
  else if (
    (whirlpool1.energyLevel === 'erratic' && whirlpool2.energyLevel === 'low') ||
    (whirlpool1.energyLevel === 'low' && whirlpool2.energyLevel === 'erratic')
  ) {
    type = 'fearful';
  }
  // Both erratic - destructive
  else if (whirlpool1.energyLevel === 'erratic' && whirlpool2.energyLevel === 'erratic') {
    type = 'destructive';
  }
  // Opposing energies - dissonant
  else if (
    (whirlpool1.energyLevel === 'high' && whirlpool2.energyLevel === 'low') ||
    (whirlpool1.energyLevel === 'low' && whirlpool2.energyLevel === 'high')
  ) {
    type = 'dissonant';
  }
  
  // Calculate rotation speeds based on energy levels
  const getRotationSpeed = (energyLevel: EnergyLevel): number => {
    switch(energyLevel) {
      case 'high': return 360;
      case 'low': return 90;
      case 'erratic': return Math.random() > 0.5 ? 180 : 540;
      default: return 180; // balanced
    }
  };
  
  const isHarmonious = type === 'harmony' || type === 'resonant' || type === 'creative';
  
  // Calculate scaling based on interaction
  const getScale = (energyLevel: EnergyLevel): number => {
    if (type === 'destructive') return 0.9;
    if (type === 'fearful' && energyLevel === 'low') return 0.8;
    if (type === 'dissonant') return 0.95;
    if (type === 'resonant') return 1.1;
    if (type === 'creative') return 1.05;
    if (type === 'harmony') return 1.03;
    
    return 1;
  };
  
  return {
    type,
    intensity: strength * (type === 'destructive' ? 1.2 : 
                         type === 'fearful' ? 1.1 : 
                         type === 'resonant' ? 1.0 : 0.8),
    range: strength * (type === 'resonant' ? 1.2 : 
                     type === 'creative' ? 1.1 : 
                     type === 'harmony' ? 1.0 : 0.8),
    w1RotationSpeed: getRotationSpeed(whirlpool1.energyLevel),
    w2RotationSpeed: getRotationSpeed(whirlpool2.energyLevel),
    w1Scale: getScale(whirlpool1.energyLevel),
    w2Scale: getScale(whirlpool2.energyLevel)
  };
};

// Define color schemas for each emotional system
const emotionalColors = {
  seeking: {
    primary: "#F59E0B", // Amber
    light: "#FEF3C7",
    dark: "#B45309"
  },
  care: {
    primary: "#8B5CF6", // Purple
    light: "#EDE9FE",
    dark: "#6D28D9"
  },
  play: {
    primary: "#3B82F6", // Blue
    light: "#DBEAFE",
    dark: "#1D4ED8"
  },
  fear: {
    primary: "#10B981", // Emerald
    light: "#D1FAE5",
    dark: "#065F46"
  },
  rage: {
    primary: "#EF4444", // Red
    light: "#FEE2E2",
    dark: "#B91C1C"
  },
  grief: {
    primary: "#6B7280", // Gray
    light: "#F3F4F6",
    dark: "#374151"
  },
  lust: {
    primary: "#EC4899", // Pink
    light: "#FCE7F3",
    dark: "#BE185D"
  }
};

// Define emotional states based on all 7 of Panksepp's affective systems
const emotionalStates = [
  {
    id: "seeking",
    name: "SEEKING / Curiosity",
    description: "Motivated exploration, anticipation, and desire for resources and possibilities",
    whirlpoolState: {
      energyLevel: "high" as EnergyLevel,
      dominantLayer: "mind" as WhirlpoolLayer,
      blockages: [] as WhirlpoolLayer[],
      colorSchema: emotionalColors.seeking
    },
    system: "Drive System",
    reflectiveFunction: "What am I looking for? What do I need right now?"
  },
  {
    id: "care",
    name: "CARE / Compassion",
    description: "Nurturing, empathic state focused on the wellbeing and needs of others",
    whirlpoolState: {
      energyLevel: "balanced" as EnergyLevel,
      dominantLayer: "wairua" as WhirlpoolLayer,
      blockages: [] as WhirlpoolLayer[],
      colorSchema: emotionalColors.care
    },
    system: "Soothing System",
    reflectiveFunction: "How can I be supportive? What does this person need from me?"
  },
  {
    id: "play",
    name: "PLAY / Joy",
    description: "Joyful, social engagement that fosters bonding, learning, and creativity",
    whirlpoolState: {
      energyLevel: "high" as EnergyLevel,
      dominantLayer: "relationship" as WhirlpoolLayer,
      blockages: [] as WhirlpoolLayer[],
      colorSchema: emotionalColors.play
    },
    system: "Soothing System",
    reflectiveFunction: "How can we enjoy this moment together? What feels light and fun here?"
  },
  {
    id: "fear",
    name: "FEAR / Anxiety",
    description: "Defensive state focused on detecting and avoiding potential threats",
    whirlpoolState: {
      energyLevel: "erratic" as EnergyLevel,
      dominantLayer: "nervous" as WhirlpoolLayer,
      blockages: ["mind"] as WhirlpoolLayer[],
      colorSchema: emotionalColors.fear
    },
    system: "Threat System",
    reflectiveFunction: "Am I truly in danger, or is this my threat system overreacting?"
  },
  {
    id: "rage",
    name: "RAGE / Anger",
    description: "Frustrated, irritated state activated when goals are blocked or boundaries violated",
    whirlpoolState: {
      energyLevel: "high" as EnergyLevel,
      dominantLayer: "nervous" as WhirlpoolLayer,
      blockages: ["mind", "relationship"] as WhirlpoolLayer[],
      colorSchema: emotionalColors.rage
    },
    system: "Threat System",
    reflectiveFunction: "What's being threatened here? What boundary needs protection?"
  },
  {
    id: "grief",
    name: "PANIC/GRIEF / Distress",
    description: "Disconnected, sorrowful state related to separation, loss, or abandonment",
    whirlpoolState: {
      energyLevel: "low" as EnergyLevel,
      dominantLayer: "relationship" as WhirlpoolLayer,
      blockages: ["mauri", "community"] as WhirlpoolLayer[],
      colorSchema: emotionalColors.grief
    },
    system: "Threat System",
    reflectiveFunction: "What connection am I missing? How can I find comfort in this separation?"
  },
  {
    id: "lust",
    name: "LUST / Desire",
    description: "Sexual desire and attraction that motivates reproductive and intimate behavior",
    whirlpoolState: {
      energyLevel: "high" as EnergyLevel,
      dominantLayer: "body" as WhirlpoolLayer,
      blockages: [] as WhirlpoolLayer[],
      colorSchema: emotionalColors.lust
    },
    system: "Drive System",
    reflectiveFunction: "Is this desire appropriate for this relationship? What healthy expression is possible?"
  }
];

// Define meaningful interaction pairs
const interactionPairs = [
  {
    id: "rage-care",
    name: "Anger Meets Compassion",
    description: "When RAGE meets CARE, the soothing presence can help regulate and transform defensive anger.",
    state1: "rage",
    state2: "care",
    interactionType: "resonant" as InteractionType,
    mentalizationInsight: "The caring person sees beyond the anger to the hurt beneath, responding to the underlying vulnerability rather than the defensive display."
  },
  {
    id: "mutual-care",
    name: "Compassionate Connection",
    description: "When both people are in caring, compassionate states, they create a resonant, nurturing environment that enhances well-being for both.",
    state1: "care",
    state2: "care",
    interactionType: "harmony" as InteractionType,
    mentalizationInsight: "Both individuals are attuned to each other's emotional needs, creating a secure, supportive connection."
  },
  {
    id: "playful-learning",
    name: "Playful Exploration",
    description: "PLAY and SEEKING systems working together create an optimal state for learning, creativity and growth.",
    state1: "play",
    state2: "seeking",
    interactionType: "creative" as InteractionType,
    mentalizationInsight: "Each person recognizes and supports the other's joy in exploration, creating a safe space for discovery."
  },
  {
    id: "threat-defense",
    name: "Conflict Escalation",
    description: "When RAGE meets FEAR, defensive reactions amplify each other, creating a rapidly escalating cycle of attack and defense.",
    state1: "rage",
    state2: "fear", 
    interactionType: "destructive" as InteractionType,
    mentalizationInsight: "Neither person can recognize the vulnerable emotions beneath the defensive behaviors, intensifying the threat response."
  },
  {
    id: "grief-care",
    name: "Compassionate Support",
    description: "When CARE meets GRIEF, the soothing presence can help regulate the distress of separation or loss.",
    state1: "grief",
    state2: "care",
    interactionType: "resonant" as InteractionType,
    mentalizationInsight: "The caring person recognizes and validates the grief experience, offering presence without trying to 'fix' the pain."
  },
  {
    id: "drive-dismissal",
    name: "Misaligned Connection",
    description: "When SEEKING encounters PLAY, but with different goals, one person's enthusiasm may seem dismissive of the other's needs.",
    state1: "seeking",
    state2: "play",
    interactionType: "dissonant" as InteractionType,
    mentalizationInsight: "Each person misinterprets the other's state, assuming shared goals when they actually have different intentions."
  },
  {
    id: "intimacy-mismatch",
    name: "Intimacy Mismatch",
    description: "When LUST meets FEAR, one person's approach activates the other's threat system, creating disconnection.",
    state1: "lust",
    state2: "fear",
    interactionType: "dissonant" as InteractionType,
    mentalizationInsight: "A failure to recognize and respect the other's boundaries and emotional state leads to misattunement and distress."
  }
];

// Helper function to get specific emotional states based on interaction
const getEmotionalStatesForInteraction = (interactionId: string) => {
  const interaction = interactionPairs.find(pair => pair.id === interactionId);
  if (!interaction) return null;
  
  const state1 = emotionalStates.find(state => state.id === interaction.state1);
  const state2 = emotionalStates.find(state => state.id === interaction.state2);
  
  return {
    interaction,
    state1,
    state2
  };
};

// Helper function to blend two hex colors for interaction effects
const blendColors = (color1: string, color2: string, percentage: number) => {
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
  const r = Math.round(r1 * (1 - percentage) + r2 * percentage);
  const g = Math.round(g1 * (1 - percentage) + g2 * percentage);
  const b = Math.round(b1 * (1 - percentage) + b2 * percentage);
  
  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Export all the new constants and functions together
export {
  emotionalColors,
  emotionalStates,
  interactionPairs,
  getEmotionalStatesForInteraction,
  blendColors
};
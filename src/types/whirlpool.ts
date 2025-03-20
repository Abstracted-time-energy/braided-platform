export type WhirlpoolLayer = 
  | 'wairua'
  | 'mauri'
  | 'mind'
  | 'nervous'
  | 'body'
  | 'relationship'
  | 'community'
  | 'environment';

export type EnergyLevel = 
  | 'balanced'
  | 'high'
  | 'low'
  | 'erratic';

export type InteractionType = 
  | 'harmony'
  | 'resonant'
  | 'creative'
  | 'dissonant'
  | 'fearful'
  | 'destructive'
  | 'neutral';

export interface ColorSchema {
  primary: string;
  light: string;
  dark: string;
}

export interface WhirlpoolState {
  energyLevel: EnergyLevel;
  dominantLayer: WhirlpoolLayer;
  blockages?: WhirlpoolLayer[];
  colorSchema?: ColorSchema;
}
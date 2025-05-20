export interface IAnalysisResult {
  aiProbability: number;
  confidence: number;
  features: {
    repetitivePatterns: number;
    complexityScore: number;
    naturalityScore: number;
  };
} 
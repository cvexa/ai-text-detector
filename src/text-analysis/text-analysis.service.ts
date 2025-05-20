import { Injectable } from '@nestjs/common';
import { IAnalysisResult } from './interfaces/analysis-result.interface';

@Injectable()
export class TextAnalysisService {
  /**
   * Analyzes the given text to determine the probability of it being AI-generated
   * @param text - The text to analyze
   * @returns Analysis result with AI probability and confidence scores
   */
  public async analyzeText(text: string): Promise<IAnalysisResult> {
    const features = this.extractFeatures(text);
    const aiProbability = this.calculateAIProbability(features);
    
    return {
      aiProbability,
      confidence: this.calculateConfidence(text),
      features,
    };
  }

  private extractFeatures(text: string): IAnalysisResult['features'] {
    return {
      repetitivePatterns: this.calculateRepetitivePatterns(text),
      complexityScore: this.calculateComplexityScore(text),
      naturalityScore: this.calculateNaturalityScore(text),
    };
  }

  private calculateRepetitivePatterns(text: string): number {
    // Implement pattern detection logic
    // This is a simplified version - should be enhanced with more sophisticated analysis
    const words = text.toLowerCase().split(/\s+/);
    const wordFrequency = new Map<string, number>();
    
    words.forEach(word => {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });

    const repetitionScore = Array.from(wordFrequency.values())
      .filter(count => count > 1)
      .reduce((acc, count) => acc + (count - 1), 0) / words.length;

    return Math.min(repetitionScore, 1);
  }

  private calculateComplexityScore(text: string): number {
    // Implement text complexity analysis
    // This is a simplified version - should be enhanced with more sophisticated analysis
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const avgSentenceLength = text.length / sentences.length;
    const normalizedScore = Math.min(avgSentenceLength / 100, 1);
    
    return normalizedScore;
  }

  private calculateNaturalityScore(text: string): number {
    // Implement natural language patterns analysis
    // This is a simplified version - should be enhanced with more sophisticated analysis
    const punctuationVariety = new Set(text.match(/[.,!?;:]/g) || []).size;
    const normalizedScore = Math.min(punctuationVariety / 5, 1);
    
    return normalizedScore;
  }

  private calculateAIProbability(features: IAnalysisResult['features']): number {
    // Combine different features to calculate final probability
    // This is a simplified version - should be enhanced with machine learning models
    const weights = {
      repetitivePatterns: 0.4,
      complexityScore: 0.3,
      naturalityScore: 0.3,
    };

    const score = (
      features.repetitivePatterns * weights.repetitivePatterns +
      features.complexityScore * weights.complexityScore +
      (1 - features.naturalityScore) * weights.naturalityScore
    );

    return Math.min(Math.max(score, 0), 1);
  }

  private calculateConfidence(text: string): number {
    // Calculate confidence based on text length and other factors
    // This is a simplified version - should be enhanced with more sophisticated analysis
    const textLength = text.length;
    const minLength = 50;
    const optimalLength = 500;
    
    if (textLength < minLength) {
      return 0.3;
    }
    
    return Math.min(textLength / optimalLength, 1);
  }
} 
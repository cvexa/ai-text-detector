import { Controller, Post, Body } from '@nestjs/common';
import { TextAnalysisService } from './text-analysis.service';
import { AnalyzeTextDto } from './dto/analyze-text.dto';
import { IAnalysisResult } from './interfaces/analysis-result.interface';

@Controller('text-analysis')
export class TextAnalysisController {
  public constructor(
    private readonly textAnalysisService: TextAnalysisService,
  ) {}

  /**
   * Analyzes the provided text for AI-generated content
   * @param analyzeTextDto - The text to analyze
   * @returns Analysis result with AI probability and confidence scores
   */
  @Post('analyze')
  public async analyzeText(
    @Body() analyzeTextDto: AnalyzeTextDto,
  ): Promise<IAnalysisResult> {
    return this.textAnalysisService.analyzeText(analyzeTextDto.text);
  }
} 
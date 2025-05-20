import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class AnalyzeTextDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10000, { message: 'Text must not exceed 10000 characters' })
  readonly text: string;
} 
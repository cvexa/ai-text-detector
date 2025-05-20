import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TextAnalysisModule } from './text-analysis/text-analysis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TextAnalysisModule,
  ],
})
export class AppModule {} 
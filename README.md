# AI Text Detector API

A NestJS-based API that analyzes text to determine the probability of it being AI-generated.

## Features

- Text analysis for AI-generated content detection
- Probability score with confidence rating
- Multiple analysis features:
  - Repetitive patterns detection
  - Text complexity analysis
  - Natural language patterns analysis

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## API Usage

### Analyze Text

```http
POST /text-analysis/analyze
Content-Type: application/json

{
  "text": "Your text to analyze here"
}
```

#### Response

```json
{
  "aiProbability": 0.75,
  "confidence": 0.85,
  "features": {
    "repetitivePatterns": 0.6,
    "complexityScore": 0.8,
    "naturalityScore": 0.7
  }
}
```

- `aiProbability`: Number between 0 and 1 indicating the likelihood of AI-generated text (higher = more likely AI-generated)
- `confidence`: Confidence level of the analysis (higher = more confident)
- `features`: Detailed scores for different analysis aspects

## Testing

```bash
# unit tests
npm run test

# test coverage
npm run test:cov
``` 
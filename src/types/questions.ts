export interface Answer {
  id: number;
  content: string;
  created_at: string;
}

export interface Answerer {
  username: string;
  email: string;
}

export interface Question {
  id: number;
  content: string;
  created_at: string;
  is_anonymous: boolean;
  answers: Answer[];
  answerer: Answerer;
}

export interface QuestionsResponse {
  questions: Question[];
}
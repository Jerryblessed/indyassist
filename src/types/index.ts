export interface Message {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CityService {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
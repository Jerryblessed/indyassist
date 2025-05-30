import { useState, useEffect } from 'react';
import { Message } from '../types';
import { 
  AZURE_OPENAI_BASE, 
  AZURE_OPENAI_MODEL, 
  AZURE_OPENAI_KEY, 
  AZURE_OPENAI_VERSION,
  SYSTEM_PROMPT 
} from '../config/azure';

export const useChatApi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load messages from localStorage on initial load
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error parsing saved messages:', error);
        localStorage.removeItem('chatMessages');
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message to state
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Format messages for API
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(msg => ({ 
          role: msg.role, 
          content: msg.content 
        })),
        { role: 'user', content }
      ];

      // Call Azure OpenAI API
      const response = await fetch(
        `${AZURE_OPENAI_BASE}/openai/deployments/${AZURE_OPENAI_MODEL}/chat/completions?api-version=${AZURE_OPENAI_VERSION}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': AZURE_OPENAI_KEY
          },
          body: JSON.stringify({
            messages: apiMessages,
            max_tokens: 800,
            temperature: 0.7,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0
          })
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant response to state
      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Azure OpenAI:', error);
      
      // Add error message if API call fails
      const errorMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment or contact the Mayor's Action Center at 317-327-4622 for immediate assistance.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  };
};
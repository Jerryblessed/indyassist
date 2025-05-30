import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '../types';
import { useChatApi } from '../hooks/useChatApi';

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, isLoading, sendMessage } = useChatApi();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-focus input on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-indy overflow-hidden">
      {/* Chat header */}
      <div className="bg-indy-blue-500 text-white p-4 flex items-center">
        <Bot className="mr-2" size={20} />
        <div>
          <h2 className="font-semibold">IndyAssist</h2>
          <p className="text-xs text-indy-blue-100">Your Indianapolis city services assistant</p>
        </div>
      </div>

      {/* Welcome message */}
      {messages.length === 0 && (
        <div className="bg-indy-blue-50 p-4 m-4 rounded-lg border border-indy-blue-100">
          <div className="flex items-start">
            <Info className="text-indy-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-indy-blue-700 text-sm">
                Welcome to IndyAssist! I'm here to help with Indianapolis city services, answer questions,
                and provide information about resources available to residents. How can I assist you today?
              </p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                <button 
                  onClick={() => setInput("When is my trash pickup?")}
                  className="text-left text-xs bg-white px-3 py-2 rounded border border-indy-blue-100 hover:bg-indy-blue-50 transition-colors"
                >
                  When is my trash pickup?
                </button>
                <button 
                  onClick={() => setInput("How do I report a pothole?")}
                  className="text-left text-xs bg-white px-3 py-2 rounded border border-indy-blue-100 hover:bg-indy-blue-50 transition-colors"
                >
                  How do I report a pothole?
                </button>
                <button 
                  onClick={() => setInput("What parks are open today?")}
                  className="text-left text-xs bg-white px-3 py-2 rounded border border-indy-blue-100 hover:bg-indy-blue-50 transition-colors"
                >
                  What parks are open today?
                </button>
                <button 
                  onClick={() => setInput("How do I pay my water bill?")}
                  className="text-left text-xs bg-white px-3 py-2 rounded border border-indy-blue-100 hover:bg-indy-blue-50 transition-colors"
                >
                  How do I pay my water bill?
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-indy-blue-500 ml-2' : 'bg-indy-gold-500 mr-2'
                }`}>
                  {message.role === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-indy-blue-500 text-white rounded-tr-none'
                      : 'bg-white border border-gray-200 shadow-sm rounded-tl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex max-w-[80%]">
              <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-indy-gold-500 mr-2">
                <Bot size={16} className="text-white" />
              </div>
              <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm rounded-tl-none">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-indy-blue-500" />
                  <p className="text-sm text-indy-blue-400">Thinking...</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-end space-x-2">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indy-blue-500 focus:border-transparent resize-none overflow-hidden"
              rows={1}
              style={{ 
                minHeight: '44px', 
                maxHeight: '120px',
                height: 'auto' 
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`p-2 rounded-full ${
              !input.trim() || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-indy-blue-500 text-white hover:bg-indy-blue-600'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-indy-blue-500 focus:ring-offset-2`}
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send, Shift+Enter for a new line
        </p>
      </form>
    </div>
  );
};

export default ChatInterface;
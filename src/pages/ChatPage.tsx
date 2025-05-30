import React from 'react';
import ChatInterface from '../components/ChatInterface';

const ChatPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-indy-blue-500 mb-2">
          Chat with IndyAssist
        </h1>
        <p className="text-gray-600 mb-8">
          Ask questions about Indianapolis city services and get immediate assistance
        </p>
        
        {/* Chat interface */}
        <div className="h-[600px] mb-8">
          <ChatInterface />
        </div>
        
        {/* Disclaimer */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-500">
          <p className="mb-2">
            <strong>Disclaimer:</strong> IndyAssist provides information based on publicly available data about Indianapolis city services.
          </p>
          <p>
            For emergency services, please call 911. For official information, please visit{' '}
            <a href="https://www.indy.gov" target="_blank" rel="noopener noreferrer" className="text-indy-blue-500 hover:underline">
              indy.gov
            </a>
            {' '}or contact the Mayor's Action Center at 317-327-4622.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
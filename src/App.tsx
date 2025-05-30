import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FAQsPage from './pages/FAQsPage';
import ChatPage from './pages/ChatPage';
import EmergencyButton from './components/EmergencyButton';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
        <EmergencyButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
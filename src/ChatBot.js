import React, { useState } from 'react';
import './ChatBot.css';
import logoGif from './Dolatbot.gif';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: 'user', text: message }]);
      setMessage('');

      // Simulated bot response
      setTimeout(() => {
        setChatHistory((prevChat) => [
          ...prevChat,
          { sender: 'bot', text: 'Welcome to Bank Support! How can I assist you today?' },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Sidebar/Animated Branding Section */}
      <div className="branding-section">
        <div className="animated-logo">
          <img src={logoGif} alt="Dolatbot Logo" />
        </div>
      </div>

      {/* Chatbot Container */}
      <div className="chatbot-container">
        <div className="chat-display">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.sender}`}>
              <div className="chat-bubble">{chat.text}</div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown} // Add this for Enter key functionality
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

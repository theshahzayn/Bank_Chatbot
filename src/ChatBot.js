import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './ChatBot.css';
import logoGif from './Dolatbot.gif';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      // Add the user's message to the chat history
      setChatHistory([...chatHistory, { sender: 'user', text: message }]);
      setMessage(''); // Clear the input field

      try {
        // Send the message to the Flask backend
        const response = await axios.post('http://127.0.0.1:5000/predict', {
          input_text: message,
        });

        // Add the bot's response to the chat history
        setChatHistory((prevChat) => [
          ...prevChat,
          { sender: 'bot', text: response.data.response },
        ]);
      } catch (error) {
        console.error('Error connecting to the backend:', error);
        setChatHistory((prevChat) => [
          ...prevChat,
          { sender: 'bot', text: 'Sorry, I am having trouble connecting to the server.' },
        ]);
      }
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
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

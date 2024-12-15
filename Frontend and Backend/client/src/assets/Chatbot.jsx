import React, { useState } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control visibility
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! How can I assist you today?' }, // Initial bot message
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: inputMessage },
    ]);

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3001/api/chatbot?userMessage=${encodeURIComponent(
          inputMessage
        )}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.response },
      ]);
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
    setInputMessage('');
  };

  if (!isOpen) return null; // If chatbot is closed, render nothing

  return (
    <div id="chat-container">
      <div id="chat-header">
        Chatbot
        <button id="close-btn" onClick={() => setIsOpen(false)}>✖</button>
      </div>
      <div id="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'userText' : 'botText'}>
            <span>{msg.text}</span>
          </div>
        ))}
        {loading && <p className="botText"><span>Loading...</span></p>}
      </div>
      <div id="userInput">
        <input
          id="textInput"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button id="buttonInput" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
